import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

import Socials from './Socials';

import config from '../../blog-config';

const Bio = () => {
  const { author, description } = config;

  return (
    <Container>
      <Wrapper>
        <Avatar>
          <StaticImage
            src="../images/avatar.jpeg"
            alt="avatar"
            placeholder="blurred"
          />
        </Avatar>
        <Socials />
      </Wrapper>
      <Profile>
        <Name>{author}</Name>
        <Description>{description}</Description>
      </Profile>
    </Container>
  );
};

export default Bio;

const Container = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin: 0 10px;
  margin-bottom: 8px;
  max-width: 100%;

  @media ${device.widerThanLaptopS} {
    flex-direction: column;
    align-items: flex-start;
    width: 316px;
    padding: 20px 20px 4px 20px;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  position: relative;
`;

const Avatar = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'flex-start' })}
  margin-bottom: 10px;
  max-width: 100%;
  min-width: fit-content;

  @media ${device.widerThanLaptopS} {
    margin-right: 0;
    width: 100%;
    min-height: 168px;  
  }

  img {
    width: 128px !important;
    height: 128px !important;
    border-radius: 50%;

    @media ${device.widerThanLaptopS} {
      width: 168px !important;
      height: 168px !important;
    }
  }
`;

const Profile = styled.div`
  ${flex({ flexDirection: 'column' })}
  margin-left: 16px;
  max-width: 296px;
  height: 138px;
  
  @media ${device.widerThanLaptopS} {
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;

const Name = styled.span`
  max-width: 100%;
  display: block;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media ${device.widerThanLaptopS} {
    font-size: 24px;
    padding-top: 4px;
  }
`;

const Description = styled.p`
  max-width: 100%;
  font-size: 14px;
  word-break: break-all;

  @media ${device.widerThanLaptopS} {
    font-size: 16px;
  }
`;
