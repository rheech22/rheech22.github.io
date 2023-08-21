import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import RecentWikis from '../containers/RecentWikis';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

// eslint-disable-next-line react/display-name
export default () => (
  <SidebarProvider>
    <RecentWikis />
  </SidebarProvider>
);

export const Head = () => {
  const { title, description, image, siteUrl, twitterUsername } = useSiteMetadata();

  return (
    <SEO
      title={title}
      subtitle="Recent Updates"
      description={description}
      image={image}
      url={siteUrl}
      twitterUsername={twitterUsername}
    />
  );
};
