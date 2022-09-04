type ReduceReturnType = {
  [key: string]: number;
}

export const getLocalDisplayMode = () => {
  let prefersDarkTheme = null;
  let themeString = 'false';

  if (typeof window !== "undefined") {
    prefersDarkTheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches}`;
    themeString = localStorage.getItem('isDark') ?? prefersDarkTheme ?? 'false';
  }

  return JSON.parse(themeString);
};

export const enrichTags = (tags: (string | null | undefined)[]) => {
  return Object
    .entries(tags
      .map(tag => tag?.toLowerCase())
      .reduce<ReduceReturnType>((acc, cur) => {
      if (!cur) return acc;

      if (Reflect.has(acc, cur)) {
        acc[cur] += 1;
        return acc;
      }

      acc[cur] = 1;

      return acc;
    }, {}));
};

export const sortTags = (tags: [string, number][]) => tags.sort((a, b) => {
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
