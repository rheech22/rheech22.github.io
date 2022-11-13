import Posts from '../containers/Posts';

import SidebarProvider from '../components/SidebarProvider';
import SEO from '../components/SEO';

export default () => (
  <SidebarProvider>
    <Posts />
  </SidebarProvider>
);

export const Head = () => (
  <SEO subTitle="모든 글"/>
);
