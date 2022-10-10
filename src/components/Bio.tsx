import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { border, flex } from '../styles/mixins';

import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';
import Link from '../assets/icons/LinkBig';

import config from '../../blog-config';

const Bio = () => {
  const { author, description, twitterUsername, github } = config;

  return (
    <Container>
      <Avatar>
        <StaticImage
          src="../images/avatar.jpeg"
          alt="avatar"
          placeholder="blurred"
        />
      </Avatar>
      <Profile>
        <Author>{author}</Author>
        <Description>{description}</Description>
        <Info>
          <li>
            <a href={github}>
              <Github />
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/${twitterUsername}`}>
              <Twitter />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <Link />
            </a>
          </li>
        </Info>
      </Profile>
    </Container>
  );
};

export default Bio;

const Container = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin: 0 10px;
  margin-bottom: 8px;
  height: fit-content;
  max-width: 100%;

  @media ${device.widerThanLaptop} {
    flex-direction: column;
    max-width: 316px;
    padding: 20px 20px 4px 20px;
    margin: 0;
  }
`;

const Avatar = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'flex-start' })}
  margin-right: 12px;
  max-width: 100%;
  min-width: fit-content;

  @media ${device.widerThanLaptop} {
    margin-right: 0;
    width: 100%;
    min-height: 168px;  
  }

  img {
    width: 128px !important;
    height: 128px !important;
    border-radius: 50%;

    @media ${device.widerThanLaptop} {
      width: 168px !important;
      height: 168px !important;
    }
  }
`;

const Profile = styled.div`
  ${flex({ flexDirection: 'column' })}
  max-width: 296px;
  min-height: 128px;
  
  @media ${device.widerThanLaptop} {
    width: 100%;
  }
`;

const Author = styled.span`
  max-width: 100%;
  display: block;
  padding: 2px 0;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media ${device.widerThanLaptop} {
    font-size: 24px;
    padding-top: 4px;
  }
`;

const Description = styled.p`
  margin-bottom: 6px;
  max-width: 100%;
  font-size: 14px;
  word-break: break-all;

  @media ${device.widerThanLaptop} {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const Info = styled.ul`
  ${flex()};
  margin-top: auto;

  & > li + li {
    margin-left: 8px;
  }
  
  & > li {
    max-width: 100%;
    height: 24px;

    & > a {
      ${flex({ alignItems: 'center', justifyContent: 'center' })};

      & > svg {
        height: 24px;
        width: 24px;
        path {
          fill: ${({ theme })=> theme.mute};
        }
      }

      &:hover {
        path {
          fill: ${({ theme })=> theme.default};
        }
      }
    }
  }
`;
