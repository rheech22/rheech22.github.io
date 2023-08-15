import SEO from '../components/SEO';
import SidebarProvider from '../components/SidebarProvider';
import Posts from '../containers/Posts';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

// eslint-disable-next-line react/display-name
export default () => (
  <SidebarProvider>
    <Posts />
  </SidebarProvider>
);

export const Head = () => {
  const { title, description, image, siteUrl, twitterUsername } = useSiteMetadata();

  return (
    <SEO
      title={title}
      subtitle="모든 글"
      description={description}
      image={image}
      url={siteUrl}
      twitterUsername={twitterUsername}
    />
  );
};
