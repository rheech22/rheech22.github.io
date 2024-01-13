---
created: 2024-01-13 17:29:25 +0900
updated: 2024-01-14 04:28:05 +0900
---

# 데이터베이스 만들고 psql 사용해보기

`mydb`라는 이름의 데이터베이스를 만들어 본다.
```bash
createdb mydb
```

DB 접속
```bash
psql mydb
```

다음과 같이 나오면 성공
```
psql (16.1 (Homebrew))
도움말을 보려면 "help"를 입력하십시오.

mydb=#
```
마지막 줄에 `#` 기호가 있다면 superuser라는 의미다. 아닌 경우에는 `#` 대신 `>` 기호를 출력한다.

튜토리얼을 따라 아래 명령어를 입력했다.
```
mydb=# SELECT version();
                                                           version
------------------------------------------------------------------------------------------------------------------------------
 PostgreSQL 16.1 (Homebrew) on x86_64-apple-darwin22.6.0, compiled by Apple clang version 15.0.0 (clang-1500.1.0.2.5), 64-bit
(1개 행)

mydb=# SELECT current_date;
 current_date
--------------
 2024-01-13
(1개 행)

mydb=# SELECT 1 + 4;
 ?column?
----------
        5
(1개 행)
```

psql에는 SQL이 아닌 `\`으로 시작하는 여러 명령어가 있다. `\h`를 입력하면 사용 가능한 도움말 목록을 출력한다. 그 중에서 `CREATE TABLE`을 확인하면 이런 내용이 나온다.
```
명령: CREATE TABLE
설명: 새 테이블 만들기
문법:
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] 테이블_이름 ( [
  { 칼럼이름 자료형 [ STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN | DEFAULT } ] [ COMPRESSION 압축_방법 ] [ COLLATE collation ] [ 칼럼_제약조건 [ ... ] ]
    | 테이블_제약조건
    | LIKE 원본테이블 [ LIKE구문옵션 ... ] }
    [, ... ]
] )
[ INHERITS ( 상위_테이블 [, ... ] ) ]
[ PARTITION BY { RANGE | LIST | HASH } ( { 칼럼이름 | ( 표현식 ) } [ COLLATE collation ] [ 연산자클래스 ] [, ... ] ) ]
```

psql에서 나오고 싶다면 `\q`을 입력하자. `\?`를 입력하면 여러 명령어를 확인할 수 있다.

# 테이블 생성

아래처럼 weather 테이블을 생성한다.
```
mydb=# CREATE TABLE weather (
    city            varchar(80),
    temp_lo         int,           -- low temperature
    temp_hi         int,           -- high temperature
    prcp            real,          -- precipitation
    date            date
);
CREATE TABLE
```
psql에서 공백, 탭, 줄바꿈은 자유롭게 사용할 수 있다. 세미콜론(;)이 오기 전까지 명령은 종료되지 않는 것으로 인식한다. 마치 lua처럼 `--`기호는 주석을 표현할 때 사용한다. 또한 쌍따옴표로 묶인 경우를 제외하고는 SQL 구문에서 대소문자를 구분하지 않는다.

varchar(80)은 최대 80자 길이의 문자열을 저장할 수 있는 데이터 타입을 의미한다. int는 일반적인 정수, real은 4바이트 부동 소수점 타입이다. date는 단어 그대로 날짜 타입이다.

cites라는 테이블을 하나 더 만들었다.
```
mydb=# CREATE TABLE cities (
    name            varchar(80),
    location        point
);
CREATE TABLE
```
point는 지리적 위치를 표현하는 데이터 타입으로 PostgreSQL에서 제공하는 특별한 타입 중 하나이다.

`box`, `line`, `point`, `lseg`, `polygon`, `inet`, `macaddr`

# 테이블 채우기

INSERT 문으로 테이블에 데이터를 채워보자. 튜토리얼을 보고 아래와 같은 순서로 데이터를 삽입했다.

인풋은 `,`로 구분하고 타입에 맞는 데이터로 넣어줘야 한다.
```
mydb=# INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');
INSERT 0 1
```

point 타입은 아래와 같이 형태를 요구한다.
```
INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)');
INSERT 0 1
```

좀 더 명시적으로 작성하는 방법도 있다.
```
INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
    VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');
