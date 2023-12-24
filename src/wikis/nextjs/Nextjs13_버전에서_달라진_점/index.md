---
created: 2023-10-21 18:21:50 +0900
updated: 2023-12-24 21:51:00 +0900
---

## NextAuth

### API route 경로

`pages/api/auth/[...nextauth].js`에서 `app/api/auth/[...nextauth].js`로 변경

### 핸들러 설정

기존

```ts
import NextAuth from "next-auth"

export default NextAuth({
  ...
})
```

변경

```ts
import NextAuth from "next-auth"

const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }
```
