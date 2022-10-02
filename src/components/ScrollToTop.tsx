import styled from 'styled-components';
import { flex } from '../styles/mixins';

import Arrow from '../assets/icons/ArrowThin';

const ScrollToTop = () => {
  return (
    <Container>
      <Arrow />
    </Container>
  );
};

export default ScrollToTop;

const Container = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 24px 24px 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ theme })=> theme.searchSuggestionHovered};
  
  svg {
    path {
      fill: white;
    }
  }
`;
