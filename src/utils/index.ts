export const getTheme = (displayMode?: 'day' | 'night') => {
  return displayMode === 'day' ? 'night' : 'day';
};

export const parseDateString = (date: string) => date.replace(/-/g, '/');

export const getDateSegments = (date: string) => {
  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium'
  }).format(new Date(parseDateString(date)));

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
      frontmatter: { created, updated },
      fields: { slug, title }
    }
  } = data;

  return {
    created,
    updated,
    slug,
    title,
    contents: contents ?? '',
    excerpt: excerpt ?? '',
    headings: headings ?? [],
    timeToRead: timeToRead ?? ''
  };
};

export const convertVimWikiLinks = ({ contents, slug }: { contents: string; slug: string }) => {
  contents = contents.replace(/\\\[\[(.+?)\]\]/g, '\\[\\[$1\\]\\]');

  contents = contents.replace(/\[\[\/?(.+?)\s*\]\]/g, (_, captured) => {
    const title = captured.replace('/index.md', '');

    return `<a href=${`${slug}/${title}`}>${title.replaceAll('_', ' ')}</a>`;
  });

  contents = contents.replace(/\\\[\\\[(.+?)\\\]\\\]/g, '[[$1]]');

  return contents;
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

export const has = (target?: string | null) => (value: string) => {
  if (!target) return;

  return target.toLowerCase().includes(value.toLowerCase());
};
