---
created: 2024-12-30 17:06:50 +0900
updated: 2024-12-31 20:09:50 +0900
---

# 설치

```bash
brew tap dart-lang/dart

brew install dart

# 설치 후 버전 확인
dart --version
```

# main()

```dart
void main(){
  var firstName = "John";
  var lastName = "Doe";
  print("Full name is $firstName $lastName");
}
```

- `void main()`은 프로그램 실행이 시작되는 엔트리 포인트
- 모든 프로그램은 main 함수로 시작됨
- 중괄호 `{}`는 코드 블록의 시작과 끝
- `print(“Hello World!”);`는 화면에 `Hello World!`를 출력
- 각 코드 문장은 세미콜론으로 끝나야 함

# 다트 프로젝트 만들기

```bash
# 생성
dart create dart-tutorial

# 실행
dart run
```

# 변수

## 유형

- 문자열 : 텍스트
  - 예: “John” [따옴표로 묶어야 함]
- int : 정수
  - 예: 10, -10, 8555 [10진수는 포함되지 않음]
- double : 부동 소수점
  - 예: 10.0, -10.2, 85.698 [10진수 포함]
- num : 모든 유형의 숫자
  - 예: 10, 20.2, -20 [int와 double 모두]
- bool : true, false
  - 예: true, false [참 또는 거짓 값만 저장]
- var : 모든 유형의 값
  - 예: 'Bimal', 12, 'z', true

## 규칙

- 변수 이름은 대소문자를 구분합니다. 즉, a와 A는 다름
- 변수 이름은 문자와 알파벳으로 구성될 수 있음
- 변수 이름은 숫자로 시작할 수 없음
- 키워드는 변수 이름으로 사용할 수 없음
- 변수 이름에는 공백이 허용되지 않음
- 밑줄(\_)과 달러($) 기호를 제외한 특수문자는 허용되지 않음

## 네이밍 컨벤션

- lowerCamelCase

## 상수

```dart
void main(){
  const pi = 3.14;
  pi = 4.23; // not possible
  print("Value of PI is $pi");
}
```

# 데이터 유형

| Data Type | Keyword          | Description                                            |
| --------- | ---------------- | ------------------------------------------------------ |
| Numbers   | int, double, num | It represents numeric values                           |
| Strings   | String           | It represents a sequence of characters                 |
| Booleans  | bool             | It represents Boolean values true and false            |
| Lists     | List             | It is an ordered group of items                        |
| Maps      | Map              | It represents a set of values as key-value pairs       |
| Sets      | Set              | It is an unordered list of unique values of same types |
| Runes     | runes            | It represents Unicode values of String                 |
| Null      | null             | It represents null value                               |

## 멀티라인 스트링

```dart
void main() {
// Multi Line Using Single Quotes
String multiLineText = '''
This is Multi Line Text
with 3 single quote
I am also writing here.
''';

// Multi Line Using Double Quotes
String otherMultiLineText = """
This is Multi Line Text
with 3 double quote
I am also writing here.
""";

// Printing Information
print("Multiline text is $multiLineText");
print("Other multiline text is $otherMultiLineText");
}

// 출력
// Multiline text is This is Multi Line Text
// with 3 single quote
// I am also writing here.
//
// Other multiline text is This is Multi Line Text
// with 3 double quote
// I am also writing here.
```

## Raw 스트링

```dart
void main() {
  // Set price value
  num price = 10;
  String withoutRawString = "The value of price is \t $price"; // regular String
  String withRawString =r"The value of price is \t $price"; // raw String

  print("Without Raw: $withoutRawString"); // regular result
  print("With Raw: $withRawString"); // with raw result
}
```

## 타입 변환

```dart
// string to int
int intvalue = int.parse(strvalue);

// string to double
double doublevalue = double.parse(strvalue);

// int to string
String oneInString = one.toString();

// double to int
int num2 = doublevalue.toInt();
```

## Sets

```dart
void main() {
  Set<String> weekday = {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};
  print(weekday);
}
```

## Maps

```dart
void main() {
  Map<String, String> myDetails = {
    'name': 'John Doe',
    'address': 'USA',
    'fathername': 'Soe Doe'
  };
  // displaying the output
  print(myDetails['name']);
}
```

## Runes

유니코드 값을 얻을 수 있음

```dart
void main() {
  String value = "a";
  print(value.runes);
}

// (97)
```

## 런타임 타입 체크

```dart
void main() {
   var a = 10;
   print(a.runtimeType);
   print(a is int); // true
}
```

## Dart is Optionally-typed language

### Static

