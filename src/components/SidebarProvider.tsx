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
  @media ${device.laptopL} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  ${flex('center', 'center', 'column')}
  padding-top: 48px;
  width: 100%;

  & > ul {
    @media ${device.laptopL} {
      margin-right: auto;
    }
  }
`;
