---
created: 2024-12-10 14:19:38 +0900
updated: 2024-12-11 21:26:07 +0900
---

최근 Vercel이나 Netlify 덕분에 별도의 서버 구축 없이도 간단한 프로젝트의 배포가 편리해졌지만 대부분의, 아마 거의 모든 서비스 공급자들이, 정적 IP를 제공하지는 않는 것으로 보인다. 그래서 아웃바운드를 위한 정적 IP가 필요한 경우에는 곤란한 경우가 있다. 최근 사이드 프로젝트에서 여러 이커머스의 오픈 API를 사용할 일이 있었는데 대부분이 어드민에 등록된 IP만 API 호출을 허용하기 때문에 이를 위한 해결 방안이 필요했다. 찾아보면 EC2에 배포를 하고 Elastic IP를 적용하는 방법, VPC와 NAT 게이트웨이의 조합 또는 로드밸런서를 활용하는 방식도 어렵지 않게 볼 수 있다.

다만 문제는 편의성과 비용인데 편한 배포 서비스를 이용하면서도 적은 비용으로 정적 IP를 확보할 수 있는 방법을 찾아보고 싶었다. 그러던 중 AWS Lambda에 정적 IP(Elastic IP)를 할당하기 위한 VPC, ENI(Elastic Network Interface), 커스텀 리소스 등을 활용한 방법을 발견했고 내가 시도했던 내용을 다시 정리했다.

## AWS Lambda에 정적 IP를 할당하는 방법

AWS Lambda는 기본적으로 실행 환경이 재활용되거나 재생성될 때마다 퍼블릭 IP가 변경되는 특성을 가진다. 이는 외부 서비스가 Lambda의 IP를 화이트리스트 방식으로 관리하는 경우 곤란을 야기한다. 이러한 상황에서 Lambda 함수에 고정된 퍼블릭 IP, 즉 정적 IP를 할당하려고 한다.

요약하면 Lambda를 VPC 내부 퍼블릭 서브넷에 배치하고 해당 Lambda 인스턴스가 사용하는 네트워크 인터페이스(ENI)를 식별한 뒤, 그 ENI에 Elastic IP(EIP)를 할당하는 방식이다. 이를 통해 Lambda가 항상 동일한 IP로 외부에 접근할 수 있는 환경을 구축한다.

구현 및 유지보수 편의를 위해 CDK를 활용할건데 이를 위해 지난 [CDK 프로젝트 만들기](../CDK_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%A7%8C%EB%93%A4%EA%B8%B0/)에서 CDK 사용법을 익혔다.

## 주요 개념 정리

### 1. VPC(Virtual Private Cloud)

AWS에서 제공하는 가상 네트워크 환경으로, 사용자가 IP 대역, 서브넷, 라우팅 등을 원하는 대로 구성할 수 있다. Lambda를 VPC 내부에 배치하면 그 Lambda는 해당 VPC 내의 자원에 접근하거나, 특정 서브넷과 보안 그룹을 통해 트래픽을 제어할 수 있다.

### 2. ENI(Elastic Network Interface)

VPC 내부 리소스(EC2, Lambda 등)가 활용하는 가상 네트워크 어댑터이다. ENI에는 IP 주소가 할당되며, VPC 내 통신의 기반이 된다. Lambda 함수를 VPC에 연결하면 해당 함수는 ENI를 통해 네트워크에 접속한다.

### 3. EIP(Elastic IP)

정적으로 할당 가능한 공인 IP 주소이다. 특정 ENI에 EIP를 연결하면, 해당 ENI를 사용하는 리소스는 항상 동일한 퍼블릭 IP를 갖게 된다.

## 구현 절차

### 1. VPC 및 서브넷 구성

- NAT 게이트웨이를 사용하지 않는 간단한 VPC를 생성한다.
- 퍼블릭 서브넷을 통해 Lambda 함수가 퍼블릭 IP를 가질 수 있는 환경을 마련한다.
- 하나의 EIP를 사용할 예정으로 단일 AZ를 사용한다.

```ts
// lib/stack.ts
// ...

export class StaticLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new cdk.aws_ec2.Vpc(this, 'Vpc', {
      natGateways: 0, // NAT 사용 X
      maxAzs: 1, // 단일 AZ 사용
      subnetConfiguration: [
        // 퍼블릭 서브넷 설정 명시
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: cdk.aws_ec2.SubnetType.PUBLIC
        }
      ]
    });
  }
}
```

