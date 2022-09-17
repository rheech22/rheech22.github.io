import { graphql, PageProps } from "gatsby";

import styled from "styled-components";
import { flex } from "../styles/mixins";
import { device } from "../styles/breakpoints";
import { postStyle } from "../styles/post";

import { useGlobalContext } from "../contexts/GlobalContext";
import useSpyHeadings from "../hooks/useSpyHeadings";
import useTags from "../hooks/useTags";

import { getDateString } from "../utils";

import Comments from "../components/Comments";
import Tag from "../components/Tag";
import TOC from "../components/TOC";
import { Helmet } from "react-helmet";
import { title as defaultTitle, siteUrl, twitterUsername } from "../../config";


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

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  const { displayMode } = useGlobalContext();
  const { searchByTag } = useTags();
  const spyHeadingsRef = useSpyHeadings();

  const title = post?.frontmatter?.title ?? '';
  const date = post?.frontmatter?.date ?? '';
  const path = post?.frontmatter?.path ?? '';
  const tags = post?.frontmatter?.tags ?? [];
  const contents = post?.html ?? '';
  const excerpt = post?.excerpt ?? '';
  const headings = post?.headings ?? [];
  const timeToRead = post?.timeToRead ?? '';

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
              "url": "https://rheechlog.gatsbyjs.io/${path}",
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
      <CommentSection>
        <Comments repo="rheech22/comments" theme={displayMode === 'day' ? 'boxy-light' : 'github-dark-orange' }/>
      </CommentSection>
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
    @media ${device.tablet} {
      width: 726px;
    }

    @media ${device.laptopM} {
      margin-left: auto;
      transform: translateX(12%);
    }
    
    ${flex('flex-start', 'normal', 'column')};
    padding: 48px 16px;
    width: auto;

    & > header {
      margin-bottom: 56px;

      & > h1 {
        @media ${device.mobileL} {
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
          ${postStyle}
        }
      }
    }
  }
`;

const CommentSection = styled.section`
  padding: 48px 8px;
`;
