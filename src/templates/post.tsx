import { graphql, PageProps, Link } from 'gatsby';

import { useEffect } from 'react';

import Arrow from '../assets/icons/Arrow';
import * as Styled from './styles';

import { useContext, useDispatch } from '../store/context';
import useSpyHeadings from '../hooks/useSpyHeadings';
import useTags from '../hooks/useTags';

import { takePost, getDateString } from '../utils';
import config from '../../blog-config';

import RelatedPosts from '../components/RelatedPosts';
import ScrollToTop from '../components/ScrollToTop';
import Comments from '../components/Comments';
import Tag from '../components/Tag';
import TOC from '../components/TOC';
import SEO from './post-seo';


export default ({ data, pageContext }: PageProps<Queries.templateQuery>) => {
  const dispatch = useDispatch();
  const { displayMode, posts } = useContext();

  const { searchByTag } = useTags();
  const spyRef = useSpyHeadings();

  const { title, date, path, tags, series, contents, excerpt, headings, timeToRead } = takePost(data);

  const hasHeadings = Boolean(headings.length);

  const { prev, next } = pageContext as { prev: { path: string; title: string }; next: { path: string; title: string } };

  const relatedPosts = posts.filter(({ node }) => node.frontmatter?.series === series).map(({ node }) => node.frontmatter);

  useEffect(()=> dispatch({ type: 'clearSearch' }), []);

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
              ? (<Styled.Tags>{
                tags.map((tag, index) =>(
                  <Tag
                    key={index}
                    tag={tag}
                    onClick={searchByTag}
                  />)
                )}</Styled.Tags>
              ) : null}
            <RelatedPosts title={title} series={series} relatedPosts={relatedPosts.reverse()} />
          </Styled.Header>
          <Styled.Main>
            <section ref={spyRef} dangerouslySetInnerHTML={{ __html: contents }}/>
          </Styled.Main>
          <Styled.Nav>
            <div>
              {Boolean(prev.path) &&
                (<Link to={prev.path}>
                  <Arrow/>
                  <div>
                    <h3>PREVIOUS</h3>
                    <span>{prev.title}</span>
                  </div>
                </Link>)}
            </div>
            <div>
              {Boolean(next.path) &&
                (<Link to={next.path}>
                  <div>
                    <h3>NEXT</h3>
                    <span>{next.title}</span>
                  </div>
                  <Arrow/>
                </Link>)}
            </div>
          </Styled.Nav>
        </Styled.Article>
        {hasHeadings && <TOC headings={headings}/>}
        <ScrollToTop />
      </Styled.Section>
      {displayMode && (
        <Styled.Comments>
          <Comments
            repo={config.commentRepo}
            theme={
              displayMode === 'day'
                ? config.lightTheme
                : config.darkTheme
            }
          />
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
        series
      }
    }
  }
`;
