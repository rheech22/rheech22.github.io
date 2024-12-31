---
created: 2024-12-31 19:24:08 +0900
updated: 2024-12-31 20:08:38 +0900
---

# Dart Factory Constructor

## 정의
- 객체 인스턴스를 생성할 때 유연성을 제공하는 특별한 생성자
- 항상 새로운 인스턴스를 반환하지 않으며, 기존 인스턴스를 반환하거나 특정 로직을 통해 생성 가능

## 예시

### 1. 인스턴스 재사용 및 캐싱

```dart
class Logger {
  static final Map<String, Logger> _cache = {};

  final String name;

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name]!;
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);
}
```

### 2. 싱글톤 패턴


```dart
class LazySingleton {
  static LazySingleton? _instance;

  factory LazySingleton() {
    _instance ??= LazySingleton._internal();
    return _instance!;
  }

  LazySingleton._internal();
}

void main() {
  var s1 = LazySingleton();
  var s2 = LazySingleton();
  print(identical(s1, s2)); // true
}
```

다만 초기화 로직이 필요없고 단순 불변 객체가 필요한 경우라면 Constant Constructor가 더 유용할 것 같음
```dart
class ImmutableSingleton {
  static const ImmutableSingleton _instance = ImmutableSingleton._internal();

  const ImmutableSingleton._internal();

  factory ImmutableSingleton() {
    return _instance;
  }

  final String name = "ImmutableSingleton";
}

void main() {
  var s1 = ImmutableSingleton();
  var s2 = ImmutableSingleton();
  print(identical(s1, s2)); // true
  print(s1.name); // ImmutableSingleton
}
```



### 3. 복잡한 로직 처리

```dart
class Database {
  final String connectionString;

  Database._internal(this.connectionString);

  static Future<Database> create(String config) async {
    // 복잡한 초기화 로직, 예: 비동기 연결 설정
    await Future.delayed(Duration(seconds: 2));
    return Database._internal("Connected with $config");
  }

  factory Database(String config) => throw UnimplementedError("Use Database.create instead");
}
```

### 4. 서브클래스 인스턴스 반환

```dart
// enum ShapeType
enum ShapeType { circle, rectangle }

// abstract class Shape
abstract class Shape {
  // factory constructor
  factory Shape(ShapeType type) {
    switch (type) {
      case ShapeType.circle:
        return Circle();
      case ShapeType.rectangle:
        return Rectangle();
      default:
        throw 'Invalid shape type';
    }
  }
  // method
  void draw();
}

class Circle implements Shape {
  // implement draw method
  @override
  void draw() {
    print('Drawing circle');
  }
}

class Rectangle implements Shape {
  // implement draw method
  @override
  void draw() {
    print('Drawing rectangle');
  }
}

void main() {
  // create Shape object
  Shape shape = Shape(ShapeType.circle);
  Shape shape2 = Shape(ShapeType.rectangle);
  shape.draw();
  shape2.draw();
}
```

## 출처

- [LEARN DART](https://dart-tutorial.com/object-oriented-programming/factory-constructor-in-dart/)
