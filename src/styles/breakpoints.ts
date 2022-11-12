const size = {
  mobile: '425px',
  tablet: '768px',
  laptopS: '1280px',
  laptop: '1440px',
};

export const device = {
  widerThanMobile: `(min-width: ${size.mobile})`,
  widerThanTablet: `(min-width: ${size.tablet})`,
  widerThanLaptopS: `(min-width: ${size.laptopS})`,
  widerThanLaptop: `(min-width: ${size.laptop})`,
};
