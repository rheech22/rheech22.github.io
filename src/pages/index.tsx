import PostPreviews from '../containers/PostPreviews';

import SidebarProvider from '../components/SidebarProvider';
import SEO from '../components/SEO';

export default () => (
  <SidebarProvider>
    <PostPreviews />
  </SidebarProvider>
);


export const Head = () => (
  <SEO subTitle="모든 글"/>
);
