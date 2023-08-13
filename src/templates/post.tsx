import { graphql, PageProps } from 'gatsby';
import Giscus from '@giscus/react';

import { useEffect } from 'react';

import * as Styled from './styles';

import { useContext, useDispatch } from '../store/context';
import useSpyHeadings from '../hooks/useSpyHeadings';
import useTags from '../hooks/useTags';

import { takePost, getDateString } from '../utils';

import SeriesSuggestion from '../components/SeriesSuggestion';
import ScrollToTop from '../components/ScrollToTop';

import Tag from '../components/Tag';
import TOC from '../components/TOC';
import SEO from './post-seo';

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const dispatch = useDispatch();
  const { displayMode, posts } = useContext();

  const { searchByTag } = useTags();
  const spyRef = useSpyHeadings();

  const { title, created, updated, tags, series, contents, excerpt, headings, timeToRead, slug } = takePost(data);

  const hasHeadings = Boolean(headings.length);

  const relatedPosts = posts.map(({ node: { frontmatter } }) => frontmatter).filter(post => post.series === series);

  useEffect(()=> dispatch({ type: 'clearSearch' }), []);

  const parsedContents = contents.replace(/\[\[(.*)\]\]/g, (_, value)=> {
    const path = value.replace('/index.md', '');

    return `<a href="${slug}/${path}">${path}</a>`;
  });

  const slugs = slug.split('/');

  const parents = slugs.slice(1, slugs.length - 1).reduce<string[]>((acc, cur, index) => {
    const prevPath = acc[index - 1] || '';
    const newPath = `${prevPath}/${cur}`;

    return [...acc, newPath];
  }, []);

  console.log(slugs, parents);

  return (
    <>
      <SEO title={title} excerpt={excerpt} updated={updated} created={created} path={slug} />
      <Styled.Section>
        <Styled.Article hasHeadings={hasHeadings}>
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubTitle>
              <time dateTime="updated at">{getDateString({ date: updated, getYear: true })}</time>
              <span> — {timeToRead} min read</span>
              <div>
                {
                  parents.map((path) => {
                    return <>
                      <a href={path}>{path.replace('/', '')}</a>
                      <span>{'-'}</span>
                    </>;
                  })
                }
              </div>
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
            <SeriesSuggestion title={title} series={series} relatedPosts={relatedPosts.reverse()} />
          </Styled.Header>
          <Styled.Main>
            <section ref={spyRef} dangerouslySetInnerHTML={{ __html: parsedContents }}/>
          </Styled.Main>
        </Styled.Article>
        {hasHeadings && <TOC headings={headings}/>}
        <ScrollToTop />
      </Styled.Section>
      {displayMode && (
        <Styled.Comments>
          <Giscus
            id="R_kgDOIEmslg"
            repo="rheech22/rheech22.github.io"
            repoId="R_kgDOIEmslg"
            category="Comments"
            categoryId="DIC_kwDOIEmsls4CVXnH"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="transparent_dark"
            lang="ko"
            loading="lazy"
          />
        </Styled.Comments>
      )}
    </>
  );
};

export const query = graphql`
  query template($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(truncate: true, format: PLAIN)
      timeToRead
      headings {
        id
        value
        depth
      }
      frontmatter {
        created
        updated
        title
        tags
        series
      }
      fields {
        slug
      }
    }
  }
`;
