import { graphql, PageProps } from "gatsby";

import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import { useGlobalContext } from "../contexts/GlobalContext";
import useSpyHeadings from "../hooks/useSpyHeadings";
import useTags from "../hooks/useTags";

import { getDateString } from "../utils";

import Comments from "../components/Comments";
import Tag from "../components/Tag";
import TOC from "../components/TOC";

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { markdownRemark: post } = data;

  const { displayMode } = useGlobalContext();
  const { searchByTag } = useTags();
  const spyHeadingsRef = useSpyHeadings();

  const title = post?.frontmatter?.title ?? '';
  const date = post?.frontmatter?.date ?? '';
  const contents = post?.html ?? '';
  const tags = post?.frontmatter?.tags ?? [];
  const headings = post?.headings ?? [];
  const timeToRead = post?.timeToRead ?? '';

  return (
    <>
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

export const query = graphql`
  query template($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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

const PostSection = styled.section`
  ${flex('flex-start', 'center', 'row')};
  margin: 72px auto 0 auto;
  padding: 48px 16px;
  height: auto;

  @media ${device.laptopM} {
    justify-content: flex-end;
  }
  
  & > article {
    ${flex('flex-start', 'normal', 'column')};
    width: 726px;

    & > header {
      margin-bottom: 56px;
      width: 100%;

      & > h1 {
        margin-bottom: 4px;
        font-size: 42px;
        font-weight: 600;
      }

      & > ul:first-of-type {
        color: ${({ theme }) => theme.mute };
        font-size: 14px;

      }

      & > ul:nth-of-type(2) {
        ${flex('center', 'flex-start', 'row')}
        flex-wrap: wrap;
        margin-top: 14px;
      }
    }

    & > main {
      & > section:nth-child(1){
        width: 100%;
        font-size: 16px;
    
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
          margin-block-start: 1em;
          margin-block-end: 1em;
          font-size: 36px;
        }
    
        h2 {
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          font-size: 28.8px;
        }

        h3 {
          margin-block-start: 1em;
          margin-block-end: 1em;
          font-size: 21.6px;
        }

        h4 {
          margin-block-start: 1.22em;
          margin-block-end: 1.22em;
          font-size: 19.8px;
        }

        p {
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          word-break: break-word;
          line-height: 1.8em;
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
          margin: 0;
          padding: 0.2em 0.4em;
          background-color: ${({ theme }) => theme.codeBg };
          border-radius: 6px;
          font-size: 85%;
          font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
        }
      }
    }
  }

  deckgo-highlight-code {
    padding: 0.5em 0;
    font-size: 14px;
  }

  & > div {
    height: fit-content;
  }
`;

const CommentSection = styled.section`
  padding: 48px 8px;
`;
