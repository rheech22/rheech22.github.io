import { PageProps } from 'gatsby';

import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import SearchResult from '../containers/SearchResult';

export type SearchPageProps = PageProps<object, object, Record<string, string>>;

export default ({ location }: SearchPageProps) => (
  <SidebarProvider>
    <SearchResult locationState = {location.state}/>
  </SidebarProvider>
);

export const Head = () => (
  <SEO subTitle="검색" />
);
