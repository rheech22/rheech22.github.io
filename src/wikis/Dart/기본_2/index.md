---
created: 2024-12-31 04:54:08 +0900
updated: 2024-12-31 20:09:39 +0900
---

# About Function

## Providing Default Value On Positional Parameter

```dart
void add(int num1, int num2, [int num3=0]){
  int sum;
  sum = num1 + num2 + num3;

  print("The sum is $sum");
}

void main(){
  add(10, 20);
  add(10, 20, 30);
}

```

## Named Parameter


```dart
void printInfo({String? name, String? gender}) {
  print("Hello $name your gender is $gender.");
}

void main() {
  // you can pass values in any order in named parameters.
  printInfo(gender: "Male", name: "John");
  printInfo(name: "Sita", gender: "Female");
}
```

```dart
void printInfo({required String name, required String gender}) {
  print("Hello $name your gender is $gender.");
}

void main() {
  // you can pass values in any order in named parameters.
  printInfo(gender: "Male", name: "John");
  printInfo(gender: "Female", name: "Suju");
}
```
## Anonymous Function

```dart
void main() {
  var cube = (int number) {
    return number * number * number;
  };

  print("The cube of 2 is ${cube(2)}");
  print("The cube of 3 is ${cube(3)}");
}
```

## Arrow Function

```dart
double div(int n1, int n2) => n1 / n2;
```

## Random Value


```dart
import 'dart:math'; // 이하 코드는 import 했다고 가정
```

```dart
void main() {
  int min = 10;
  int max = 20; 

  int randomnum = min + Random().nextInt((max + 1) - min);
    
  print("Generated Random number between $min and $max is: $randomnum");  
}
```

```dart
Random().nextBool(); // return true or false
Random().nextDouble(); // return 0.0 to 1.0

```

```
void main() {
  List<int> randomList = List.generate(10, (_) => Random().nextInt(100)+1); 
  print(randomList);  
}
```

# About Collection

## Fixed Length List

값을 바꿀 수는 있지만 새롭게 아이템을 추가할 수는 없음 
```dart
void main() {
   var fixedList = List<int>.filled(5,0); // length = 5
   var growableList = [210,21,22,33,44,55];
}
```

## Immutable List

```dart
List<String> names = ["Raj", "John", "Rocky"]; // Mutable List
names[1] = "Bill"; // possible
names[2] = "Elon"; // possible
    
const List<String> names = ["Raj", "John", "Rocky"]; // Immutable List
names[1] = "Bill"; // not possible
names[2] = "Elon"; // not possible
```

## List 속성

- first: List의 첫 번째 요소를 반환
- last: List의 마지막 요소를 반환
- isEmpty: List가 비어 있으면 true를 반환하고, List가 비어 있지 않으면 false를 반환
- isNotEmpty: List가 비어 있지 않으면 true를 반환하고, List가 비어 있으면 false를 반환
- length: List의 길이를 반환
- reversed: 역순으로 List를 반환
- single: List에 요소가 하나만 있는지 확인하고 해당 요소를 반환

## List 메서드

- add(): 한 번에 하나의 요소를 추가하고 수정된 List 객체를 반환
- addAll(): 주어진 목록에 여러 개의 값을 삽입
- insert(): 지정된 인덱스 위치에 요소를 삽입
- insertAll(): 지정된 인덱스 위치에 여러 요소 삽입
- replaceRange(): 주어진 범위 내 요소를 대체 - `void replaceRange( int start, int end, Iterable<E> replacements )`
- remove(): 주어진 목록에서 한 번에 하나의 요소를 제거
- removeAt(): 지정된 인덱스 위치에서 요소를 제거하고 반환
- removeLast(): 주어진 목록에서 마지막 요소를 제거
- removeRange(): 지정된 범위 내의 항목을 제거

## Set

### create

```dart
Set<String> fruits = {"Apple", "Orange", "Mango"};
```

### properties

```dart
print("First Value is ${fruits.first}");
print("Last Value is ${fruits.last}");
print("Is fruits empty? ${fruits.isEmpty}");
print("Is fruits not empty? ${fruits.isNotEmpty}");
print("The length of fruits is ${fruits.length}");
```

### methods

