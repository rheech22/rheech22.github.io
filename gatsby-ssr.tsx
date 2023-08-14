import * as React from 'react';

import config from './blog-config';
import wrapper from './wrapPageElement';

export const wrapPageElement = wrapper;

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: config.language
  });
  setHeadComponents([
    <link
      key="font"
      as="style"
      rel="stylesheet preload prefetch"
      href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
    />
  ]);
};
