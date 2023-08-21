import styled from 'styled-components';

import Arrow from '../assets/icons/ArrowThin';
import useScrollToTop from '../hooks/useScrollToTop';
import { flex } from '../styles/mixins';

const ScrollToTop = () => {
  const { isTop, handleClickButton } = useScrollToTop();

  if (isTop) return null;

  return (
    <Container onClick={() => handleClickButton()}>
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
  background-color: ${({ theme }) => theme.scrollToTopBg};
  cursor: pointer;

  svg {
    path {
      fill: ${({ theme }) => theme.scrollToTop};
    }
  }

  @media (hover: hover) {
    &:hover {
      &::before {
        content: '';
        position: absolute;
        top: -6px;
        right: 50%;
        bottom: auto;
        border: 6px solid transparent;
        border-top-color: ${({ theme }) => theme.tooltipBg};
        margin-right: -6px;
        width: 0;
        height: 0;
        color: ${({ theme }) => theme.tooltipBg};
        opacity: 0.7;
      }

      &::after {
        content: 'Scroll to top';
        position: absolute;
        bottom: 100%;
        right: 50%;
        font-size: 12px;
        border: none;
        border-radius: 6px;
        margin-bottom: 6px;
        padding: 4px 6px;
        min-width: fit-content;
        background-color: ${({ theme }) => theme.tooltipBg};
        color: ${({ theme }) => theme.tooltip};
        opacity: 0.7;
        transform: translateX(50%);
        pointer-events: none;
        white-space: nowrap;
        -webkit-font-smoothing: subpixel-antialiased;
      }
    }
  }
`;