```dart
print(fruits.contains("Mango"));
fruits.add("Lemon");
fruits.remove("Apple");
fruits.addAll(['Banana', 'Kiwi']);
print(fruits.elementAt(2));
fruits.clear();
```

```dart
void main() {
  Set<String> fruits1 = {"Apple", "Orange", "Mango"};
  Set<String> fruits2 = {"Apple", "Grapes", "Banana"};

  final differenceSet = fruits1.difference(fruits2);

  print(differenceSet); // {Orange, Mango}
}
```

```dart
void main() {
  Set<String> fruits1 = {"Apple", "Orange", "Mango"};
  Set<String> fruits2 = {"Apple", "Grapes", "Banana"};

  final intersectionSet = fruits1.intersection(fruits2);

  print(intersectionSet); // {Apple}
}
```

## Map

### create
```dart
Map<String, double> expenses = {
  'sun': 3000.0,
  'mon': 3000.0,
  'tue': 3234.0,
};
```

### properties
```dart
print("All keys of Map: ${expenses.keys}");
print("All values of Map: ${expenses.values}");
print("Is Map empty: ${expenses.isEmpty}");
print("Is Map not empty: ${expenses.isNotEmpty}");
print("Length of map is: ${expenses.length}");
```

### methods

```
print("All keys of Map with List: ${expenses.keys.toList()}");
print("All values of Map with List: ${expenses.values.toList()}");
print("Does Map contain key abc: ${expenses.containsKey("abc")}");
print("Does Map contain value 100.0: ${expenses.containsValue(100.0)}");

expenses.remove("sun");
expenses.forEach((key, value) => print('Key is $key and value is $value'))
expenses.removeWhere((key, value) => value < 3200);
```

## Where

```dart
List<int> numbers = [2, 4, 6, 8, 10, 11, 12, 13, 14];
List<int> oddNumbers = numbers.where((number) => number.isOdd).toList();
```
# About Class

## 생성자


### 클래스 이름과 같아야 함

```dart
class Laptop {
  String? brand;
  int? price;

  // Constructor
  Laptop() {
    print("This is a default constructor");
  }
}
```

### Named Constructor

```dart
class Person {
  String? name;
  int? age;

  Person(this.name, this.age);

  Person.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    age = json['age'];
  }

  Person.fromJsonString(String jsonString) {
    Map<String, dynamic> json = jsonDecode(jsonString);
    name = json['name'];
    age = json['age'];
  }
}
```

### Constant Constructor

- 상수 생성자로 변경할 없는 객체를 생성할 수 있음
- 상수 생성자는 상수 객체를 컴파일 과정에서 계산하기 때문에 최적화에 도움이 됨
- 단, 생성자를 호출할 때에도 `const` 키워드를 포함해야 하고 그렇지 않은 경우엔 일반 객체를 생성함(런타임 계산)

```dart
class Point {
  final int x;
  final int y;

  const Point(this.x, this.y);
}

void main() {
  Point p1 = const Point(1, 2);
  Point p2 = const Point(1, 2);
  
  print(identical(p1, p2)); // true
  print(p1.hashCode == p2.hashCode); // true

  Point p3 = Point(2, 2);
  Point p4 = Point(2, 2);
  print(identical(p3, p4)); // true
  print(p3.hashCode == p4.hashCode); // true
}
```

### Encapsulation

> 다트는 private, public, protected 키워드를 제공하지 않는다.

프라이빗 속성과 공개 메서드
```dart
class Employee {
  // Private property
  var _name;

  // Getter method to access private property _name
  String getName() {
    return _name;
  }


  // Setter method to update private property _name
  void setName(String name) {
    this._name = name;
  }
}
```

읽기 전용 속성
```dart
class Student {
  final _schoolname = "ABC School";

  String getSchoolName() {
    return _schoolname;
  }
}

void main() {
  var student = Student();
  print(student.getSchoolName());
  // This is not possible
  //student._schoolname = "XYZ School";
}
```

게터와 세터
```dart
class Vehicle {
  String _model;
  int _year;

  // Getter method
  String get model => _model;

  // Setter method
  set model(String model) => _model = model;

  // Getter method
  int get year => _year;

  // Setter method
  set year(int year) => _year = year;
}
```

### Inheritance

> 다트는 다중 상속을 지원하지 않는다.

