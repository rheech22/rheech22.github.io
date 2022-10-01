import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { markdown } from '../styles/modules';
import { flex } from '../styles/mixins';

export const Section = styled.section`
  ${flex({ justifyContent: 'center' })}
  margin: 72px auto 0 auto;
  padding: 48px 0px;
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

export const Comments = styled.section`
  padding: 48px 8px;
`;
