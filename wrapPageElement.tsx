import React from "react";
import Layout from "./src/components/Layout";

import { GlobalContextProvider } from "./src/contexts/GlobalContext";

export default ({ element, props }) => {
  return (
    <GlobalContextProvider>
      <Layout {...props}>{element}</Layout>
    </GlobalContextProvider>
  );
};