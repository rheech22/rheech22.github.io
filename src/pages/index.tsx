import styled from 'styled-components';
import PostPreviews from '../containers/PostPreviews';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';
import Sidebar from '../components/Sidebar';

export default () => (
  <Wrapper>
    <Sidebar />
    <PostPreviews />
  </Wrapper>
);

const Wrapper = styled.div`
  ${flex('normal', 'normal', 'column')}
  
  @media ${device.tablet} {
    flex-direction: row;
  }
  
  & > ul {
    padding: 0 50px;
    max-width: 1440px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
    
    @media ${device.laptopM} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${device.tablet} {
      margin: 0 auto;
      padding: 0 40px;
    }
  }
`;