INSERT 01
```

모든 컬럼을 채워야 하는 것도 아니고 순서도 바꿀 수 있다.
```
INSERT INTO weather (date, city, temp_hi, temp_lo)
    VALUES ('1994-11-29', 'Hayward', 54, 37);
```

COPY 명령을 통해 파일로부터 로드하는 방법도 있다.
```
COPY weather FROM '/home/user/weather.txt';
```

# 테이블 쿼리하기

SELECT 문으로 테이블에서 데이터를 쿼리할 수 있다. SELECT 문은 테이블에서 가져올 컬럼을 명시하는 부분, 가져올 테이블을 명시하는 부분, 그리고 가져올 데이터를 한정하는 부분(옵셔널)으로 구분하여 사용한다. 이전 챕터에서 weather 테이블에 데이터를 채워놨으니 모두 조회해보자.
```
mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
 Hayward       |      37 |      54 |      | 1994-11-29
(3개 행)
```

`*`은 모든 컬럼을 의미하므로 아래와 같다.
```
SELECT city, temp_lo, temp_hi, prcp, date FROM weather;

```

표현식을 사용하여 결과를 바꿀 수도 있다.
```
mydb=# SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;
     city      | temp_avg |    date
---------------+----------+------------
 San Francisco |       48 | 1994-11-27
 San Francisco |       50 | 1994-11-29
 Hayward       |       45 | 1994-11-29
(3개 행)
```
`AS`절은 출력되는 컬럼의 이름을 재정의한다.

한편, `WHERE`절로 원하는 데이터만 출력할 수 있다. `WHERE`절은 boolean 표현식을 포함하는데 표현식을 통해 참으로 평가되는 행만 반환시킨다. `AND`, `OR`, `NOT`과 같은 boolean 연산자도 함께 사용할 수 있다.
```
mydb=# SELECT * FROM weather
    WHERE city = 'San Francisco' AND prcp > 0.0;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
(1개 행)
```

`ORDER BY`로 정렬이 가능하다.
```
mydb=# SELECT * FROM weather
    ORDER BY city;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      43 |      57 |    0 | 1994-11-29
(3개 행)
```

San Francisco도 완전히 정렬시키고 싶다면,
```
mydb=# SELECT * FROM weather
    ORDER BY city, temp_lo;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 Hayward       |      37 |      54 |      | 1994-11-29
 San Francisco |      43 |      57 |    0 | 1994-11-29
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
(3개 행)
```

`DISTINCT`로 중복되는 행을 제거할 수 있다.
```
mydb=# SELECT DISTINCT city FROM weather;
     city
---------------
 Hayward
 San Francisco
(2개 행)
```

# 테이블 조인하기

`JOIN`을 사용하면 한 번에 여러 테이블에 접근할 수 있다. 만약 날씨 기록을 관련된 도시와 함께 요청하고 싶다면
```
mydb=# SELECT * FROM weather JOIN cities ON city = name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(2개 행)
```

여기서는 `*`을 사용하여 모든 컬럼을 가져오도록 했지만, 실제 프로덕션 레벨에서는 항상 명시적으로 컬럼을 작성하는 것이 좋다. 만약 테이블에 컬럼이 추가되면 결과도 달라질 것이기 때문이다.

현재 weather의 컬럼과 cities의 컬럼의 이름이 겹치는 경우는 없지만, 만약에 그런 경우가 있다면 아래와 같이 작성해야 한다.
```
mydb=# SELECT weather.city, weather.temp_lo, weather.temp_hi,
       weather.prcp, weather.date, cities.location
    FROM weather JOIN cities ON weather.city = cities.name;
```

`JOIN/ON` 구문을 사용하지 않는 아래와 같은 방식도 있다.
```
mydb=# SELECT *
    FROM weather, cities
    WHERE city = name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
(2개 행)
```

이 방법은 `JOIN/ON` 구문보다 앞선 방식으로 좀 더 단순해 보이지만, 쿼리를 읽는 사람 입장에서는 `JOIN/ON` 구문을 사용하는 것이 더 쉽게 이해하기 좋다. `JOIN`을 위한 조건이 `WHERE` 절에 섞여있지 않아도 된다.

앞선 예제에서는 Hayward가 결과에서 제외됐다. `ON`에 작성된 조건을 만족하지 못했기 때문인데 만약 조건에 만족하지 못한 경우에도 결과에 포함시키고 싶다면 어떻게 해야할까? 이런 경우 `OUTER JOIN`을 사용할 수 있다. (지금까지 했던 것은 사실 `INNER JOIN`이다.)
```
SELECT *
    FROM weather LEFT OUTER JOIN cities ON weather.city = cities.name;
     city      | temp_lo | temp_hi | prcp |    date    |     name      | location
