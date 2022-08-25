import styled from 'styled-components';
import Bio from '../components/Bio';
import Tags from '../components/Tags';
import PostPreviews from '../containers/PostPreviews';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

export default () => (
  <Wrapper>
    <SideBar>
      <Bio />
      <Tags />
    </SideBar>
    <PostPreviews />
  </Wrapper>
);

const Wrapper = styled.div`
  ${flex('normal', 'normal', 'column')}
  
  @media ${device.tablet} {
    flex-direction: row;
  }
  
  & > ul {
    margin: 0 auto;
    padding: 0 40px;
    max-width: 1440px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
    
    @media ${device.laptopM} {
      grid-template-columns: 1fr 1fr;
    }

    /* & > li {
      border: 1px solid yellowgreen;
    } */
  }
`;

const SideBar = styled.aside`
  ${flex('normal', 'normal', 'column')}
  min-width: 325px;
`;
