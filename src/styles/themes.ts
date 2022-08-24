export const headerLogo = '#f0f6fc';
export const headerBg = '#161b22';
export const searchPlaceholder = '#C9D1D9';

export const darkBg = '#0D1118';
export const darkMain = '#C9D1D9';
export const darkSub = '#8b949e';
export const darkSearchBg = '#0D1118';
export const darkSearchBorder = '#30363d';
export const darkSearchBgFocused = '#161b22';
export const darkSearchPlaceholderFocused = '#757D86';

export const lightBg = '#fff';
export const lightMain = '#24292f';
export const lightSub = '#57606a';
export const lightSearchBg = '#24292f';
export const lightSearchBorder = '#57606a';
export const lightSearchBgFocused = '#F6F8FA';
export const lightSearchPlaceholderFocused = '#57606a';


export const dark = {
  color: darkMain,
  subColor: darkSub,
  bgColor: darkBg,
  bgPosition: 'right center',
  searchBg: darkSearchBg,
  searchBorder: darkSearchBorder,
  searchBgFocused: darkSearchBgFocused,
  searchPlaceholderFocused: darkSearchPlaceholderFocused,
};

export const light = {
  color: lightMain,
  subColor: lightSub,
  bgColor: lightBg,
  bgPosition: '0',
  searchBg: lightSearchBg,
  searchBorder: lightSearchBorder,
  searchBgFocused: lightSearchBgFocused,
  searchPlaceholderFocused: lightSearchPlaceholderFocused,
};

export interface Theme {
  [key: string]: string;
}