### 2. Lambda 함수 배포

- Lambda 함수를 VPC의 퍼블릭 서브넷에 배치한다.
- 보안 그룹(Security Group)을 통해 Lambda 접근 트래픽을 제어한다.
- 이로써 Lambda 함수는 VPC 내부에 위치하며, 실행 시 ENI를 할당받는다.

```ts
// lib/stack.ts
// ...

export class StaticLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // ...

    const securityGroup = new cdk.aws_ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc
    });

    const lambdaResource = new cdk.aws_lambda_nodejs.NodejsFunction(this, 'MyProxy', {
      vpc,
      allowPublicSubnet: true,
      vpcSubnets: { subnets: vpc.publicSubnets },
      securityGroups: [securityGroup],
      entry: join(__dirname, '../lambda/handler.ts'),
      handler: 'handler',
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X
    });
  }
}
```

### 3. ENI 식별을 위한 커스텀 리소스(AwsCustomResource) 활용

- Lambda 함수가 생성된 후 `describeNetworkInterfaces` API를 호출하는 커스텀 리소스를 배치한다.
- Security Group ID, Subnet ID를 기준으로 Lambda에 할당된 ENI를 식별한다.
- 이 커스텀 리소스는 CDK를 통해 쉽게 관리할 수 있다.

```ts
// lib/stack.ts
// ...

export class StaticLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // ...

    // 퍼블릭 서브넷 선택
    const subnet = vpc.publicSubnets[0];

    // Lambda 함수가 사용하는 네트워크 인터페이스를 조회하는 AWS Custom Resource 생성
    const customResource = new cdk.custom_resources.AwsCustomResource(
      subnet,
      "customResource",
      {
        onUpdate: {
          physicalResourceId: cdk.custom_resources.PhysicalResourceId.of(
            `${securityGroup.securityGroupId}-${subnet.subnetId}-CustomResource`
          ),
          service: "EC2",
          action: "describeNetworkInterfaces",
          parameters: {
            Filters: [
              { Name: "interface-type", Values: ["lambda"] },
              { Name: "group-id", Values: [securityGroup.securityGroupId] },
              { Name: "subnet-id", Values: [subnet.subnetId] },
            ],
          },
        },
        policy: cdk.custom_resources.AwsCustomResourcePolicy.fromSdkCalls({
          resources:
            cdk.custom_resources.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      }
    );

    // Lambda 함수가 사용하는 네트워크 인터페이스에 의존성 추가
    customResource.node.addDependency(lambdaResource);
}
```

### 4. EIP 할당 및 EIP Association

- 식별한 ENI에 EIP를 할당한다.
- EIP와 ENI를 연결(EIP Association)하면 해당 Lambda 함수는 해당 EIP를 통해 고정된 퍼블릭 IP로 외부에 접근할 수 있다.
- 이를 통해 외부 서비스는 늘 동일한 IP를 확인할 수 있다.

```ts
// lib/stack.ts
// ...

export class StaticLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // ...
    // Elastic IP 생성
    const elasticIP = new cdk.aws_ec2.CfnEIP(subnet, 'EIP', {
      domain: 'vpc'
    });

    // Elastic IP를 Lambda 함수가 사용하는 네트워크 인터페이스에 연결
    new cdk.aws_ec2.CfnEIPAssociation(subnet, 'EIPAssociation', {
      networkInterfaceId: customResource.getResponseField('NetworkInterfaces.0.NetworkInterfaceId'),
      allocationId: elasticIP.attrAllocationId
    });

    // Elastic IP 출력
    new cdk.CfnOutput(subnet, 'ElasticIP', {
      value: elasticIP.attrPublicIp
    });
  }
}
```

### 5. 주기적 Lambda 호출 설정

- EventBridge 규칙을 사용하여 Lambda 함수를 일정 주기(예: 매주 특정일, 특정 시각)에 실행한다.
- 이 주기적 호출은 Lambda의 ENI가 장기간 비활성화로 회수되는 문제를 방지한다.
- 결과적으로 EIP가 지속적으로 Lambda ENI와 연결된 상태를 유지한다.

```ts
// lib/stack.ts
// ...

export class StaticLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // ...

    new cdk.aws_events.Rule(this, 'LambdaCronJobEventRule', {
      schedule: cdk.aws_events.Schedule.cron({
        minute: '0',
        hour: '10',
        weekDay: 'SUN,WED'
      }),
      targets: [new cdk.aws_events_targets.LambdaFunction(lambdaResource)]
    });
  }
}
```

