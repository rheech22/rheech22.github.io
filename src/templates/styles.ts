import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { markdown } from '../styles/modules';
import { flex } from '../styles/mixins';

export const Section = styled.section`
  ${flex({ justifyContent: 'center' })}
  margin: 72px auto 0 auto;
  padding-top: 48px;
  width: 100%;
  height: auto;
`;

export const Article = styled.article < { hasHeadings: boolean } > `
  @media ${device.widerThanTablet} {
    width: 726px;
  }

  @media ${device.widerThanLaptopS} {
    ${({ hasHeadings }) => hasHeadings ? 'margin-left: auto; transform: translateX(12%);' : ''};
  }
  
  ${flex({ flexDirection: 'column' })};
  padding: 48px 16px;
  width: auto;
`;

export const Header = styled.header`
  margin-bottom: 56px;
`;

export const Main = styled.main`
  & > section {
    &:nth-child(1){
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
`;

export const Tags = styled.ul`
  ${flex({ alignItems: 'center' })};
  flex-wrap: wrap;
  margin-top: 14px;
`;

export const Nav = styled.nav`
  @media ${device.widerThanMobile} {
    flex-direction: row;
  }

  ${flex({ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' })};
  margin-top: 8em;

  & > div {
    @media ${device.widerThanMobile} {
      width: fit-content;
      min-width: 192px;
    }

    ${flex({ alignItems: 'center' })};
    padding: 20px;
    border-radius: 12px;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.lightBlue};
    }

    & > svg {
      path {
        fill: ${({ theme }) => theme.mute};
      }
    }

    &:first-of-type {
      svg { 
        transform: rotate(90deg);
      }
    }

    &:last-of-type {
      svg { 
        transform: rotate(-90deg);
      }
    }

    & > div {
      & > h3 {
        ${flex({ alignItems: 'center' })};
        font-size: 12px;
        height: 30px;
      }

      & > a {
        ${flex({ alignItems: 'center' })};
        color: ${({ theme }) => theme.blue};
        text-decoration: none;
        height: 30px;
      }

      &:first-of-type {
        margin-left: 20px;

        a, h3 {
          margin-right: auto;
        }
      }

      &:last-of-type {
        margin-right: 20px;

        a, h3 {
          margin-left: auto;
        }
      }
    }
  }
`;

export const Comments = styled.section`
  width: 100%;
  padding: 0 8px 3em 8px;
`;
