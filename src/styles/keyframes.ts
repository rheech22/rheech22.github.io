import { keyframes } from 'styled-components';

export const sunset = keyframes`
  from {
    transform: rotate(90deg) translate(-50px) translateZ(10px);
  }
  to {
    transform: rotate(270deg) translate(-50px) translateZ(10px);
  }
`;

export const sunrise = keyframes`
  from {
    transform: rotate(90deg) translate(50px) translateZ(10px);
  }
  to {
    transform: rotate(270deg) translate(50px) translateZ(10px);
  }
`;
