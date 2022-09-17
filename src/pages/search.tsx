import SearchResult from '../containers/SearchResult';

import SidebarProvider from '../components/SidebarProvider';
import SEO from '../components/SEO';

export default () => (
  <SidebarProvider>
    <SearchResult />
  </SidebarProvider>
);

export const Head = () => (
  <SEO subTitle="검색" />
);
