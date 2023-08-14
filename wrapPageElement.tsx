import { defineCustomElements as highlightCodeBlock } from '@deckdeckgo/highlight-code/dist/loader';
import React from 'react';

import Layout from './src/components/Layout';
import { ContextProvider } from './src/store/context';

highlightCodeBlock();

// eslint-disable-next-line react/display-name
export default ({ element, props }) => {
  return (
    <ContextProvider>
      <Layout {...props}>{element}</Layout>
    </ContextProvider>
  );
};
