---
created: 2024-12-31 05:47:15 +0900
updated: 2024-12-31 20:09:12 +0900
---

# Dart Null Safety

Dart의 **Null Safety**는 변수나 객체가 `null`을 참조할 수 있는지 여부를 타입 시스템에서 구분하여, 런타임에서 발생하는 NullPointerException 등을 사전에 방지하기 위한 기능이다. Dart 2.12 이상 버전에서 지원하며, 컴파일 시점에 `null` 관련 오류를 미리 검출한다.

## 주요 특징

### Non-nullable 타입

- 예: `int`, `String`, `List<int>` 등
- `null` 값을 허용하지 않는 타입
- 컴파일러가 해당 변수가 절대 `null`이 아님을 보장

### Nullable 타입

- 예: `int?`, `String?`, `List<int>?` 등
- `null`을 포함할 수 있는 타입
- 사용 시 `null` 여부 확인 또는 `?.`, `??` 등 null-safe 연산자가 필요

### `late` 키워드

- 초기화 전에 접근하면 `LateInitializationError`가 발생
- 변수를 선언한 뒤, 나중에 반드시 초기화할 것을 보장하는 키워드

### 흐름 분석(Flow Analysis)

- 코드 흐름을 정적으로 분석해 변수의 `null` 상태를 추적
- 예를 들어, `if (variable != null)` 블록 내부에서는 `variable`이 이미 non-null 임

### 예시 코드

```dart
void main() {
  String? name;        // null이 될 수 있는 String 타입
  name = 'Dart';       // 값 대입

  // null 가능성이 있으므로 직접 .length 접근 시 오류 발생
  // print(name.length); // 컴파일 에러

  // null 체크 후 사용
  if (name != null) {
    print(name.length); // non-null로 안전하게 접근
  }

  // null-safe 연산자 사용
  print(name?.length);  // name이 null이면 null, 아니면 length 반환
}
```

## `late` 키워드

`late` 키워드는 변수를 선언할 때 즉시 초기화하지 않고, **필요할 때(처음 접근 시)에 초기화**하거나, **개발자가 특정 시점에 직접 초기화**하겠다는 의도를 컴파일러에게 명시적으로 알리는 기능이다. `late`를 사용하면 변수 선언 시점을 유연하게 조정할 수 있고, 초기화 전에 접근할 경우 오류를 통해 잘못된 사용을 조기에 발견할 수 있다.

### 1. 기본 원리

- `late`로 선언된 변수는 메모리에 즉시 값을 할당하지 않는다.
- 해당 변수에 접근하기 전까지 초기화를 미루거나, 특정 시점에 개발자가 직접 값을 할당할 수 있다.
- 초기화되지 않은 `late` 변수에 접근하면 `LateInitializationError`가 발생한다.

### 2. 사용 목적

값의 계산(또는 객체 생성)이 무겁거나, 외부 리소스(예: 파일, 네트워크) 접근이 필요한 경우, 미리 값을 준비해둘 필요가 없을 때 사용한다.

### 3. 기본 예시

```dart
// 일반 변수 선언과 달리 값 없이 선언 가능
late String description;

void main() {
  // 사용 전까지 초기화하지 않아도 됨
  // print(description); // 초기화 전 접근 시 LateInitializationError 발생

  // 필요한 시점에 직접 할당
  description = '지연 초기화된 문자열';
  print(description); // 정상적으로 출력: "지연 초기화된 문자열"
}
```

### 4. late final과 함께 사용하기

late와 final을 함께 사용하면, 한 번만 값을 할당할 수 있고 이후 변경이 불가능해진다.
이를 통해 지연 초기화와 불변성(immutable)을 동시에 확보할 수 있다.

```dart
late final int expensiveValue;

void main() {
  // 사용 시점에 초기화
  expensiveValue = calculateExpensiveOperation();
  print(expensiveValue); // 이후 이 값은 변경할 수 없음
}

// 무거운 연산(예: 대규모 계산, 파일 읽기 등)을 모사
int calculateExpensiveOperation() {
  print('비용이 큰 연산 실행');
  return 42;
}

```

late final 변수는 초기화 후 재할당이 불가하므로, 초기에 한 번만 값이 설정되면 이후에 값을 변경하려고 하면 컴파일 에러가 발생한다.

### 5. Lazy 초기화

