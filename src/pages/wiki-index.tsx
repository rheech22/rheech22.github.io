import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import WikiIndex from '../containers/WikiIndex';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

// eslint-disable-next-line react/display-name
export default () => (
  <SidebarProvider>
    <WikiIndex />
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