---------------+---------+---------+------+------------+---------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | San Francisco | (-194,53)
 San Francisco |      43 |      57 |    0 | 1994-11-29 | San Francisco | (-194,53)
 Hayward       |      37 |      54 |      | 1994-11-29 |
```

위 예제에서 오른쪽 테이블(cities)의 내용은 왼쪽 테이블(weather)와 일치하는 경우에만 포함되고, 왼쪽 테이블은 모두 포함된다. `LEFT OUTER JOIN`의 동작 방식이 이렇다. 반대 방향인 `RIGHT OUTER JOIN`과 양쪽 모두를 포함하는 `FULL OUTER JOIN`도 있다.

`SELF JOIN`은 테이블 자체적으로 조인을 수행한다. 만약 다른 모든 행과 데이터를 비교하여 원하는 결과를 출력해야 한다면 사용해볼 수 있다. 예시는 아래와 같다.
```
SELECT w1.city, w1.temp_lo AS low, w1.temp_hi AS high,
       w2.city, w2.temp_lo AS low, w2.temp_hi AS high
    FROM weather w1 JOIN weather w2
        ON w1.temp_lo < w2.temp_lo AND w1.temp_hi > w2.temp_hi;
     city      | low | high |     city      | low | high
---------------+-----+------+---------------+-----+------
 San Francisco |  43 |   57 | San Francisco |  46 |   50
 Hayward       |  37 |   54 | San Francisco |  46 |   50
(2개 행)
```

테이블을 각각 `w1`, `w2`로 별칭한 것처럼 라벨을 통해 타이핑을 줄일 수 있다.

# Aggregate Function

Aggregate Function은 여러 행에 대한 단일 결과를 계산한다. 예를 들어, 행 집합에 대한 `count`, `sum`, `avg`, `max`, `min`을 계산할 수 있다.

```
mydb=# SELECT max(temp_lo) FROM weather;
 max
-----
  46
(1개 행)
```

단, `WHERE` 절에서는 사용할 수 없다. `WHERE`를 통해 어떤 행을 대상으로 집계를 해야할지 결정하기 때문에 `WHERE` 절의 표현식은 집계 함수가 실행되기 전에 평가되어야 하기 때문이다. 이럴 땐 서브 쿼리를 사용할 수 있다.
```
mydb=# SELECT city FROM weather
    WHERE temp_lo = (SELECT max(temp_lo) FROM weather);
     city
---------------
 San Francisco
(1개 행)
```

Aggregate Function을 `GROUP BY`와 함께 효과적으로 사용할 수 있다.
```
mydb=# SELECT city, count(*), max(temp_lo)
    FROM weather
    GROUP BY city;
     city      | count | max
---------------+-------+-----
 Hayward       |     1 |  37
 San Francisco |     2 |  46
(2개 행)
```

또한 그룹으로 묶인 행들을 `HAVING`을 사용하여 걸러낼 수도 있다.
```
mydb=# SELECT city, count(*), max(temp_lo)
    FROM weather
    GROUP BY city
    HAVING max(temp_lo) < 40;
  city   | count | max
---------+-------+-----
 Hayward |     1 |  37
(1개 행)
```

`LIKE` 연산자를 사용한 예시도 있다.
```
SELECT city, count(*), max(temp_lo)
    FROM weather
    WHERE city LIKE 'S%'
    GROUP BY city;
```

`HAVING`과 `WHERE`의 차이는 순서에 있다. `WHERE`는 `GROUP` 및 Aggregate Function이 수행되기 전에 행을 선택하는 반면, `HAVING`은 `GROUP` 및 Aggregate Function이 수행된 후에 행을 선택한다. 따라서 `HAVING`에는 항상 Aggregate Function이 포함된다. 사실 `HAVING`에서 집계 함수를 사용하지 않을 수도 있지만 그런 경우에는 `WHERE` 단계에 해당 조건을 적용하는 것이 더 효율적이다.

한편 각 Aggregate Function에 사용할 수 있는 옵션인 `FILTER`도 있다. 각 함수의 인풋만을 한정한다는 점을 제외하고 `WHERE`와 유사하다.
```
SELECT city, count(*) FILTER (WHERE temp_lo < 45), max(temp_lo)
    FROM weather
    GROUP BY city;
     city      | count | max
