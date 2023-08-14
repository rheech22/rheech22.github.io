import styled from 'styled-components';

import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';
import Bio from './Bio';

const Sidebar = () => (
  <Wrapper>
    <Bio />
  </Wrapper>
);

export default Sidebar;

const Wrapper = styled.aside`
  ${flex({ flexDirection: 'column' })};
  position: static;
  max-width: 100%;
  width: 100%;
  height: 100%;

  @media ${device.widerThanLaptopS} {
    width: fit-content;
    margin-left: 20px;
    margin-right: auto;
  }
`;
