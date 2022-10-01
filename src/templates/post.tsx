import { graphql, PageProps, Link } from 'gatsby';

import * as Styled from './styles';

import Arrow from '../assets/icons/Arrow';

import { useContext } from '../store/context';
import useSpyHeadings from '../hooks/useSpyHeadings';
import useTags from '../hooks/useTags';

import { takePost, getDateString } from '../utils';

import Comments from '../components/Comments';
import Tag from '../components/Tag';
import TOC from '../components/TOC';
import SEO from './post-seo';

import config from '../../blog-config';

export default ({ data, pageContext }: PageProps<Queries.templateQuery>) => {
  const { displayMode } = useContext();
  const { searchByTag } = useTags();

  const spyRef = useSpyHeadings();

  const { title, date, path, tags, contents, excerpt, headings, timeToRead } = takePost(data);

  const hasHeadings = Boolean(headings.length);

  const { prev, next } = pageContext as { prev: { path: string; title: string }; next: { path: string; title: string } } ;

  return (
    <>
      <SEO title={title} excerpt={excerpt} date={date} path={path} />
      <Styled.Section>
        <Styled.Article hasHeadings={hasHeadings}>
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
            <section ref={spyRef} dangerouslySetInnerHTML={{ __html: contents }}/>
          </Styled.Main>
          <Styled.Nav>
            <Link to={prev.path}>
              { Boolean(prev.path) &&
                (
                  <>
                    <Arrow/>
                    <div>
                      <h3>PREVIOUS</h3>
                      <span>{prev.title}</span>
                    </div>
                  </>
                )
              }
            </Link>
            <Link to={next.path}>
              { Boolean(next.path) &&
                (
                  <>
                    <div>
                      <h3>NEXT</h3>
                      <span>{next.title}</span>
                    </div>
                    <Arrow/>
                  </>
                )
              }
            </Link>
          </Styled.Nav>
        </Styled.Article>
        {hasHeadings && <TOC headings={headings}/>}
      </Styled.Section>
      {displayMode && (
        <Styled.Comments>
          <Comments repo={config.commentRepo} theme={displayMode === 'day' ? 'boxy-light' : 'github-dark-orange' }/>
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
