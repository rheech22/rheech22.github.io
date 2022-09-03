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
  ${flex('normal', 'normal', 'column')};
  width: fit-content;

  @media ${device.tablet} {
    padding-left: 40px;
  }
`;
