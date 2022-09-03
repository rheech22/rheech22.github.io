export const headerLogo = '#f0f6fc';
export const headerBg = '#161b22';
export const searchPlaceholder = '#C9D1D9';
export const white = '#ffffff';

const darkTheme = {
  default: '#C9D1D9',
  mute: '#8b949e',
  bg: '#0D1118',
  blue: '#58a6ff',
  lightBlue: 'rgba(56,139,253,0.15)',
  searchBg: '#0D1118',
  searchBorder: '#30363d',
  searchBgFocused: '#161b22',
  searchPlaceholderFocused: '#757D86',
  tagBgHovered: '#1f6feb',
  themeIconPosition: 'right center',
};

const lightTheme = {
  default: '#24292f',
  mute: '#57606a',
  bg: '#fff',
  blue: '#0969da',
  lightBlue: '#ddf4ff',
  searchBg: '#24292f',
  searchBorder: '#57606a',
  searchBgFocused: '#F6F8FA',
  searchPlaceholderFocused: '#57606a',
  tagBgHovered: '#0969da',
  themeIconPosition: '0',
};

export const dark = {
  default: darkTheme.default,
  mute: darkTheme.mute,
  bg: darkTheme.bg,
  blue: darkTheme.blue,
  lightBlue: darkTheme.lightBlue,
  searchBg: darkTheme.searchBg,
  searchBorder: darkTheme.searchBorder,
  searchBgFocused: darkTheme.searchBgFocused,
  searchPlaceholderFocused: darkTheme.searchPlaceholderFocused,
  tagBgHovered: darkTheme.tagBgHovered,
  themeIconPosition: darkTheme.themeIconPosition,
};

export const light = {
  default: lightTheme.default,
  mute: lightTheme.mute,
  bg: lightTheme.bg,
  blue: lightTheme.blue,
  lightBlue: lightTheme.lightBlue,
  searchBg: lightTheme.searchBg,
  searchBorder: lightTheme.searchBorder,
  searchBgFocused: lightTheme.searchBgFocused,
  searchPlaceholderFocused: lightTheme.searchPlaceholderFocused,
  tagBgHovered: lightTheme.tagBgHovered,
  themeIconPosition: lightTheme.themeIconPosition,
};

export interface Theme {
  [key: string]: string;
}
