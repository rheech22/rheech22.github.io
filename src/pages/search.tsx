import { PageProps } from 'gatsby';

import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import SearchResult from '../containers/SearchResult';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export type SearchPageProps = PageProps<object, object, Record<string, string>>;

// eslint-disable-next-line react/display-name
export default ({ location }: SearchPageProps) => (
  <SidebarProvider>
    <SearchResult locationState={location.state} />
  </SidebarProvider>
);

export const Head = () => {
  const { title, description, image, siteUrl, twitterUsername } = useSiteMetadata();

  return (
    <SEO
      title={title}
      subtitle="Search"
      description={description}
      image={image}
      url={siteUrl}
      twitterUsername={twitterUsername}
    />
  );
};
