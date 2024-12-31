---
created: 2024-12-31 19:34:05 +0900
updated: 2024-12-31 20:08:11 +0900
---

# Dart의 제네릭

## 정의
- **제네릭**은 클래스, 메서드, 인터페이스 등을 다양한 데이터 타입과 함께 사용할 수 있도록 하는 프로그래밍 개념
- **타입 파라미터**를 사용하여 코드의 재사용성을 높이고, 컴파일 시 타입 안정성을 보장함

## 목적
1. **타입 안전성 강화**
   - 컴파일 시 타입 오류를 미리 잡아내어 런타임 오류를 줄임
2. **코드 재사용성 향상**
   - 다양한 데이터 타입에 대해 동일한 로직을 적용할 수 있음
3. **가독성 및 유지보수성 개선**
   - 코드의 의도를 명확히 하고, 중복 코드를 줄임

## 제네릭 클래스

### 기본 사용법
```dart
class Box<T> {
  T content;

  Box(this.content);

  void setContent(T content) {
    this.content = content;
  }

  T getContent() {
    return content;
  }
}

void main() {
  Box<int> intBox = Box<int>(123);
  print(intBox.getContent()); // 출력: 123

  Box<String> strBox = Box<String>('Hello');
  print(strBox.getContent()); // 출력: Hello
}
```

### 타입 제한

```dart
class ComparableBox<T extends Comparable> {
  T content;

  ComparableBox(this.content);

  bool isGreaterThan(T other) {
    return content.compareTo(other) > 0;
  }
}

void main() {
  ComparableBox<int> intBox = ComparableBox<int>(10);
  print(intBox.isGreaterThan(5)); // 출력: true

  ComparableBox<String> strBox = ComparableBox<String>('apple');
  print(strBox.isGreaterThan('banana')); // 출력: false
}
```

## 제네릭 메서드

```dart
class Util {
  T getFirst<T>(List<T> items) {
    return items.isNotEmpty ? items.first : throw Exception('리스트가 비어 있습니다.');
  }
}

void main() {
  Util util = Util();

  int firstInt = util.getFirst<int>([1, 2, 3]);
  print(firstInt); // 출력: 1

  String firstStr = util.getFirst<String>(['a', 'b', 'c']);
  print(firstStr); // 출력: a
}
```

## 제네릭 함수

```dart
T getMiddle<T>(List<T> items) {
  if (items.isEmpty) throw Exception('리스트가 비어 있습니다.');
  return items[items.length ~/ 2];
}

void main() {
  double middleDouble = getMiddle<double>([1.1, 2.2, 3.3, 4.4, 5.5]);
  print(middleDouble); // 출력: 3.3

  String middleStr = getMiddle<String>(['apple', 'banana', 'cherry']);
  print(middleStr); // 출력: banana
}
```

## 다중 제네릭

```dart
List<T> filter<T>(List<T> items, bool Function(T) test) {
  List<T> result = [];
  for (var item in items) {
    if (test(item)) {
      result.add(item);
    }
  }
  return result;
}

void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  List<int> evenNumbers = filter<int>(numbers, (n) => n.isEven);
  print(evenNumbers); // 출력: [2, 4]

  List<String> fruits = ['apple', 'banana', 'cherry'];
  List<String> longFruits = filter<String>(fruits, (f) => f.length > 5);
  print(longFruits); // 출력: [banana, cherry]
}
```

## 제네릭과 믹스인

```dart
mixin Printable {
  void printInfo();
}

class Document<T> with Printable {
  T content;

  Document(this.content);

  @override
  void printInfo() {
    print('Document 내용: $content');
  }
}

void main() {
  Document<String> doc = Document<String>('이것은 문서입니다.');
  doc.printInfo(); // 출력: Document 내용: 이것은 문서입니다.
}
```

## 출처

- [LEARN_DART](https://dart-tutorial.com/object-oriented-programming/generics-in-dart/)

