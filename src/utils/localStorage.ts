export const isDarkTheme = () => {
  const prefersDarkTheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches}`;
  const themeString = localStorage.getItem('isDark') ?? prefersDarkTheme ?? 'false';
  return JSON.parse(themeString);
};
