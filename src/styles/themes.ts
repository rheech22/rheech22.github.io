export const headerLogo = '#f0f6fc';
export const headerBg = '#161b22';
export const searchPlaceholder = '#C9D1D9';
export const white = '#ffffff';

const darkTheme = {
  default: '#C9D1D9',
  mute: '#8b949e',
  bg: '#0D1118',
  border: '#21262d',
  blue: '#58a6ff',
  lightBlue: 'rgba(56,139,253,0.15)',
  searchBg: '#0D1118',
  searchBorder: '#30363d',
  searchBgFocused: '#161b22',
  searchPlaceholderFocused: '#757D86',
  searchSuggestionBg: '#0D1118',
  searchSuggestionHovered: '#0969da',
  tagBgHovered: '#1f6feb',
  codeBg: 'rgba(110,118,129,0.4)',
  themeIconPosition: 'right center',
};

const lightTheme = {
  default: '#24292f',
  mute: '#57606a',
  bg: '#fff',
  border: 'hsla(210,18%,87%,1)',
  blue: '#0969da',
  lightBlue: '#ddf4ff',
  searchBg: '#24292f',
  searchBorder: '#57606a',
  searchBgFocused: '#F6F8FA',
  searchPlaceholderFocused: '#57606a',
  searchSuggestionBg: '#ffffff',
  searchSuggestionHovered: '#0969da',
  tagBgHovered: '#0969da',
  codeBg: 'rgba(175,184,193,0.2)',
  themeIconPosition: '0',
};

export const dark = {
  default: darkTheme.default,
  mute: darkTheme.mute,
  bg: darkTheme.bg,
  border: darkTheme.border,
  blue: darkTheme.blue,
  lightBlue: darkTheme.lightBlue,
  searchBg: darkTheme.searchBg,
  searchBorder: darkTheme.searchBorder,
  searchBgFocused: darkTheme.searchBgFocused,
  searchPlaceholderFocused: darkTheme.searchPlaceholderFocused,
  searchSuggestionBg: darkTheme.searchSuggestionBg,
  searchSuggestionHovered: darkTheme.searchSuggestionHovered,
  tagBgHovered: darkTheme.tagBgHovered,
  codeBg: darkTheme.codeBg,
  themeIconPosition: darkTheme.themeIconPosition,
};

export const light = {
  default: lightTheme.default,
  mute: lightTheme.mute,
  bg: lightTheme.bg,
  border: lightTheme.border,
  blue: lightTheme.blue,
  lightBlue: lightTheme.lightBlue,
  searchBg: lightTheme.searchBg,
  searchBorder: lightTheme.searchBorder,
  searchBgFocused: lightTheme.searchBgFocused,
  searchPlaceholderFocused: lightTheme.searchPlaceholderFocused,
  searchSuggestionBg: lightTheme.searchSuggestionBg,
  searchSuggestionHovered: lightTheme.searchSuggestionHovered,
  tagBgHovered: lightTheme.tagBgHovered,
  codeBg: lightTheme.codeBg,
  themeIconPosition: lightTheme.themeIconPosition,
};

export interface Theme {
  [key: string]: string;
}
