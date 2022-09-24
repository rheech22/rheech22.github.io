import { Helmet } from "react-helmet";

import config from "../../blog-config";

const { title: defaultTitle, siteUrl, twitterUsername } = config;

interface Props {
  title: string;
  excerpt: string;
  path: string;
  date: string;
}

export default ({ title, excerpt, path, date }: Props) => {
  return (
    <Helmet>
      <title>{title} | {defaultTitle}</title>
      <meta name="description" content={excerpt} />
      <meta name="image" content='' />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={excerpt} />
      <meta name="og:type" content='website' />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:url" content={`${siteUrl}${title}`} />
      <meta name="twitter:image" content='' />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>☕️</text></svg>" />
      <link rel="apple-touch-icon" href="../images/default180.png" />
      <script type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "url": "${siteUrl}${path}",
              "headline": "${title}",
              "datePublisehd": "${date}",
              "dateModified": "${date}",
              "image": "[]"
            }
          `}
      </script>
    </Helmet>
  );
};
