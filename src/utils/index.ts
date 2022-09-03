export const getLocalDisplayMode = () => {
  let prefersDarkTheme = null;
  let themeString = 'false';

  if (typeof window !== "undefined") {
    prefersDarkTheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches}`;
    themeString = localStorage.getItem('isDark') ?? prefersDarkTheme ?? 'false';
  }

  return JSON.parse(themeString);
};