heavyComputation 함수는 description 변수가 사용될 때 호출된다.

```dart
// Person class
class Person {
  final int age;
  final String name;
  late String description = heavyComputation();

// constructor
  Person(this.age, this.name) {
    print("Constructor is called");
  }
// method
  String heavyComputation() {
    print("heavyComputation is called");
    return "Heavy Computation";
  }
}

void main() {
  // object of Person class
  Person person = Person(10, "John");
  print(person.name);
  print(person.description);
}
```

### 6. 주의사항 및 권장사항

1. 초기화를 반드시 보장해야 하는 경우

   - late 변수는 선언만 하고 초기화하지 않으면, 접근 시 에러가 발생한다.
   - 따라서, 프로그램 흐름상 반드시 할당이 일어날 수 있도록 설계해야 한다.

2. late의 남용은 삼간다

   - 모든 변수를 late로 선언하면, 가독성이 떨어지고 런타임 에러 리스크가 커질 수 있다.
   - 초기화 시점이 분명하고, 정말로 지연 초기화가 필요한 경우에만 사용한다.

3. late보다 Nullable 타입(?)이 더 적합한 경우

   - 만약 변수가 ‘할당 전까지 null일 수도 있다’는 로직이라면 late 대신 String?처럼 Nullable 타입을 쓰는 것이 낫다.
   - late는 “초기화 전에는 절대 접근해선 안 된다”는 의미이며, “null을 가능하게 둔다”와는 목적이 다르다.

4. debugLate

   - Dart 2.17부터는 --enable-asserts나 디버그 모드에서 late 변수를 디버그하기 위해 late 대신 debugLate를 사용할 수 있다.
   - 이는 디버깅 시점에서만 유용하며, 배포용으로 사용되진 않는다.

## Type Promotion

Dart의 **Type Promotion**은 조건문 등을 통해 변수의 타입이 보다 구체적으로 추론될 때, 해당 블록 내부에서 컴파일러가 변수의 타입을 자동으로 좁혀주는 기능이다.

### 1. 주요 특징

1. **조건문 기반**

   - `if (variable != null)` 또는 `is` 체크 등을 거치면, 블록 내부에서 `variable`이 non-null 혹은 특정 타입임을 보장받는다.

2. **자동 타입 변환**

   - 명시적인 캐스팅 없이도, 컴파일러가 안전하다고 판단하면 변수를 더 구체적인 타입으로 간주한다.

3. **정적 분석 활용**
   - 흐름 분석(Flow Analysis)을 통해, 조건문 바깥에서는 원래 타입으로 복귀하고, 조건문 안에서는 프로모션된 타입을 사용한다.

### 2. 간단 예시

```dart
void printLength(String? text) {
  if (text != null) {
    // 여기서는 text가 non-null임이 보장되므로 String으로 자동 프로모션
    print(text.length);
  }
}
```

```dart
void main(){
  Object name = "Pratik";
  // print(name.length) will not work because Dart doesn't know that name is a String

  if(name is String) {
  // name promoted from Object to String
    print("The length of name is ${name.length}");
  }
}
```

```dart
// method to print the length of the text
void printLength(String? text){
    if(text == null) {
        throw Exception("The text is null");
    }
    print("Length of text is ${text.length}");
}
// main method
void main() {
    printLength("Hello");
}
```

### 3. 주의사항

- 조건문이 변수에 미치는 영향을 컴파일러가 확실히 추론할 수 있어야 한다.
- 변수가 스코프 내에서 달라질 수 있다면 타입 프로모션은 적용되지 않는다.

가령 아래 코드와 같이 myMethod 함수 내에서 value에 재할당하지 않고 if 조건에서 stringorNull을 바로 체크한다면, 컴파일러는 stringorNull.length르 호출할 때 새로 null이 반환될 수 있다고 가정하고 타입 프로모션을 적용하지 않는다.

```dart
// Try to solve the error using type promotion
import 'dart:math';
class DataProvider{
    String? get stringorNull => Random().nextBool() ? "Hello" : null;

    void myMethod(){
        String? value = stringorNull;
        if(value is String){
            print("The length of value is ${value.length}");
        }else{
            print("The value is not string.");
        }

    }
}

void main() {
    DataProvider().myMethod();
}
```

## 출처

- [LEARN DART](https://dart-tutorial.com/null-safety/)
