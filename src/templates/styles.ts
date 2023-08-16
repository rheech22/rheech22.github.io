import styled from 'styled-components';

import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';
import { markdown } from '../styles/modules';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'post'
    'post'
    'comments';

  @media ${device.widerThanTabletL} {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'post post toc'
      'post post toc'
      'comments comments .';
  }

  // post section
  & > section {
    grid-area: post;

    @media ${device.widerThanTablet} {
      max-width: 826px;
    }

    @media ${device.widerThanTabletL} {
      max-width: 1060px;
    }
  }

  // toc
  & > aside {
    grid-area: toc;

    @media ${device.widerThanLaptopS} {
      display: block;
    }
  }

  // comments section
  & > div {
    grid-area: comments;
    margin: 0 auto;

    @media ${device.widerThanTablet} {
      max-width: 826px;
    }

    @media ${device.widerThanTabletL} {
      max-width: 1060px;
    }
  }
`;

export const Section = styled.section`
  ${flex({ justifyContent: 'center' })};
  margin: 72px auto 72px auto;
  height: auto;
  min-width: 86%;
`;

export const Article = styled.article<{ hasHeadings: boolean }>`
  padding: 20px 0;
  width: 100%;
  ${flex({ flexDirection: 'column' })};
`;

export const Nav = styled.nav`
  ${flex({ alignItems: 'center', justifyContent: 'flex-start' })};
  font-weight: 500;
  padding: 10px 0;

  & > div {
    & > a {
      text-underline-position: under;
    }

    & > svg {
      margin: 0 4px;
      transform: rotate(90deg);
    }
  }
`;

export const Header = styled.header`
  margin-bottom: 26px;
`;

export const Main = styled.main`
  & > section {
    &:nth-child(1) {
      ${markdown}
    }
  }
`;

export const Title = styled.h1`
  @media ${device.widerThanMobile} {
    font-size: 42px;
  }

  margin-bottom: 4px;
  font-size: 36px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.mute};
  font-family: 'Sora', 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;

  /* time and links*/
  & > div {
    ${flex({ alignItems: 'flex-end', flexDirection: 'column' })};

    a {
      text-underline-position: under;
    }
  }
`;

export const Comments = styled.div`
  ${flex({ justifyContent: 'center' })};
  width: 100%;
  padding: 0 8px 3em 8px;

  & > giscus-widget {
    width: 100% !important;
    padding: 20px 0px;
  }
`;
