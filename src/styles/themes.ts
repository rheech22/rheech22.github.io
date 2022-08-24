export const headerLogo = '#f0f6fc';
export const headerBg = '#161b22';
export const searchPlaceholder = '#C9D1D9';

const darkTheme = {
  default: '#C9D1D9',
  mute: '#8b949e',
  bg: '#0D1118',
  searchBg: '#0D1118',
  searchBorder: '#30363d',
  searchBgFocused: '#161b22',
  searchPlaceholderFocused: '#757D86',
  themeIconPosition: 'right center',
};

const lightTheme = {
  default: '#24292f',
  mute: '#57606a',
  bg: '#fff',
  searchBg: '#24292f',
  searchBorder: '#57606a',
  searchBgFocused: '#F6F8FA',
  searchPlaceholderFocused: '#57606a',
  themeIconPosition: '0',
};

export const dark = {
  default: darkTheme.default,
  mute: darkTheme.mute,
  bg: darkTheme.bg,
  searchBg: darkTheme.searchBg,
  searchBorder: darkTheme.searchBorder,
  searchBgFocused: darkTheme.searchBgFocused,
  searchPlaceholderFocused: darkTheme.searchPlaceholderFocused,
  themeIconPosition: darkTheme.themeIconPosition,
};

export const light = {
  default: lightTheme.default,
  mute: lightTheme.mute,
  bg: lightTheme.bg,
  searchBg: lightTheme.searchBg,
  searchBorder: lightTheme.searchBorder,
  searchBgFocused: lightTheme.searchBgFocused,
  searchPlaceholderFocused: lightTheme.searchPlaceholderFocused,
  themeIconPosition: lightTheme.themeIconPosition,
};

export interface Theme {
  [key: string]: string;
}