### 6. API 게이트웨이 설정

- 외부에서 람다 함수를 호출할 수 있도록 API Gateway를 설정한다.

```ts
// lib/stack.ts
// ...

export class StaticLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    // ...
    const api = new apigateway.LambdaRestApi(this, 'MyProxyApi', {
      handler: lambdaResource,
      // proxy: true일 경우 / 경로로 모든 요청을 Lambda로 전달함
      // 필요에 따라 proxy 옵션을 false로 두고 경로와 메서드를 명확히 정의할 수도 있다.
      proxy: true
    });

    // API Gateway의 엔드포인트 URL 출력
    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url
    });
  }
}
```

## 유지 보수 및 고려사항

### 비용

프리티어가 아니라면 다음 비용을 고려해야 한다.

- [AWS Lambda 요금](https://aws.amazon.com/ko/lambda/pricing/): x86 아키텍처 기준, 100만 요청 발생, 요청별 duration 500ms, 할당된 메모리 128MB 기준으로 계산할 때 아래와 같음
  ```yml
  Unit conversions
  Amount of memory allocated: 128 MB x 0.0009765625 GB in a MB = 0.125 GB
  Amount of ephemeral storage allocated: 512 MB x 0.0009765625 GB in a MB = 0.5 GB
  Pricing calculations
  1,000,000 requests x 500 ms x 0.001 ms to sec conversion factor = 500,000.00 total compute (seconds)
  0.125 GB x 500,000.00 seconds = 62,500.00 total compute (GB-s)
  Tiered price for: 62,500.00 GB-s
  62,500 GB-s x 0.0000166667 USD = 1.04 USD
  Total tier cost = 1.0417 USD (monthly compute charges)
  Monthly compute charges: 1.04 USD
  1,000,000 requests x 0.0000002 USD = 0.20 USD (monthly request charges)
  Monthly request charges: 0.20 USD
  0.50 GB - 0.5 GB (no additional charge) = 0.00 GB billable ephemeral storage per function
  Monthly ephemeral storage charges: 0 USD
  1.04 USD + 0.20 USD = 1.24 USD
  Lambda cost (monthly): 1.24 USD
  ```
  (프리티어는 월별 100만 요청 무료, 초당 40만 기가바이트 컴퓨팅 시간 무료)
- [EIP 요금](https://aws.amazon.com/ko/vpc/pricing/): 사용 중인 퍼블릭 IPv4 주소의 시간당 요금 $0.005, (프리티어는 매달 750시간 무료)
- [API Gateway 요금](https://aws.amazon.com/ko/api-gateway/pricing/): 월별 첫 3억 건은 100만 요청 당 $1.23, 512KB 단위 사용량 계측, (프리티어는 매달 100만 요청 무료)

### 대안과 한계

- 앞서 언급한 것처럼 EC2에 배포하고 EIP를 붙이는 방식이나, NAT 게이트웨이를 사용한 방법도 있지만 확실히 비용이 더 비싸다.
- 잠시 써보는 용도라면 [fixie](https://usefixie.com/)라는 정적 IP를 제공하는 프록시 서비스도 있다. 월 500번의 요청은 무료로 사용할 수 있다.
- 정석적인 방법은 아니라서 AWS의 내부 구현에 따라 리스크가 발생할 수 있다. 장기적으로 안정적인 서비스를 구축해야 한다면 적합한 방식은 아닌 것 같다.

## 마무리

- AWS Lambda에 고정된 퍼블릭 IP를 할당하기 위한 한 가지 방법을 정리했다.
- 여러 프로젝트에서 화이트리스트를 위한 정적 IP가 필요한 경우 AWS Lambda를 경유지로 사용할 수 있는 발판을 마련했다.
- 이 방식은 VPC, ENI, 람다 및 EIP를 적절히 결합하여 구현할 수 있으며, AWS 인프라를 코드(CDK)로 정의함으로써 유지보수하거나 재현하기 좋다.
- 전체 코드는 [CDK Template of Lambda with Static IP](https://github.com/rheech22/cdk-static-lambda) 레포에서 확인 가능

## 참고

- [Deploy a Lambda with a static IP for FREE](https://dev.to/slsbytheodo/deploy-a-lambda-with-a-static-ip-for-free-4e0l)
