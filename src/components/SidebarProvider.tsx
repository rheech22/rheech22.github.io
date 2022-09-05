import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element
}

const SidebarProvider = ({ children }: Props) => (
  <Wrapper>
    <Sidebar />
    {children}
  </Wrapper>
);

export default SidebarProvider;

const Wrapper = styled.div`
  ${flex('normal', 'center', 'column')}
  padding-top: 48px;
  
  @media ${device.tablet} {
    flex-direction: row;
  }
  
  & > ul {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    width: auto;
    
    & > p {
      margin-top: 50px;
      text-align: center;
      width: 100%;
    }
    
    @media ${device.tablet} {
      margin: 0 10px;
      width: 900px;
    }
  }

`;
