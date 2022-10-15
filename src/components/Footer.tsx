import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <section>
        <span>© LCH 2022</span>
      </section>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  border-top: ${({ theme })=> `1px solid ${theme.border}`};
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin-top: auto;

  &> section {
    padding: 48px 8px;
  }

  & > span {
    display: inline-flex;
    align-items: center;
  }
`;
