import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { markdown } from '../styles/modules';
import { flex } from '../styles/mixins';

export const Section = styled.section`
  ${flex({ justifyContent: 'center' })};
  margin: 72px auto 0 auto;
  padding-top: 48px;
  width: 100%;
  height: auto;
`;

export const Article = styled.article < { hasHeadings: boolean } > `
  @media ${device.widerThanTablet} {
    transform: translateX(3%);
    max-width: 726px;
  }
  
  @media ${device.widerThanLaptopS} {
    ${({ hasHeadings }) =>
    hasHeadings ? `
        position: relative;
        left: 50%;
        transform: translateX(-47%)
      ` : ''};
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
    width: 100%;
    
    & > a {
      @media ${device.widerThanMobile} {
        width: fit-content;
        min-width: 192px;
      }
      
      ${flex({ alignItems: 'center' })};
      padding: 8px;
      border-radius: 8px;
      text-decoration: none;
      width: 100%;

      @media (hover: hover) {
        &:hover {
          background-color: ${({ theme }) => theme.lightBlue};
    
          span {
            text-decoration: underline;
          }
        }
      }

      & > svg {
        path {
          fill: ${({ theme }) => theme.mute};
        }
      }
  
      & > div {
        & > h3 {
          ${flex({ alignItems: 'center' })};
          font-size: 12px;
          height: 30px;
        }
  
        & > span {
          ${flex({ alignItems: 'center' })};
          color: ${({ theme }) => theme.blue};
          height: 30px;
        }
      }
    }

    &:first-of-type {
      & > a  {
        justify-content: flex-start;
        margin-right: auto;
        padding-left: 4px;
  
        & > div {
          margin-left: 20px;
  
          span, h3 {
            justify-content: start;
          }
        }
  
        & > svg { 
          transform: rotate(90deg);
        }
      }
    }

    &:last-of-type {
      & > a {
        justify-content: flex-end;
        margin-left: auto;
        padding-right: 4px;
  
        & > div {
          margin-right: 20px;
  
          span, h3 {
            justify-content: flex-end;
          }
        }
  
        & > svg {
          transform: rotate(-90deg);
        }
      }
    }
  }

`;

export const Comments = styled.section`
  width: 100%;
  padding: 0 8px 3em 8px;
`;