---------------+-------+-----
 Hayward       |     1 |  37
 San Francisco |     1 |  46
(2개 행)
```

# Updates

`UPDATE`를 사용하여 데이터를 수정할 수 있다.
```
mydb=# UPDATE weather
    SET temp_hi = temp_hi - 2,  temp_lo = temp_lo - 2
    WHERE date > '1994-11-28';
UPDATE 2

mydb=# SELECT * FROM weather;

     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
 Hayward       |      35 |      52 |      | 1994-11-29
(3 rows)
```

# Deletions

삭제는 다음과 같다.
```
mydb=# DELETE FROM weather WHERE city = 'Hayward';
DELETE 1
mydb=# SELECT * FROM weather;
     city      | temp_lo | temp_hi | prcp |    date
---------------+---------+---------+------+------------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27
 San Francisco |      41 |      55 |    0 | 1994-11-29
(2개 행)
```

아래와 같이 사용하면 모든 행을 삭제하기 때문에 주의하자.
```bash
DELETE FROM tablename;
```

# Views

`VIEW`를 사용하면 매번 필요할 때마다 같은 쿼리를 입력하지 않아도 된다.
```
mydb=# CREATE VIEW myview AS
    SELECT name, temp_lo, temp_hi, prcp, date, location
        FROM weather, cities
        WHERE city = name;
CREATE VIEW
mydb=# SELECT * FROM myview;
     name      | temp_lo | temp_hi | prcp |    date    | location
---------------+---------+---------+------+------------+-----------
 San Francisco |      46 |      50 | 0.25 | 1994-11-27 | (-194,53)
 San Francisco |      41 |      55 |    0 | 1994-11-29 | (-194,53)
(2개 행)
```

# Foreign Keys

앞서 활용한 테이블 weather와 cities에서 cities에 포함된 도시만 weather에 넣을 수 있도록 해야 한다고 가정해보자. 이런 경우 먼저 cities를 살펴 일치하는 기록이 있는지 확인한 후 새로운 날씨 데이터를 weather에 넣을 수 있도록 하거나 혹은 넣지 못하도록 해야할 것이다. 이처럼 테이블간의 관계를 일관되게 유지시킴으로써 데이터베이스의 신뢰도를 높이는 것을 데이터의 참조 무결성(referential integrity)라 한다. 다만 위와 같은 과정을 매번 거쳐야 하는 것은 매우 귀찮은 일이기 때문에 primary key와 foreign key를 사용하여 테이블의 관계를 선언할 수 있다. 우선 테이블을 다시 생성하기 전에 삭제부터 한다.
```
mydb=# DROP VIEW myview;
DROP VIEW
mydb=# DROP TABLE cities;
DROP TABLE
mydb=# DROP TABLE weather;
DROP TABLE
```

테이블을 다시 만들자.
```
CREATE TABLE cities (
        name     varchar(80) primary key,
        location point
);

CREATE TABLE weather (
        city      varchar(80) references cities(name),
        temp_lo   int,
        temp_hi   int,
        prcp      real,
        date      date
);
```

weather에 `INSERT`를 시도하면 cities에 없는 도시를 저장하려 했기에 실패한다.
```
mydb=# INSERT INTO weather VALUES ('Berkeley', 45, 53, 0.0, '1994-11-28');
ERROR:  insert or update on table "weather" violates foreign key constraint "weather_city_fkey"
상세정보:  Key (city)=(Berkeley) is not present in table "cities".
```

먼저 도시를 cities에 저장하고 다시 시도하면 `INSERT` 성공
```
mydb=# INSERT INTO cities VALUES ('Berkeley', '(-194.0, 53.0)');
INSERT 0 1
mydb=# INSERT INTO weather VALUES ('Berkeley', 45, 53, 0.0, '1994-11-28');
INSERT 0 1
mydb=# SELECT * FROM weather;
   city   | temp_lo | temp_hi | prcp |    date
----------+---------+---------+------+------------
 Berkeley |      45 |      53 |    0 | 1994-11-28
(1개 행)
```

