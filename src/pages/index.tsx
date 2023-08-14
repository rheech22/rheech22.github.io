import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import Posts from '../containers/Posts';

export default () => (
  <SidebarProvider>
    <Posts />
  </SidebarProvider>
);

export const Head = () => (
  <SEO subTitle="모든 글"/>
);
