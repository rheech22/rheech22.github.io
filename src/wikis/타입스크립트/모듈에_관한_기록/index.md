---
created: 2024-11-14 14:35:13 +0900
updated: 2024-11-14 14:52:13 +0900
---

## 모듈 시스템 사용하기

`package.json`에 `type` 속성을 지정하여 자바스크립트의 특정 모듈 시스템을 사용할 수 있다.

```json
// ES Module
"type": "module"
// CommonJS
"type": "commonjs" // 또는 생략
```

혹은 파일 확장자로 강제할 수 있다. 기본적으로는 CommonJS 스타일을 따른다.

```json
// ES Module
index.mjs
// CommonJS
index.cjs
```

## 브라우저 스크립트에서 다른 모듈 불러오기

html의 스크립트에서 다른 모듈을 `import`로 가져오려면 `<script />` 태그에 `type=”module”` 속성을 넣어줘야 한다.

```html
<script type="module" src="./index.js"></script>
```

그렇지 않으면 런타임 에러가 발생한다.

```bash
Uncaught SyntaxError: Cannot use import statement outside a module
```

## 타입스크립트에서의 모듈

타입스크립트를 사용한다면 타입스크립트 컴파일러가 모듈을 다루는 방식에 대한 이해가 필요하다. 브라우저는 타입스크립트 문법을 해석할 수 없다. 그래서 자바스크립트로 컴파일하는 과정이 필요하다. 이 때 타입스크립트의 컴파일 옵션(`tsconfig.json`의 `compilerOptions`)을 통해 애플리케이션의 개발 및 구동 환경에 적합한 옵션을 설정할 수 있다. 제대로 설정하지 못한 경우엔 컴파일이 실패할 수도 있고 최악의 경우 런타임 에러가 발생할 수 있다. 타입스크립트의 컴파일 옵션 중 모듈 시스템에 관한 것으로 `module`과 `moduleResolution`이 있다.

### compilerOptions.module

**`module`은 컴파일된 자바스크립트 코드에서 어떤 모듈 시스템을 사용하는지 결정한다.** 그 기본값은 `target`에 따라 달라지는데 `target`이 `ES5`라면 `commonjs`, 그렇지 않다면 `ES6/ES2015`라고 한다.(참고로 `target`의 기본값은 `ES5`) 주목할만한 옵션으로는 `node16`, `nodenext`, `perserve`, `es2015`, `es2020`, `es2022`, `esnext` 정도가 있고 다음과 같이 크게 3개의 그룹으로 묶어서 보아도 괜찮을 것 같다.

**`node16/nodenext`** 

`node16`와 `nodenext` 는 현재(2024/11/14)로서는 동일하게 동작한다. 나중에 노드의 모듈 시스템이 크게 변경되면 `nodenext`도 바뀔 것으로 보인다. 두 옵션은 CommonJS와 ESModule의 형식을 모두 지원한다. 여기서 모두 지원한다는 건 파일 확장자 또는 `type` 속성을 보고 모듈 시스템을 추론하여 알아서 컴파일한다는 의미다.

**`preserve`**

`preserve`는 5.4버전부터 추가된 것으로 다소 생소한데, 파일의 `import`, `export` 구문은 그대로 보존되고, `import x = require("...")` 및 `export = ...` 문은 CommonJS `require` 및 `module.exports`로 바뀐다고 한다. 이 옵션은 변환을 암시하지 않기 때문에 주로 번들러에 의해 변환되지 않은 타입스크립 파일을 처리할 때 적합하고 `--moduleResolution bundler` 및 `—-noEmit` 옵션과 함께 주로 사용된다.

**`es2015/es2020/es2022/esnext`** 

나머지 `es-` 옵션은 `moduleResolution`의 `bundler` 옵션과 함께 사용한다. `es2020`부터는 `import.meta`를 지원하고 `es2022`부터는 `top-level await`을 지원한다. 만약 브라우저가 아닌 Node.js를 위해 ESModule 형식을 갖추고 싶다면,  `node16`나 `nodenext`를 사용하는 것이 바람직하다.

이 밖에도 여러 옵션이 있지만 흔히 사용되지는 않는 것으로 보인다. 그 중에서 흔하게 접할 수 있는 `commonjs` 도 최근에는 사용이 권장되지 않고 `node16/nodenext`을 권하고 있다. CommonJS를 위해서라면 `node16/nodenext`로도 충분하기 때문이다.

### compilerOptions.moduleResolution

**한편 `moduleResolution` 옵션은 모듈 탐색 방식을 결정한다.** 이 옵션으로 타입스크립트 컴파일러가 가져오기 구문을 만났을 때 모듈을 찾는 방식을 지정할 수 있는데 다음과 같은 옵션이 있다. 

**`node16/nodenext`** 

Node.js 12버전 이상부터 서로 다른 알고리즘을 사용하여 해석되는 `import`와 `require`를 모두 지원한다. 타입스크립트 5.2버전부터는 `module: “node16/nodenext"`와의 조합이 강제되는데 관련된 내용은 타입스크립트 공식 레포의 [PR](https://github.com/microsoft/TypeScript/pull/54567)에서 볼 수 있다. 타입스크립트 컴파일러가 모듈을 해석하는 방법과 실제 빌드된 코드 그리고 런타임 환경이 서로 어긋난 모듈 해석 전략을 취함으로써 발생할 수 있는 문제를 방지하기 위한 선택으로 보인다.

가령, 컴파일 옵션은 `module: “esnext"`, `moduleResolution: “node16/nodenext"`, `package.json`의 `type`이 `module`이 아닌 상황을 가정해보자. 이 경우에 `type=”module”`이 아니기 때문에 런타임 환경에서는 CommonJS 형식을 기대할 것이고 타입스크립트 컴파일러도 `moduleResolution: “node16/nodenext"`에 의해 CommonJS 스타일로 모듈을 해석한다. 하지만 실제 컴파일 결과는 `module: “esnext"`에 따라 ESModule을 빌드된다면 런타임 에러가 발생할 가능성이 있다.

**`bundler`**

`node16`와 `nodenext`와 마찬가지로 `package.json`의 `imports` 및 `exports` 속성을 지원한다. 단, 모듈 해석에 있어서 번들러가 파일 확장자를 자동으로 처리해주기 때문에 상대 경로의 `import` 구문에서 파일 확장자를 요구하지 않는다. 

**`node10`**

이전에는 `node`였던 것이 변경됐다. CommonJS만 지원하는 Node.js 10버전 이하를 지원하는 옵션이다.

**`classic`**

타입스크립트 초기 버전에서 사용되던 모듈 해석 방식인데 `module`이 `commonjs`, `node16`, `nodenext`가 아닌 경우 기본값으로 사용된다고 한다. 사용이 권장되는 옵션은 아니다. 타입스크립트 6.0버전 이후부터는 `depreacated`될 예정이다.
