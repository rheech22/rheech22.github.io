import { keyframes } from 'styled-components';

export const sunset = keyframes`
  from {
    transform: rotate(90deg) translate(-60px);
  }
  to {
    transform: rotate(270deg) translate(-60px);
  }
`;

export const sunrise = keyframes`
  from {
    transform: rotate(90deg) translate(60px);
  }
  to {
    transform: rotate(270deg) translate(60px);
  }
`;
