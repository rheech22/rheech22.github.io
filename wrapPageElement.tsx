import React from 'react';
import Layout from './src/components/Layout';
import { ContextProvider } from './src/store/context';

import {
  defineCustomElements as highlightCodeBlock,
} from '@deckdeckgo/highlight-code/dist/loader';

highlightCodeBlock();

export default ({ element, props }) => {
  return (
    <ContextProvider>
      <Layout {...props}>{element}</Layout>
    </ContextProvider>
  );
};
