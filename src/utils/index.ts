export const getTheme = (displayMode: 'day' | 'night' | null) => {
  return displayMode === 'day' ? 'night' : 'day';
};

export const getDateString = ({
  date,
  addPrefix,
  getYear
}: {
  date: string;
  addPrefix?: boolean;
  getYear?: boolean;
}) => {
  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium'
  }).format(new Date(date));

  return `${addPrefix ? 'Updated on' : ''} ${getYear ? dateString : dateString.slice(0, -5)}`;
};

export const getDateSegments = (date: string) => {
  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium'
  }).format(new Date(date));

  const [d, m, y] = dateString.split(' ');

  return { date: d, month: m, year: y };
};

export const takePost = (data: Queries.templateQuery) => {
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

export default takePost;
