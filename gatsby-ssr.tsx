import * as React from 'react';

import wrapper from './wrapPageElement';
import config from './blog-config';

export const wrapPageElement = wrapper;

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: config.language,
  });
  setHeadComponents([
    <link
      rel="preload"
      href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
      as="font"
    />,
  ]);
};

