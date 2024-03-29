import type { GatsbyConfig } from 'gatsby';

import configs from './blog-config';

const { title, description, twitterUsername, siteUrl, themeColor, googleAnalyticsTrackingId } =
  configs;

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    description,
    twitterUsername,
    siteUrl
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [googleAnalyticsTrackingId],
        pluginConfig: {
          head: true
        }
      }
    },

    'gatsby-plugin-styled-components',

    'gatsby-plugin-image',

    'gatsby-plugin-sharp',

    'gatsby-transformer-sharp',

    'gatsby-plugin-catch-links',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'wikis',
        path: `${__dirname}/src/wikis`,
        ignore: ['**/src/wikis/index.md']
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: 'carbon',
              theme: 'one-dark',
              lineNumbers: false
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '-200',
              icon: '<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
              className: 'header-anchor',
              isIconAfterHeader: true,
              elements: ['h1', 'h2', 'h3', 'h4']
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 694,
              backgroundColor: 'transparent'
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: ['png', 'jpg', 'jpeg']
            }
          }
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        description,
        start_url: '/',
        background_color: themeColor,
        theme_color: themeColor,
        display: 'standalone',
        icon: 'src/images/icon512.png',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: 'CacheFirst'
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
              handler: 'NetworkFirst',
              options: {
                networkTimeoutSeconds: 1
              }
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: 'StaleWhileRevalidate'
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: 'StaleWhileRevalidate'
            },
            {
              urlPattern: /\/$/,
              handler: 'NetworkFirst',
              options: {
                networkTimeoutSeconds: 1
              }
            }
          ]
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark {
              nodes {
                frontmatter {
                  updated
                }
                fields {
                  slug
                }
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMarkdownRemark: { nodes: allMarkdowns }
        }: {
          allSitePage: Queries.SitePageConnection;
          allMarkdownRemark: Queries.MarkdownRemarkConnection;
        }) => {
          const nodeMap = allMarkdowns.reduce<Record<string, Queries.MarkdownRemark>>(
            (acc, node) => {
              const {
                fields: { slug }
              } = node;

              acc[`${slug}/`] = node;

              return acc;
            },
            {}
          );

          return allPages.map((page) => {
            return { ...page, lastmod: nodeMap[page.path]?.frontmatter?.updated };
          });
        },
        serialize: ({ path: url, lastmod }: { path: string; lastmod?: string }) => {
          return {
            url,
            lastmod
          };
        }
      }
    }
  ],
  graphqlTypegen: true
};

export default config;
