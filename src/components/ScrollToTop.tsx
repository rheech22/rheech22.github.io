import styled from 'styled-components';
import { tooltipBg } from '../styles/themes';
import { flex } from '../styles/mixins';

import Arrow from '../assets/icons/ArrowThin';

import useScrollToTop from '../hooks/useScrollToTop';

const ScrollToTop = () => {
  const { isTop, handleClickButton } = useScrollToTop();

  if (isTop) return null;

  return (
    <Container onClick={()=> handleClickButton()}>
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
  cursor: pointer;
  
  svg {
    path {
      fill: white;
    }
  }

  @media (hover: hover) {
    &:hover {
      &::before {
        position: absolute;
        top: -6px;
        right: 50%;
        bottom: auto;
        margin-right: -6px;
        width: 0;
        height: 0;
        color: ${tooltipBg};
        content: "";
        border: 6px solid transparent;
        border-top-color: ${tooltipBg};
        opacity: 0.7;
      }
    
      &::after {
        position: absolute;
        bottom: 100%;
        right: 50%;
        transform: translateX(50%);
        content: 'Scroll to top';
        pointer-events: none;
        font-size: 12px;
        min-width: fit-content;
        white-space: nowrap;
        background-color: ${tooltipBg};
        color: white;
        padding: 4px 6px;
        border: none;
        border-radius: 6px;
        margin-bottom: 6px;
        -webkit-font-smoothing: subpixel-antialiased;
        opacity: 0.7;
      }
    }
  }
`;
