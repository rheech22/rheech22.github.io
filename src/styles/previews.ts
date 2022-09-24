import { css } from "styled-components";
import { device } from "./breakpoints";
import { flex } from "./mixins";

export const previews = css`
  @media ${device.widerThanTablet} {
    margin: 0 10px;
    padding: 0px 10px;
    max-width: 780px;
  }

  ${flex('center', 'center', 'column')}
  margin-left: 0;
  width: 100%;
  padding: 0px 20px;
  
  & > p {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }

  & > li + li {
    border-top: ${({ theme }) => `1px solid ${theme.border}`};
  }
`;
