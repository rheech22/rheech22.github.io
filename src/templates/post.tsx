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
          { headings.length ? <TOC headings={headings}/> : null}
        </PostSection>
      )}
      <CommentSection>
        <Comments repo="rheech22/comments" theme={displayMode === 'day' ? 'boxy-light' : 'github-dark-orange' }/>
      </CommentSection>
    </>
  );
};


const PostSection = styled.section`
  ${flex('flex-start', 'center', 'row')};
  margin: 72px auto 0 auto;
  padding: 48px 16px;
  height: auto;

  & > article {
    @media ${device.tablet} {
      width: 726px;
    }

    ${flex('flex-start', 'normal', 'column')};
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
