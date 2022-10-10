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
  
  &> section {
    padding: 48px 8px;
  }

  & > span {
    display: inline-flex;
    align-items: center;
    color: ${({ theme })=> theme.mute};
  }
`;
