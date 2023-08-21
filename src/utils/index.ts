export const getTheme = (displayMode: 'day' | 'night' | null) => {
  return displayMode === 'day' ? 'night' : 'day';
};

export const getDateSegments = (date: string) => {
  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium'
  }).format(new Date(date));

  const [d, m, y] = dateString.split(' ');

  return { date: d, month: m, year: y };
};

export const getWikiInfo = (data: Queries.templateQuery) => {
  const {
    markdownRemark: {
      timeToRead,
      headings,
      excerpt,
      html: contents,
      frontmatter: { title, created, updated },
      fields: { slug }
    }
  } = data;

  return {
    title,
    created,
    updated,
    slug,
    contents: contents ?? '',
    excerpt: excerpt ?? '',
    headings: headings ?? [],
    timeToRead: timeToRead ?? ''
  };
};

export const parseLinks = ({ contents, slug }: { contents: string; slug: string }) => {
  return contents.replace(/\[\[(.*)\]\](?=<)/g, (_, value) => {
    const title = value.replace('/index.md', '');

    const path = `${slug}/${title}`;

    return `<a href=${path}>${title.replaceAll('_', ' ')}</a>`;
  });
};

export const getAncestors = (slug: string) => {
  const segments = slug.split('/');

  return segments
    .slice(1, segments.length - 1)
    .reduce<{ path: string; value: string }[]>((acc, cur, index) => {
      const prevPath = acc[index - 1]?.path || '';

      return [
        ...acc,
        {
          path: `${prevPath}/${cur}`,
          value: cur.replaceAll('/', '').replaceAll('_', ' ')
        }
      ];
    }, []);
};
