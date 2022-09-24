import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

import Tags from './Tags';
import Bio from './Bio';

const Sidebar = () => (
  <Wrapper>
    <Bio />
    <Tags />
  </Wrapper>
);

export default Sidebar;

const Wrapper = styled.aside`
  @media ${device.widerThanLaptop} {
    width: fit-content;
    margin-left: 20px;
    margin-right: auto;
  }

  ${flex('normal', 'normal', 'column')};
  position: static;
  width: 100%;
  height: 100%;
`;
