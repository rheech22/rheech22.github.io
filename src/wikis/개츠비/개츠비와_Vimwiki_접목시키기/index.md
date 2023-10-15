---
created: 2023-08-22 00:00:26 +0900
updated: 2023-10-15 23:05:32 +0900
---


# 요약

- 개츠비 블로그를 위키 형식으로 구성해 보았다.
- Vim, Vimwiki로 문서를 작성한다.
- Git push로 GitHub Pages에 배포된다.
- 계층 구조로 문서를 관리하여 상위 문서를 모두 확인할 수 있다.
- 문서의 변경 날짜와 히스토리를 쉽게 알 수 있다.
- 커밋 시점에 Vimwiki 인덱스를 자동으로 갱신한다.
- [이종립님의 위키](https://johngrib.github.io/wiki/my-wiki/)를 많이 참고했다.

# WHY Wiki

핑계에 불과하지만 블로그에서는 완성된 글에 대한 강박 비스무리한 것이 있었다. 티스토리에 글을 남기던 때보다 그 부담이 심했는데 그러다보니 미루기만 했다. 다양한 이유로 여러 차례 종립님의 블로그를 참고한 적이 있다. 위키 형식인 것이 인상 깊었는데 위키라면 조금은 부담없이 글을 남길 수 있을 것 같았다. 위키는 한 번 작성하고 끝나는 것이 아니라 꾸준히 내용을 보충하고 수정해야 하는 대상처럼 느껴지기 때문이 아닐까 싶다. 한편으로는 현재 내 실력으로는 고퀄리티의 글을 자주 작성하기는 어렵다고 생각했다. 결국 기록을 위한 나만의 위키를 만들어 보았다.

# WHY Vimwiki

Vimwiki를 사용하면 쉽게 문서와 그 링크를 만들 수 있다. 예를 들어 **바나나**라는 단어를 입력하고 엔터 키를 누르면 \\[[바나나]]로 바뀌면서 링크가 생성된다. 그리고 엔터 키를 한번 더 누르면 해당 문서로 이동하여 문서를 바로 작성할 수 있다. 종립님의 블로그에서 볼 수 있는 내용은 이 글에 가급적 포함시키지 않을 생각이다. 혹시라도 누군가 이 글을 참고할 계획이면 종립님의 글을 우선적으로 참고하길 바란다. 여기서는 개츠비 블로그를 위키 형식으로 바꾸고 Vimwiki를 접목시키는 내용을 주로 다루려고 한다.

# Vim 세팅

종립님의 글을 참고하여 Vim과 Vimwiki를 위한 설정을 한다.

- Vimwiki 설치 및 설정(개츠비 파일 시스템의 경로를 위키 경로로 설정해야 함)
- Vim-startify 설치 및 설정
- frontmatter 자동완성 및 업데이트 항목 갱신 자동화 설정

frontmatter에 포함하던 시리즈, 태그, 제목 및 경로를 사용하지 않기로 했다. 이젠 생성일자와 수정일자 항목만 필요하다.

```
function! Template()

	if line("$") > 1
		return
	endif

	let l:template = []
	call add(l:template, '---')
	call add(l:template, 'created: ' . strftime('%Y-%m-%d %H:%M:%S +0900'))
	call add(l:template, 'updated: ' . strftime('%Y-%m-%d %H:%M:%S +0900'))
	call add(l:template, '---')
	call add(l:template, '')
	call add(l:template, '# ')
	call setline(1, l:template)
	execute 'normal! G'
	execute 'normal! $'

	echom 'new wiki page has created'
endfunction
```

# 개츠비에 필요한 노드 추가하기

개츠비에서는 각 문서가 부모에 대한 정보를 가지고 있지 않아도 계층 구조를 구현할 수 있다. 노드를 생성할 때 파일 경로를 기반으로 `slug` 필드를 추가하여 이를 활용한다.

```ts
// ./gatsby-node.ts

exports.onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};
```

폴더명을 제목으로 사용하기 위해 `title` 필드도 추가한다. 언더스코어는 공백으로 대체했다.


```ts
// ./gatsby-node.ts 
// ..이어서

    createNodeField({
      node,
      name: 'title',
      value: slug.split('/').slice(-1).pop()?.replaceAll(`_`, ` `)
    });

```

이 방식을 위해서는 몇가지 규칙이 필요하다.

- 폴더 이름을 지을 때 공백은 언더스코어 `_`로 대체한다.
- `이름/index.md`과 같은 형태로 폴더 및 파일을 생성한다.

언더스코어를 문서 제목에 자유롭게 포함시킬 수 없다는 문제가 있지만 당장 큰 불편함은 없을 것 같다. 폴더는 아래와 같이 구성한다.

```bash
/wikis
├── 책
│   ├── index.md
│   └── 위대한_개츠비
│       └── index.md

```

위대한 개츠비 문서의 주소는 `https://주소/책/위대한_개츠비`의 형식이 된다.

# 수정된 날짜 오름차순으로 정렬하기

`updated` 필드를 기준으로 정렬된 문서를 요청하면 최근 수정된 문서를 상단에서 보여줄 수 있다.

```ts

const GET_WIKIS = graphql`
  query getWikis {
    allMarkdownRemark(sort: { frontmatter: { updated: DESC } }) {
      edges {
        node {
          id
          html
          fields {
            slug
            title
          }
          frontmatter {
            created
            updated
          }
        }
      }
    }
  }
`;

```

# 상위 문서 보여주기

파일 경로를 주소로 사용하고 있기 때문에 부모 경로를 보여주는 것은 어렵지 않다. 

아래에서 `child_1`의 slug는 `parent/child_1` 이다.

```bash
/wikis
├── parent
│   ├── index.md
│   └── child_1
│       └── index.md

```

`slug`를 받아서 네비게이션 리스트로 변환하는 유틸을 사용한다.

```ts

const getAncestors = (slug: string) => {
  const segments = slug.split('/');

  return segments
    .slice(1, segments.length - 1)
    .reduce<{ path: string; value: string }[]>((acc, cur, index) => {
      const prevPath = acc[index - 1]?.path || '';

      return [
        ...acc,
        {
          path: `${prevPath}/${cur}`,
          value: cur.replaceAll('/', '').replaceAll('_', ' ')
        }
      ];
    }, []);
};

```

각 문서의 템플릿에서는 상위 문서 네비게이션을 제공할 수 있다.

```ts

const navs = getAncestors(slug);

// ... 생략

<nav>
	{navs.length ? (
              navs.map(({ path, value }, index, { length }) => (
                <div key={value}>
                  <Link key={value} to={path}>
                    {value}
                  </Link>
                  {Boolean(index + 1 < length) && <ArrowThin />}
                </div>
              ))
            ) : (<span>ROOT</span>)
	}
</nav>

// ... 생략

```

# Vimwiki 링크 a 태그로 바꿔주기

Vimwiki의 링크 \\[[문서]]를 타고 들어갈 수 있도록 Vimwiki 링크를 찾아 모두 `<a>` 태그로 바꿔야 한다. 하지만 문서에서 Vimwiki 링크를 그대로 보여주고 싶은 경우도 있기 때문에 예외 규칙도 필요했다. 처음에는 코드 블럭안에 포함된 Vimwiki는 링크로 변환하지 않도록 구현했지만, 멀티 라인의 코드 블럭 내부에 있는 Vimwiki 링크에는 이 규칙을 완벽하게 적용하는데 어려움이 있었다. 방법을 찾다가 종립님께 댓글로 조언을 구했는데 이스케이프 문자를 사용하는 방법을 알려주셨다. 정말 친절하게도 문서까지 작성해 주셨는데 해당 문서는 [여기](https://johngrib.github.io/wiki/blog/this/convert-html-link/)에서 볼 수 있다.

마크다운 내에서 Vimwiki 형식 앞에 백슬래시를 \\\\\\[[링크]]와 같이 두 개 붙이거나, 마크다운 안에 코드블럭 내에서 \\\\[[링크]]와 같이 백슬래시 하나를 붙이면 링크를 그대로 보여준다. 코드는 아래와 같다.


```ts

export const convertVimWikiLinks = ({ contents, slug }: { contents: string; slug: string }) => {
  // 1. \\[[링크]] 패턴의 문자를 \\[\\[링크\\]\\] 패턴의 문자로 변경한다.
  contents = contents.replace(/\\\[\[(.+?)\]\]/g, '\\[\\[$1\\]\\]');

  // 2. \[[링크]] 패턴의 문자를 a 태그로 변환한다.
  contents = contents.replace(/\[\[\/?(.+?)\s*\]\]/g, (_, captured) => {
    // 2-1. 내 위키의 문서 링크는 '/index.md'를 강제하기 때문에 이를 링크 제목에서 제거한다.
    const title = captured.replace('/index.md', '');

    // 2-2. slug를 포함한 경로를 href에 할당하고 링크 제목에서 언더스코어를 공백 문자로 대체한다.
    return `<a href=${`${slug}/${title}`}>${title.replaceAll('_', ' ')}</a>`;
  });

  // 3. 1번에서 임시로 변경했던 \\[\\[링크\\]\\] 패턴을 가진 문자를 \[[링크]]의 패턴으로 바꿔준다.
  contents = contents.replace(/\\\[\\\[(.+?)\\\]\\\]/g, '\[[$1]]');

  return contents;
};

```

# 마크다운 내 링크에서 라우터 사용하기

위 방법대로 변환된 링크를 클릭하면 실제 `<a>` 태그의 기본 동작대로 새로고침이 발생한다. 상대 경로의 경우 내부 리액트 라우터를 사용하도록 해야 한다. [gatsby-plugin-catch-links](https://www.gatsbyjs.com/plugins/gatsby-plugin-catch-link) 개츠비 플러그인을 사용하면 내부 경로를 가진 링크를 gatsby-link로 대체할 수 있다.


# Vimwiki 인덱스 자동생성

내 위키의 경우 Vimwiki의 인덱스에서 모든 문서를 생성하진 않고 하위 문서가 필요한 문서에서 바로 링크를 만들고 있다. 그렇기 때문에 깊은 곳에 있는 문서를 나중에 수정하려면 링크를 타고 들어가야 한다. 이런 불편함 때문에 루트에 해당하는 Vimwiki 인덱스에 모든 링크를 잘 정리할 필요가 있다. 하지만 문서를 하나 추가할 때마다 인덱스에 그 링크를 기록하는 건 꽤나 귀찮고 깜빡하기도 쉽다. 인덱스 문서를 자동으로 생성하기로 했다. 요구사항은 아래와 같다.

- 모든 경로를 Vimwiki 링크로 작성한다.
- 모든 링크를 이름 오름차순으로 정렬한다.
- 문서 계층의 깊이에 따라 들여쓰기를 한다.
- 커밋을 할 때마다 자동으로 문서를 갱신한다.

프로젝트 루트 경로에 js 파일 하나를 추가했다. 일부 함수는 종립님의 스크립트를 참고했다.

```js

// generate_wiki_index.js

const fs = require('fs');

const target = 'src/wikis/index.md';
const list = [];

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function isMarkdown(fileName) {
  return /\.md$/.test(fileName);
}

function getFiles(path, list) {
  fs.readdirSync(path).forEach((fileName) => {
    const subPath = `${path}/${fileName}`;

    if (isDirectory(subPath)) {
      return getFiles(subPath, list);
    }

    if (isMarkdown(fileName) && subPath !== target) {
      return list.push(subPath);
    }
  });
}

function getVimWikiLinks(paths) {
  return paths
    .map((path) => path.replace('src/wikis/', '').replace('/index.md', ''))
    .sort()
    .map((path) => {
      const segments = path.split('/');
      const depth = segments.length - 1;
      const link = `* \[[${segments.join('/')}${isMarkdown(path) ? '' : '/index.md'}]]`;

      return link.padStart(link.length + depth, '\t');
    });
}

const deleteFile = (target) => {
  fs.unlink(target, function (err) {
    if (err) throw err;
  });
};

const createFile = (filename) => {
  fs.open(filename, 'w', function (err) {
    if (err) throw err;
  });
};

const appendFile = (target, value) => {
  fs.appendFileSync(target, value + '\r\n', function (err) {
    if (err) throw err;
  });
};

function appendLinks(target, links) {
  appendFile(target, '== VimWiki Index ==' + '\r\n');

  links.forEach((link) => {
    appendFile(target, link);
  });
}

getFiles('src/wikis', list);

deleteFile(target);

createFile(target);

appendLinks(target, getVimWikiLinks(list));

```

pre-commit을 활성화하고 커밋을 할 때마다 위 코드를 실행시키도록 한다.

```shell
# $project_path/.git/hooks/pre-commit

#!/bin/bash

node ./generate_wiki_index.js

```

커밋을 하면 아래와 같이 인덱스 문서를 생성한다.

![index](https://github.com/rheech22/rheech22.github.io/assets/57756798/67e1c6c9-ee39-4c80-8d37-34265d10c887)

# 참고

- [Vimwiki + Jekyll + Github.io로 나만의 위키를 만들자](https://johngrib.github.io/wiki/my-wiki/#%EA%B5%AC%ED%98%84-%EA%B2%B0%EA%B3%BC)
- [vimwiki 링크를 html 링크로 자동 변환하는 기능](https://johngrib.github.io/wiki/blog/this/convert-html-link/)


