import config from './blog-config';
import wrapper from './wrapPageElement';

export const wrapPageElement = wrapper;

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: config.language
  });
};
