import Giscus from '@giscus/react';
import { Link, PageProps, graphql } from 'gatsby';

import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import useSpyHeadings from '../hooks/useSpyHeadings';
import { useContext } from '../store/context';
import { getDateString, takePost } from '../utils';
import SEO from './post-seo';
import * as Styled from './styles';

export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { displayMode } = useContext();

  const spyRef = useSpyHeadings();

  const { title, created, updated, contents, excerpt, headings, timeToRead, slug } = takePost(data);

  const hasHeadings = Boolean(headings.length);

  const parsedContents = contents.replace(/\[\[(.*)\]\](?=<)/g, (_, value)=> {
    const path = value.replace('/index.md', '');

    return `<a href="${slug}/${path}">${path.replaceAll('_', ' ')}</a>`;
  });

  const slugs = slug.split('/');

  const parents = slugs.slice(1, slugs.length - 1).reduce<{path: string, value: string}[]>((acc, cur, index) => {
    const prevPath = acc[index - 1]?.path || '';

    return [...acc, {
      path: `${prevPath}/${cur}`,
      value: cur.replaceAll('/', '').replaceAll('_', ' '),
    }];
  }, []);


  return (
    <>
      <SEO title={title} excerpt={excerpt} updated={updated} created={created} path={slug} />
      <Styled.Section>
        <Styled.Article hasHeadings={hasHeadings}>
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubTitle>
              <nav>
                {
                  parents.length ? parents.map(({ path, value }, index, { length }) => {
                    return <div>
                      <Link key={value} to={path}>{value}</Link>
                      {Boolean(index + 1 < length) && (<span>/</span>) }
                    </div>;
                  }) : <span>top level</span>
                }
              </nav>
              <div>
                <time dateTime="created at">created on {getDateString({ date: created, getYear: true })}</time>
                <time dateTime="updated at">updated on {getDateString({ date: updated, getYear: true })}</time>
                <span>{timeToRead} min read</span>
              </div>
            </Styled.SubTitle>
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
      }
      fields {
        slug
      }
    }
  }
`;
