---
created: 2024-12-31 04:54:08 +0900
updated: 2024-12-31 05:46:11 +0900
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





