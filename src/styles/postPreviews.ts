import { css } from "styled-components";
import { device } from "./breakpoints";
import { flex } from "./mixins";

export const postPreviews = css`
  ${flex('center', 'center', 'column')}
  margin-left: 0;
  width: 100%;
  padding: 0px 20px;
  
  & > p {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
  
  @media ${device.tablet} {
    margin: 0 10px;
    padding: 0px 10px;
    max-width: 900px;
  }
`;
