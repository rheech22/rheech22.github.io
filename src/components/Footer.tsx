import styled from 'styled-components';

import { border } from '../styles/mixins';

const Footer = () => {
  return (
    <Container>
      <section>
        <span>© rheech22 2022</span>
      </section>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  ${border.top};
  margin-top: auto;
  width: 100%;
  font-size: 12px;
  text-align: center;
  font-family: 'Sora', 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  color: #bac4ce;

  & > section {
    padding: 48px 8px;
  }
`;
