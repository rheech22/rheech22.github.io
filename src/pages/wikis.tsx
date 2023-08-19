import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import Wikis from '../containers/Wikis';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

// eslint-disable-next-line react/display-name
export default () => (
  <SidebarProvider>
    <Wikis />
  </SidebarProvider>
);

export const Head = () => {
  const { title, description, image, siteUrl, twitterUsername } = useSiteMetadata();

  return (
    <SEO
      title={title}
      subtitle="Wiki Index"
      description={description}
      image={image}
      url={siteUrl}
      twitterUsername={twitterUsername}
    />
  );
};
