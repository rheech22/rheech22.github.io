import { graphql, PageProps } from 'gatsby';

import * as Styled from './styles';

import { useContext } from '../store/context';
import useSpyHeadings from '../hooks/useSpyHeadings';
import useTags from '../hooks/useTags';

import { takePost, getDateString } from '../utils';

import Comments from '../components/Comments';
import Tag from '../components/Tag';
import TOC from '../components/TOC';
import SEO from './post-seo';

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { displayMode } = useContext();
  const { searchByTag } = useTags();

  const spyHeadingsRef = useSpyHeadings();

  const { title, date, path, tags, contents, excerpt, headings, timeToRead } = takePost(data);

  return (
    <>
      <SEO title={title} excerpt={excerpt} date={date} path={path} />
      <Styled.Section>
        <Styled.Article>
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubTitle>
              <time dateTime="updated at">{getDateString({ date, getYear: true })}</time>
              <span> — {timeToRead} min read</span>
            </Styled.SubTitle>
            {tags.length
              ? <Styled.Tags>{
                tags.map((tag, index) =>(
                  <Tag
                    key={index}
                    tag={tag}
                    onClick={searchByTag}
                  />)
                )}</Styled.Tags>
              : null}
          </Styled.Header>
          <Styled.Main>
            <section ref={spyHeadingsRef} dangerouslySetInnerHTML={{ __html: contents }}/>
          </Styled.Main>
        </Styled.Article>
        <TOC headings={headings}/>
      </Styled.Section>
      {displayMode && (
        <Styled.Comments>
          <Comments repo="rheech22/comments" theme={displayMode === 'day' ? 'boxy-light' : 'github-dark-orange' }/>
        </Styled.Comments>
      )}
    </>
  );
};

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
