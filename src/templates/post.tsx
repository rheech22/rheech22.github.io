import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { device } from "../styles/breakpoints";
import { md } from "../styles/md";

import { useContext } from "../store/context";

import useSpyHeadings from "../hooks/useSpyHeadings";
import useTags from "../hooks/useTags";

import { getDateString } from "../utils";

import Comments from "../components/Comments";
import Tag from "../components/Tag";
import TOC from "../components/TOC";

import config from "../../blog-config";

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(truncate: true, format: PLAIN)
      timeToRead
      headings {
        id
        value
        depth
      }
      frontmatter {
        path
        date
        title
        tags
      }
    }
  }
`;

const { title: defaultTitle, siteUrl, twitterUsername } = config;

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark } = data;

  const { displayMode } = useContext();
  const { searchByTag } = useTags();
  const spyHeadingsRef = useSpyHeadings();

  const post = {
    title: markdownRemark?.frontmatter?.title ?? '',
    date: markdownRemark?.frontmatter?.date ?? '',
    path: markdownRemark?.frontmatter?.path ?? '',
    tags: markdownRemark?.frontmatter?.tags ?? [],
    contents: markdownRemark?.html ?? '',
    excerpt: markdownRemark?.excerpt ?? '',
    headings: markdownRemark?.headings ?? [],
    timeToRead: markdownRemark?.timeToRead ?? '',
  };

  const { title, date, path, tags, contents, excerpt, headings, timeToRead } = post;

  return (
    <>
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

      {post && (
        <PostSection>
          <article>
            <header>
              <h1>{title}</h1>
              <ul>
                <time dateTime='updated at'>{getDateString({ date, getYear: true })}</time>
                <span> — {timeToRead} min read</span>
              </ul>
              {
                tags.length
                  ? <ul>{
                    tags.map((tag, index) =>(
                      <Tag
                        key={index}
                        tag={tag}
                        onClick={searchByTag}
                      />)
                    )}</ul>
                  : null
              }
            </header>
            <main>
              <section ref={spyHeadingsRef} dangerouslySetInnerHTML={{ __html: contents }}/>
            </main>
          </article>
          <TOC headings={headings}/>
        </PostSection>
      )}
      {displayMode
        ? (
          <CommentSection>
            <Comments repo="rheech22/comments" theme={displayMode === 'day' ? 'boxy-light' : 'github-dark-orange' }/>
          </CommentSection>
        )
        : null
      }
    </>
  );
};

const PostSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 72px auto 0 auto;
  padding: 48px 0px;
  width: 100%;
  height: auto;

  & > article {
    @media ${device.widerThanTablet} {
      width: 726px;
    }

    @media ${device.widerThanLaptopS} {
      margin-left: auto;
      transform: translateX(12%);
    }
    
    ${flex('flex-start', 'normal', 'column')};
    padding: 48px 16px;
    width: auto;

    & > header {
      margin-bottom: 56px;

      & > h1 {
        @media ${device.widerThanMobile} {
          font-size: 42px;
        }
        
        font-size: 36px;
        margin-bottom: 4px;
        font-weight: 600;
      }

      & > ul {
        &:first-of-type {
          color: ${({ theme }) => theme.mute };
          font-size: 14px;
  
        }
  
        &:nth-of-type(2) {
          ${flex('center', 'flex-start', 'row')}
          flex-wrap: wrap;
          margin-top: 14px;
        }
      }
    }

    & > main {
      & > section {
        &:nth-child(1){
          ${md}
        }
      }
    }
  }
`;

const CommentSection = styled.section`
  padding: 48px 8px;
`;
