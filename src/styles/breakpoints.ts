const size = {
  mobile: '425px',
  tablet: '768px',
  tabletL: '1080px',
  laptopS: '1280px',
  laptop: '1440px',
  laptopL: '1630px'
};

export const device = {
  widerThanMobile: `(min-width: ${size.mobile})`,
  widerThanTablet: `(min-width: ${size.tablet})`,
  widerThanTabletL: `(min-width: ${size.tabletL})`,
  widerThanLaptopS: `(min-width: ${size.laptopS})`,
  widerThanLaptop: `(min-width: ${size.laptop})`,
  widerThanLaptopL: `(min-width: ${size.laptopL})`
};
