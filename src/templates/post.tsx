import { graphql, PageProps } from "gatsby";

import { useGlobalContext } from "../contexts/GlobalContext";
import useTags from "../hooks/useTags";

import styled from "styled-components";
import { flex } from "../styles/mixins";

import Comments from "../components/Comments";
import Tag from "../components/Tag";
import { device } from "../styles/breakpoints";
import TOC from "../components/TOC";

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  const { isDark } = useGlobalContext();
  const { searchByTag } = useTags();

  const theme = isDark ? 'github-dark-orange' : 'boxy-light';

  return (
    <>
      {post && (
        <PostSection>
          <article>
            <header>
              <h1>{post.frontmatter?.title}</h1>
              <time dateTime={''}>{post.frontmatter?.date}</time>
            </header>
            <main>
              <section dangerouslySetInnerHTML={{ __html: post.html ?? '' }}/>
              <TOC headings={post.headings}/>
            </main>
          </article>
          {
            post?.frontmatter && post.frontmatter.tags?.length
              ? <ul>{post.frontmatter.tags.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag}
                  onClick={searchByTag}
                />
              ))}</ul>
              : null
          }
        </PostSection>
      )}
      <CommentSection>
        <Comments repo="rheech22/comments" theme={theme}/>
      </CommentSection>
    </>
  );
};

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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

const PostSection = styled.section`
  ${flex('normal', 'flex-start', 'column')};
  max-width: 726px;
  margin: 72px auto 0 auto;
  padding: 48px 8px;
  height: 100%;
  
  & > article {
    ${flex('flex-start', 'normal', 'column')};

    & > header {
      margin-bottom: 56px;
      width: 100%;

      
      & > h1 {
        font-size: 42px;
        font-weight: 600;
        margin-bottom: 4px;
      }
  
      & > time {
        font-size: 14px;
        color: ${({ theme }) => theme.mute };
      }
    }

    & > main {

      & > section:nth-child(1){
        font-size: 16px;
        width: 100%;
    
        @media ${device.tablet} {
          font-size: 18px;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;

          .header-anchor {
            fill: ${({ theme }) => theme.default };
          }
        }
    
        h1 {
          font-size: 36px;
          margin-block-start: 1em;
          margin-block-end: 1em;
        }
    
        h2 {
          font-size: 28.8px;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
        }

        h3 {
          font-size: 21.6px;
          margin-block-start: 1em;
          margin-block-end: 1em;
        }

        h4 {
          font-size: 19.8px;
          margin-block-start: 1.22em;
          margin-block-end: 1.22em;
        }

        p {
          display: block;
          line-height: 1.8em;
          margin-block-start: 1em;
          margin-block-end: 1em;
          word-break: break-word;

        }

        ol, ul {
          padding-left: 40px;
        }

        ul {
          list-style-type: disc;
        }

        ol {
          list-style-type: decimal;
        }

        li {
          display: list-item;
          text-align: -webkit-match-parent;
        }

        code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: ${({ theme }) => theme.codeBg };
          border-radius: 6px;
          font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
        }
      }
    }
  }

  & > ul {
    ${flex('center', 'flex-start', 'row')}
    flex-wrap: wrap;
    margin: 32px 0;
    padding: 4px 0;
  }

  deckgo-highlight-code {
    font-size: 14px;
    padding: 0.5em 0;
  }

  & > div {
    height: fit-content;
  }
`;

const CommentSection = styled.section`
  padding: 48px 8px;
`;
