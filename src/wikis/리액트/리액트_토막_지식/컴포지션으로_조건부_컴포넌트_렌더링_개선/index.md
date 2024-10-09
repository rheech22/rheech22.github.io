---
created: 2024-10-09 17:13:11 +0900
updated: 2024-10-09 17:46:03 +0900
---


## 출처

[Component Composition is greate btw](https://tkdodo.eu/blog/component-composition-is-great-btw)을 읽고 요약한 글입니다.


## 본문 요약

상태에 따라 특정 컴포넌트의 렌더링 여부를 결정해야 하는 경우는 흔하다. 대표적으로 서버로부터 받는 데이터에 따라 무언가를 보여주거나 보여주지 않아야 하는 경우를 예로 들 수 있다. 다음 예시는 장바구니 페이지에서 상품 목록과 스켈레톤 UI를 조건부로 보여준다.  

```js
const CartPage = () => {
    const { data, loading } = useQuery(CART_QUERY); 

    return (
        <div>
            <Heading>Cart</Heading>
            <Content>
                {data?.isVIP ? <VIPInfo /> : null}
                {loading ? <Skeleton /> : null}
                {data 
                    ? data.products.map((product)=> (
                        <Product key={product.id} product={product}/>
                    ))
                    : null}
            </Content>
        </div>
    )
}
```

흔하게 접할 수 있는 모양이다. 만약 상품이 없는 경우 특정 요소를 보여주는 요구사항이 추가된다면 어떻게 구현해야 할까?  
```js
const CartPage = () => {
    const { data, loading } = useQuery(CART_QUERY); 

    return (
        <div>
            <Heading>Cart</Heading>
            <Content>
                {data?.isVIP ? <VIPInfo /> : null}
                {loading ? <Skeleton /> : null}
                {data 
                    ? data.products.map((product)=> (
                        <Product key={product.id} product={product}/>
                    ))
                    : <EmptyCart />}
            </Content>
        </div>
    )
}
```

상품이 없다면 `<EmptyCart />`를 반환한다. 하지만 이 방식에는 큰 결함이 있는데, 데이터 로딩 중에도 해당 UI가 보여질 수 있다는 점이다. 그래서 상품이 없는 경우와 로딩 중이 아닌 경우를 모두 만족할 때에만 `<EmptyCart />`를 렌더링하도록 한다.  
```js
const CartPage = () => {
    const { data, loading } = useQuery(CART_QUERY); 

    return (
        <div>
            <Heading>Cart</Heading>
            <Content>
                {data?.isVIP ? <VIPInfo /> : null}
                {loading ? <Skeleton /> : null}
                {!loading && !data ? <EmptyCart /> : null}
                {data 
                    ? data.products.map((product)=> (
                        <Product key={product.id} product={product}/>
                    ))
                    : null}
            </Content>
        </div>
    )
}
```

[출처](https://tkdodo.eu/blog/component-composition-is-great-btw#inject-comments)에서는 이러한 코드가 인지 부하를 유발한다고 지적한다. 내 지난 코드를 돌이켜봐도 이런 코드가 있었던 것도 같다. 컴포넌트 합성으로 이 코드를 어떻게 개선하면 좋을지 알아보자.

먼저 `Layout`을 분리한다.
```js
const CartLayout = ({children}) => {
    return (
        <div>
            <Heading>Cart</Heading>
            <Content>
                {children}
            </Content>
        </div>
    )
}


const CartPage = () => {
    const { data, loading } = useQuery(CART_QUERY); 

    return (
        <CartLayout>
            <Content>
                {data?.isVIP ? <VIPInfo /> : null}
                {loading ? <Skeleton /> : null}
                {loading && !data ? <EmptyCart /> : null}
                {data 
                    ? data.products.map((product)=> (
                        <Product key={product.id} product={product}/>
                    ))
                    : null}
            </Content>
        </CartLayout>
    )
}
```

그리고 레이아웃 컴포넌트와 함께 Return Early 패턴을 적용한다.
```js
const CartPage = () => {
    const { data, loading } = useQuery(CART_QUERY); 

    if(loading) {
        return (
            <CartLayout>
                <Skeleton />
            </CartLayout>
        )
    }

    if(!data) {
        return (
            <CartLayout>
                <EmptyCart />
            </CartLayout>
        )
    }

    return (
        <CartLayout>
            <Content>
                {data.isVIP ? <VIPInfo /> : null}
                {data.products.map((product)=> (
                    <Product key={product.id} product={product}/>
                ))}
            </Content>
        </CartLayout>
    )
}
```

이러한 변경에는 다음과 같은 장점이 있다.

- 인지 부하 감소: Return Early 구문으로 상태에 따라 무엇이 반환될지 명확하게 인지할 수 있다. 중첩된 조건을 하나의 분기에서 다루지 않아도 되니까 확실히 인지 소모가 덜하다.
- 타입 추론: 타입스크립트를 사용한다면 타입 추론을 통해 더 안정적인 환경에서 개발할 수 있다. 마지막 분기에서 `data` 유무에 대해서는 의심할 여지가 없는 점을 주목하자.
- 확장 가능성: 다른 요구사항이 추가된다면, 분기만 하나 추가하면 되기 때문에 보다 확장하기 쉽다.

## 인상 깊었던 코멘트

- 로딩 상태 뿐만 아니라 에러 처리에 대한 내용도 포함되어야 한다는 코멘트가 인상적이었다. 컴포넌트가 직접 데이터를 받아오는 경우에는 `Promise` 객체의 상태에 따라 관심사를 분리하는 것이 복잡성을 많이 줄여준다는 내용이다. 그리고 발생할 수 있는 여러 에러 타입에 대해서도 어떻게 접근하면 좋을지 [자신의 글](https://dev.to/jaeyeophan/client-centered-user-exception-handling-23a1)을 소개하기도 한다. (알고보니 토스에 재직하시는 분이었다..!)
- 패턴 매칭 함수를 소개하는 내용도 인상적이었다. 각 조건에 따라 반환될 컴포넌트만 함수에 전달하는 방식으로 구현 복잡성을 크게 낮출 수 있을 것 같아서 실무에서도 써볼만한 코드라고 생각했다. 구현 코드는 [링크](https://gist.github.com/gpichot/df6b586c0ac09ebde794c7f5bef5800f)에서 확인할 수 있다.
    ```js
    export default function SessionsList() {
      const sessionsQuery = useSessionsListQuery();

      return (
        <PageLayout title="My sessions">
          {matchQueryStatus(sessionsQuery, {
            Loading: <Skeleton />
            Errored: <Alert kind="error" icon={<IconAlertCircle size="1rem" />} />,
            Empty: <Alert kind="default" description="No session scheduled" />,
            Success: ({ data }) => <SessionList items={data} />
          })}
        </PageLayout>
      );
    }
    ```

