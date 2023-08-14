import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import Posts from '../containers/Posts';

// eslint-disable-next-line react/display-name
export default () => (
  <SidebarProvider>
    <Posts />
  </SidebarProvider>
);

export const Head = () => <SEO subTitle="모든 글" />;
