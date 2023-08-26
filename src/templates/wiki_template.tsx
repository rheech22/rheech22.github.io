import Giscus from '@giscus/react';
import { Link, PageProps, graphql } from 'gatsby';

import config from '../../blog-config';
import ArrowThin from '../assets/icons/ArrowThin';
import SEO from '../components/SEO';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import useSpyHeadings from '../hooks/useSpyHeadings';
import { useContext } from '../store/context';
import { getAncestors, getWikiInfo, parseDateString, parseLinks } from '../utils';
import * as Styled from './styles';

const { commit, blame } = config;

// eslint-disable-next-line react/display-name
export default ({ data }: PageProps<Queries.templateQuery>) => {
  const { displayMode } = useContext();

  const spyRef = useSpyHeadings();

  const { created, updated, contents, headings, timeToRead, slug, title } = getWikiInfo(data);

  const hasHeading = Boolean(headings.length);

  const navs = getAncestors(slug);

  return (
    <Styled.Container>
      <Styled.Section>
        <Styled.Article>
          <Styled.Nav>
            {navs.length ? (
              navs.map(({ path, value }, index, { length }) => (
                <div key={value}>
                  <Link key={value} to={path}>
                    {value}
                  </Link>
                  {Boolean(index + 1 < length) && <ArrowThin />}
                </div>
              ))
            ) : (
              <span>ROOT</span>
            )}
          </Styled.Nav>
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubTitle>
              <div>
                <span>{timeToRead} min read</span>
                <time dateTime="created at">
                  <a href={`${commit}/src/wikis${slug}/index.md`} target="_blank" rel="noreferrer">
                    CREATED: {new Date(parseDateString(created)).toLocaleDateString('en-GB')}
                  </a>
                </time>
                <time dateTime="updated at">
                  <a href={`${commit}/src/wikis${slug}/index.md`} target="_blank" rel="noreferrer">
                    UPDATED: {new Date(parseDateString(updated)).toLocaleDateString('en-GB')}
                  </a>
                </time>
                <a href={`${blame}/src/wikis${slug}/index.md`} target="_blank" rel="noreferrer">
                  Blame
                </a>
              </div>
            </Styled.SubTitle>
          </Styled.Header>
          <Styled.Main>
            <section
              ref={spyRef}
              dangerouslySetInnerHTML={{ __html: parseLinks({ contents, slug }) }}
            />
          </Styled.Main>
        </Styled.Article>
        <ScrollToTop />
      </Styled.Section>
      {hasHeading && <TOC headings={headings} />}
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
            theme={displayMode === 'day' ? 'light' : 'dark_high_contrast'}
            lang="ko"
            loading="lazy"
          />
        </Styled.Comments>
      )}
    </Styled.Container>
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
      }
      fields {
        slug
        title
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.templateQuery>) => {
  const { title, image, siteUrl, twitterUsername } = useSiteMetadata();

  const { created, updated, excerpt, slug, title: subtitle } = getWikiInfo(data);

  return (
    <SEO
      title={title}
      subtitle={subtitle}
      description={excerpt}
      image={image}
      url={siteUrl}
      pathname={slug}
      twitterUsername={twitterUsername}
      created={created}
      updated={updated}
    />
  );
};
