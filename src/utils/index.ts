type ReduceReturnType = {
  [key: string]: number;
};

export const enrichTags = (tags: (string | null | undefined)[]) => {
  return Object.entries(
    tags.reduce<ReduceReturnType>((acc, cur) => {
      if (!cur) return acc;

      if (Reflect.has(acc, cur)) {
        acc[cur] += 1;
        return acc;
      }

      acc[cur] = 1;

      return acc;
    }, {})
  );
};

export const getTheme = (displayMode: 'day' | 'night' | null) => {
  return displayMode === 'day' ? 'night' : 'day';
};

export const sortTags = (tags: [string, number][]) =>
  tags.sort((a, b) => {
    const [aTag, aCount] = a;
    const [bTag, bCount] = b;

    if (bCount > aCount) return 1;
    if (bCount < aCount) return -1;

    const number = /[0-9]/;
    const alphabet = /[a-zA-Z]/;
    const hangul = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const patterns = [number, alphabet, hangul];

    const getLevel = (s: string) => {
      const index = patterns.findIndex((pattern) => pattern.test(s));
      return index;
    };

    const aLevel = getLevel(aTag.charAt(0));
    const bLevel = getLevel(bTag.charAt(0));

    if (aLevel === bLevel) {
      return aTag.charCodeAt(0) - bTag.charCodeAt(0);
    }

    return bLevel - aLevel;
  });

export const getDateString = ({
  date,
  addPrefix,
  getYear,
}: {
  date: string;
  addPrefix?: boolean;
  getYear?: boolean;
}) => {
  const dateString = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
  }).format(new Date(date));

  return `${addPrefix ? 'Updated on' : ''} ${
    getYear ? dateString : dateString.slice(0, -5)
  }`;
};

export const takePost = (data: Queries.templateQuery) => {
  const {
    markdownRemark: {
      timeToRead,
      headings,
      excerpt,
      html: contents,
      frontmatter: { title, created, updated, path, tags, series },
      fields: { slug },
    },
  } = data;

  return {
    title,
    created,
    updated,
    path,
    slug,
    tags: tags ?? [],
    series: series ?? '',
    contents: contents ?? '',
    excerpt: excerpt ?? '',
    headings: headings ?? [],
    timeToRead: timeToRead ?? '',
  };
};

export default takePost;
