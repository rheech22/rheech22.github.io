import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

import LocationIcon from '../assets/icons/Location';
import LinkIcon from '../assets/icons/Link';
import MailIcon from '../assets/icons/Mail';

import config from '../../blog-config';

const Bio = () => {
  const { author, description, location, email, github } = config;

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
            <div>
              <LocationIcon />
            </div>
            <span>{location}</span>
          </li>
          <li>
            <div>
              <MailIcon />
            </div>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <div>
              <LinkIcon />
            </div>
            <a href={github}>{github}</a>
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
    padding: 20px;
    margin: 0;
  }
`;

const Avatar = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
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
  max-width: 296px;
  height: 100%;
`;

const Author = styled.span`
  max-width: 100%;
  display: block;
  padding: 4px 0;
  font-size: 20px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media ${device.widerThanLaptop} {
    padding: 8px 0;
    font-size: 24px;
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
  ${flex({ alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' })};
  max-width: 100%;
  
  & > li {
    ${flex({ alignItems: 'center' })}
    position: relative;
    max-width: 100%;
    height: 24px;

    & > div {
      ${flex({ alignItems: 'center' })}
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      & > svg {
        fill: ${({ theme })=> theme.mute};
        width: fit-content;
      }
    }


    & > a, span {
      margin-left: 24px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      
      @media ${device.widerThanLaptop} {
        max-width: 100%;
      }
    }

    & > a {
      text-decoration: none;
  
      &:hover {
        color: ${({ theme })=>theme.blue};
        text-decoration: underline;
      }
    }
  }
`;
