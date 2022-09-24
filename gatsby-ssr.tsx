import wrapper from './wrapPageElement';

import config from './blog-config';

export const wrapPageElement = wrapper;

export const onRenderBody = ({ setHtmlAttributes }) => (
  setHtmlAttributes({
    lang: config.language,
  }));
