interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  url?: string;
  pathname?: string;
  twitterUsername?: string;
  updated?: string;
  created?: string;
  children?: JSX.Element;
}

const SEO = ({
  title,
  subtitle,
  description,
  image,
  url,
  twitterUsername,
  pathname,
  created,
  updated,
  children
}: Props) => {
  const combinedTitle = subtitle ? `${subtitle} | ${title}` : title;

  return (
    <>
      <title>{combinedTitle}</title>
      <link
        as="style"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500&display=swap"
      />
      <link
        as="style"
        rel="stylesheet"
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={combinedTitle} />
      <meta name="twitter:url" content={`${url}${pathname || ''}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:creator" content={`@${twitterUsername}`} />
      <meta name="naver-site-verification" content="45d911481aa02bda5a391b5f2474bc61356de3f8" />
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      <script type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "url": "${url}${pathname || ''}",
              "headline": "${title}",
              "datePublished": "${created ?? 'someday'}",
              "dateModified": "${updated ?? new Date().toLocaleDateString()}",
              "image": "[]"
            }
          `}
      </script>
      {children}
    </>
  );
};

export default SEO;
