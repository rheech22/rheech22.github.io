import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { markdown } from '../styles/modules';
import { flex } from '../styles/mixins';

export const Section = styled.section`
  ${flex({ justifyContent: 'center' })};
  margin: 72px auto;
  padding-top: 48px;
  width: 100%;
  height: auto;
`;

export const Article = styled.article<{ hasHeadings: boolean }>`
  @media ${device.widerThanTablet} {
    transform: translateX(3%);
    max-width: 826px;
  }

  @media ${device.widerThanLaptopL} {
    max-width: 1060px;
  }

  @media ${device.widerThanLaptop} {
    ${({ hasHeadings }) =>
      hasHeadings
        ? `
        position: relative;
        left: 50%;
        transform: translateX(-47%)
      `
        : ''};
  }

  ${flex({ flexDirection: 'column' })};
  padding: 20px 30px;
  width: 100%;
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
  font-size: 14px;

  & > nav {
    display: flex;

    & > span {
      margin-right: 4px;
    }

    & > div {
      & > a {
        text-underline-position: under;
      }

      & > span {
        margin: 0 4px;
      }
    }
  }
`;

export const Tags = styled.ul`
  ${flex({ alignItems: 'center' })};
  flex-wrap: wrap;
  margin-top: 14px;
`;

export const Comments = styled.section`
  ${flex({ justifyContent: 'center' })};
  width: 100%;
  padding: 0 8px 3em 8px;

  & > giscus-widget {
    @media ${device.widerThanTablet} {
      transform: translateX(3%);
      max-width: 826px;
    }

    @media ${device.widerThanLaptopL} {
      max-width: 1060px;
    }

    width: 100% !important;
    padding: 20px 30px;
  }
`;
