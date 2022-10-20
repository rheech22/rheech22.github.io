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
  ${flex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' })}
  padding: 48px 0px;
  width: 100%;

  @media ${device.widerThanLaptop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  & > ul {
    @media ${device.widerThanLaptop} {
      margin-right: auto;
    }
  }
`;
