import { PageProps } from 'gatsby';

import SearchResult from '../containers/SearchResult';

import SidebarProvider from '../components/SidebarProvider';
import SEO from '../components/SEO';

export type SearchPageProps = PageProps<object, object, Record<string, string>>;

export default ({ location }: SearchPageProps) => (
  <SidebarProvider>
    <SearchResult locationState = {location.state}/>
  </SidebarProvider>
);

export const Head = () => (
  <SEO subTitle="검색" />
);
