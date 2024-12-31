---
created: 2024-12-31 19:43:59 +0900
updated: 2024-12-31 20:07:35 +0900
---

# 비동기 프로그래밍

## Future

- Future는 비동기 연산의 결과를 나타내며 두 가지 상태를 가질 수 있음
  - Uncompleted: 비동기 연산이 끝날 때까지 기다리는 상태
  - Completed: 비동기 연산이 끝난 상태(오류로 인해 실패한 경우도 포함)

### 생성

```dart
// function that returns a future
Future<String> getUserName() async {
  return Future.delayed(Duration(seconds: 2), () => 'Mark');
}
```

```dart
// function that returns a future
Future<String> getUserName() {
  return Future.value('Mark');
}
```

### 사용

```dart
void main() {
  print("Start");
  getUserName().then((value) => print(value));
  print("End");
}
```

### Async/Await

```dart
void main() {
  print("Start");
  getData();
  print("End");
}

void getData() async{
  String data = await middleFunction();
  print(data);
}

Future<String> middleFunction(){
  return Future.delayed(Duration(seconds:5), ()=> "Hello");
}
```

### 에러 핸들링

```dart
main() {
  print("Start");
  getData();
  print("End");
}


void getData() async{
    try{
        String data = await middleFunction();
        print(data);
    }catch(err){
        print("Some error $err");
    }
 
}

Future<String> middleFunction(){
  return Future.delayed(Duration(seconds:5), ()=> "Hello");
}
```

## Stream

### 정의

- **Stream**은 비동기 데이터 이벤트의 시퀀스를 처리하는 Dart의 핵심 개념
- 데이터의 흐름을 관리하며, 이벤트 기반 프로그래밍을 가능하게 함
- 여러 개의 데이터 이벤트를 순차적으로 전달하며, 비동기적으로 처리됨

### 생성

```dart
// function that returns a stream
Stream<String> getUserName() async* {
  await Future.delayed(Duration(seconds: 1));
  yield 'Mark';
  await Future.delayed(Duration(seconds: 1));
  yield 'John';
  await Future.delayed(Duration(seconds: 1));
  yield 'Smith';
}
```

```dart
// function that returns a stream
Stream<String> getUserName() {
  return Stream.fromIterable(['Mark', 'John', 'Smith']);
}
```

### 사용

```dart
// function that returns a stream
Stream<String> getUserName() async* {
  await Future.delayed(Duration(seconds: 1));
  yield 'Mark';
  await Future.delayed(Duration(seconds: 1));
  yield 'John';
  await Future.delayed(Duration(seconds: 1));
  yield 'Smith';
}

// main function
void main() async {
  // you can use await for loop to get the value from stream
  await for (String name in getUserName()) {
    print(name);
  }
}
```

### 단일 구독 스트림

- 하나의 리스너만 가질 수 있음
- 주로 파일 읽기, HTTP 요청 등 일회성 데이터 흐름에 사용

```dart
Stream<int> singleSubscriptionStream() async* {
  for (int i = 1; i <= 3; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

void main() async {
  var stream = singleSubscriptionStream();
  await for (var value in stream) {
    print(value); // 1, 2, 3 순차적으로 출력
  }
}
```

### 브로드캐스트 스트림

- 여러 리스너가 동시에 구독할 수 있음
- 주로 UI 이벤트, 웹소켓 등 다중 구독이 필요한 경우 사용

```dart
void main() {
  var controller = StreamController<int>.broadcast();

  controller.stream.listen((data) {
    print('Listener 1: $data');
  });

  controller.stream.listen((data) {
    print('Listener 2: $data');
  });

  controller.add(1);
  controller.add(2);
  controller.close();
}
// 출력:
// Listener 1: 1
// Listener 2: 1
// Listener 1: 2
// Listener 2: 2
```

## 출처

- [LEARN DART](https://dart-tutorial.com/asynchronous-programming/)



