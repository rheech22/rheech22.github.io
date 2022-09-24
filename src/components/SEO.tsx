import { useSiteMetadata } from '../hooks/useSiteMetadata';

interface Props {
  subTitle?: string;
  description?: string;
  pathname?: string;
  children?: JSX.Element;
}

const SEO = ({ subTitle, description, pathname, children }: Props) => {
  const { title, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();

  const seo = {
    title: subTitle ? `${subTitle} | ${title}` : title,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content='website' />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'></text></svg>" />
      <link rel="apple-touch-icon" href="../images/favicon.png" />
      {children}
    </>
  );
};

export default SEO;


