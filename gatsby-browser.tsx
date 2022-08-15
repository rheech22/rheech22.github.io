import React from 'react';
import Layout from './src/components/Layout';
import { GlobalContextProvider } from './src/contexts/GlobalContext';

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <GlobalContextProvider>
      <Layout {...props}>{element}</Layout>
    </GlobalContextProvider>
  );
};