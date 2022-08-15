export const isDarkTheme = () => {
  let prefersDarkTheme = null;
  if (typeof window !== "undefined") {
    prefersDarkTheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches}`;
  }
  const themeString = localStorage.getItem('isDark') ?? prefersDarkTheme ?? 'false';
  return JSON.parse(themeString);
};
