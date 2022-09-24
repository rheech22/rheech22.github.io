import React from 'react';
import Layout from './src/components/Layout';

import { ContextProvider } from './src/store/context';

export default ({ element, props }) => {
  return (
    <ContextProvider>
      <Layout {...props}>{element}</Layout>
    </ContextProvider>
  );
};