```dart
void main() {
   var myVariable = 50; // You can also use int instead of var
   myVariable = "Hello"; // this will give error
   print(myVariable);
}
```

### Dynamic

```dart
void main() {
   dynamic myVariable = 50;
   myVariable = "Hello";
   print(myVariable);
}
```

# 주석

- 단일 줄 주석: 단일 줄의 코드에 주석을 달 때 사용 - `// 이것은 단일 줄 주석입니다.`
- 다중 줄 주석: 여러 줄의 코드에 주석을 달 때 사용 - `/* 이것은 다중 줄 주석입니다. */`
- 문서 주석: 프로젝트/소프트웨어 패키지에 대한 문서 또는 참조를 생성하는 경우 `/// 이것은 문서 주석입니다.`

# 연산자

## 산술

```dart
void main() {
  // declaring two numbers
  int num1=10;
  int num2=3;

  // performing arithmetic calculation
  int sum=num1+num2;       // addition
  int diff=num1-num2;      // subtraction
  int unaryMinus = -num1;    // unary minus
  int mul=num1*num2;       // multiplication
  double div=num1/num2;    // division
  int div2 =num1~/num2;     // integer division
  int mod=num1%num2;       // show remainder

  //Printing info
  print("The addition is $sum.");
  print("The subtraction is $diff.");
  print("The unary minus is $unaryMinus.");
  print("The multiplication is $mul.");
  print("The division is $div.");
  print("The integer division is $div2.");
  print("The modulus is $mod.");
}
```

## 증감

```dart
void main() {
  // declaring two numbers
  int num1=0;
  int num2=0;

  // performing increment / decrement operator

  // pre increment
  num2 = ++num1;
  print("The value of num2 is $num2");

  // reset value to 0
  num1 = 0;
  num2 = 0;

  // post increment
  num2 =  num1++;
  print("The value of num2 is $num2");
}
```

## 할당

```dart
void main() {
  double age = 24;
  age+= 1;  // Here age+=1 means age = age + 1.
  print("After Addition Age is $age");
  age-= 1;  //Here age-=1 means age = age - 1.
  print("After Subtraction Age is $age");
  age*= 2;  //Here age*=2 means age = age * 2.
  print("After Multiplication Age is $age");
  age/= 2;  //Here age/=2 means age = age / 2.
  print("After Division Age is $age");
}
```

## 비교

```dart
void main() {
  int num1=10;
  int num2=5;

  //printing info
  print(num1==num2);
  print(num1<num2);
  print(num1>num2);
  print(num1<=num2);
  print(num1>=num2);
}
```

## 논리

```dart
void main(){
  int userid = 123;
  int userpin = 456;

  // Printing Info
  print((userid == 123) && (userpin== 456)); // print true
  print((userid == 1213) && (userpin== 456)); // print false.
  print((userid == 123) || (userpin== 456)); // print true.
  print((userid == 1213) || (userpin== 456)); // print true
  print((userid == 123) != (userpin== 456));//print false
}

```

## 타입 체크

```dart
void main() {
  String value1 = "Dart Tutorial";
  int age = 10;

  print(value1 is String);
  print(age is !int);
}
```

# User Input

```dart
import 'dart:io';

void main() {
  String? s = stdin.readLineSync();
  int? i = stdin.readLineSync();
  double? d = stdin.readLineSync();
}

```

# 문자열 다루기

## String 속성

- `codeUnits`: 이 문자열의 UTF-16 코드 단위의 수정 불가능한 목록을 반환
- `isEmpty`: 이 문자열이 비어 있는지 여부를 반환
- `isNotEmpty`: 이 문자열이 비어 있으면 false를 반환
- `length`: 공백, 탭, 줄 바꿈 문자를 포함한 문자열의 길이를 반환

## String 메서드

- `toLowerCase()`: 이 문자열의 모든 문자를 소문자로 변환
- `toUpperCase()`: 이 문자열의 모든 문자를 대문자로 변환
- `trim()`: 앞뒤 공백을 제외한 문자열을 반환
- `compareTo()`: 이 객체를 다른 객체와 비교
- `replaceAll()`: 지정된 패턴과 일치하는 모든 하위 문자열을 주어진 값으로 변환
- `split()`: 지정된 구분 기호와 일치하는 부분에서 문자열을 분할하고 하위 문자열 목록을 반환
- `toString()`: 이 객체의 문자열 표현을 반환
- `substring()`: 원하는 위치의 텍스트를 반환
- `codeUnitAt()`: 주어진 인덱스의 16비트 UTF-16 코드 단위를 반환

# 출처

[LEARN DART](https://dart-tutorial.com/introduction-and-basics/string-in-dart/)