기본 예제
```dart
class Person {
  // Properties
  String? name;
  int? age;
}

class Doctor extends Person {
  // Properties
  List<String>? listofdegrees;
  String? hospitalname;

  // Method to display the values of the properties
  void display() {
    print("Name: ${name}");
    print("Age: ${age}");
    print("List of Degrees: ${listofdegrees}");
    print("Hospital Name: ${hospitalname}");
  }
}

class Specialist extends Doctor {
  // Properties
  String? specialization;

  // Method to display the values of the properties
  void display() {
    super.display();
    print("Specialization: ${specialization}");
  }
}

```

생성자 상속
```dart
class Laptop {
  // Constructor
  Laptop(String name, String color) {
    print("Laptop constructor");
    print("Name: $name");
    print("Color: $color");
  }
}

class MacBook extends Laptop {
  // Constructor
  MacBook(String name, String color) : super(name, color) {
    print("MacBook constructor");
  }
}

void main() {
  var macbook = MacBook("MacBook Pro", "Silver");
}
```
##
명명된 생성자 상속
```dart
class Laptop {
  // Default Constructor
  Laptop() {
    print("Laptop constructor");
  }

  // Named Constructor
  Laptop.named() {
    print("Laptop named constructor");
  }
}

class MacBook extends Laptop {
  // Constructor
  MacBook() : super.named() {
    print("MacBook constructor");
  }
}

void main() {
  var macbook = MacBook();
}
```

super로 상위 클래스 접근
```dart
class Laptop {
  // Method
  void display() {
    print("Laptop display");
  }
}

class MacBook extends Laptop {
  // Method
  void display() {
    print("MacBook display");
    super.display();
  }
}

class MacBookPro extends MacBook {
  // Method
  void display() {
    print("MacBookPro display");
    super.display();
  }
}

void main() {
  var macbookpro = MacBookPro();
  macbookpro.display();
}
```

### Interface


다트에는 인터페이스 키워드가 없지만, 클래스나 추상 클래스를 이용하여 인터페이스를 구현할 수 있다.
다트는 다중 상속을 지원하지 않지만 `implements` 키워드로 여러 인터페이스를 하나의 클래스에서 구현할 수 있다.

```dart
// abstract class as interface
abstract class Area {
  void area();
}
// abstract class as interface
abstract class Perimeter {
  void perimeter();
}
// implements multiple interfaces
class Rectangle implements Area, Perimeter {
    // properties
  int length, breadth;

 // constructor
  Rectangle(this.length, this.breadth);

// implementation of area()
  @override
  void area() {
    print('The area of the rectangle is ${length * breadth}');
  }
// implementation of perimeter()
  @override
  void perimeter() {
    print('The perimeter of the rectangle is ${2 * (length + breadth)}');
  }
}

void main() {
  Rectangle rectangle = Rectangle(10, 20);
  rectangle.area();
  rectangle.perimeter();
}

```

### Mixin

Mixin으로 여러 클래스에서 사용 가능한 코드를 정의할 수 있다.
클래스와 달리 인스턴스로 만들 수는 없다.

```dart
mixin ElectricVariant {
  void electricVariant() {
    print('This is an electric variant');
  }
}

mixin PetrolVariant {
  void petrolVariant() {
    print('This is a petrol variant');
  }
}
// with is used to apply the mixin to the class
class Car with ElectricVariant, PetrolVariant {
  // here we have access of electricVariant() and petrolVariant() methods
}

void main() {
  var car = Car();
  car.electricVariant();
  car.petrolVariant();
}
```

특정 클래스를 위한 Mixin

```dart
abstract class Animal {
  // properties
  String name;
  double speed;

  // constructor
  Animal(this.name, this.speed);

  // abstract method
  void run();
}

// mixin CanRun is only used by class that extends Animal
mixin CanRun on Animal {
  // implementation of abstract method
  @override
  void run() => print('$name is Running at speed $speed');
}

class Dog extends Animal with CanRun {
  // constructor
  Dog(String name, double speed) : super(name, speed);
}

void main() {
  var dog = Dog('My Dog', 25);
  dog.run();
}

// Not Possible
// class Bird with Animal { } 
```


## 출처

- [LEARN DART](https://dart-tutorial.com/)
