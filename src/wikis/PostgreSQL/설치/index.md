---
created: 2024-01-13 14:37:06 +0900
updated: 2024-01-13 15:12:48 +0900
---

## 내 환경

- M1 Mac
- macOS(Ventura 13.2.1)
- Homebrew 4.2.3

## 설치

현재 최신 버전인 16 버전을 설치한다.
```bash
brew install postgresql@16
```

postgres 서버를 구동시키자.
```bash
brew services start postgresql@16
```

DB 접속(postgres라는 db는 기본적으로 세팅되어 있는듯)
```bash
psql postgres
```

만약 psql 커맨드를 찾지 못한다는 에러가 발생하면 수동으로 심볼릭 링크를 연결해줘야 한다.
```bash
brew link postgresql@16
```

터미널 설정 파일(eg. `.zshrc`)에 터미널 출력에 표시된 경로를 환경 변수 `PATH`로 세팅한다.
```bash
# .zshrc
export PATH="/usr/local/opt/postgresql@16/bin:$PATH"
```

DB 접속 후 출력되는 프롬프트에서 날짜를 확인해보자.
```
postgres=# SELECT current_date;
```

만약 나가고 싶다면
```
postgres=# \q
```


