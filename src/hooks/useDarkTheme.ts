import { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(()=> {
    const prefersDarkTheme = `${window.matchMedia('(prefers-color-scheme: dark)').matches}`;
    const themeString = localStorage.getItem('isDark') ?? prefersDarkTheme ?? 'false';
    setIsDark(JSON.parse(themeString));
  });

  return isDark;
};

export default useDarkTheme;
