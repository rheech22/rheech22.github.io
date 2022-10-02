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
          width={168}
          height={168}
        />
      </Avatar>
      <Profile>
        <Author>{author}</Author>
        <Description>{description}</Description>
        <Info>
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
          <li>
            <MailIcon />
            <a href={email}>{email}</a>
          </li>
          <li>
            <LinkIcon />
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
    margin: 0 0 18px 0;
  }
`;

const Avatar = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin-right: 12px;
  width: 148px;
  height: 148px;
  min-width: 100px;

  @media ${device.widerThanLaptop} {
    margin-right: 0;
    width: 100%;
    min-height: 168px;  
  }

  img {
    width: 95px;
    height: 95px;
    min-width: 95px;
    border-radius: 50%;

    @media ${device.widerThanTablet} {
      width: 130px;
      height: 130px;
    }  

    @media ${device.widerThanLaptop} {
      width: 168px;
      height: 168px;
    }
  }
`;

const Profile = styled.div`
  max-width: 296px;
`;

const Author = styled.span`
  width: 100%;
  display: block;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.widerThanLaptop} {
    font-size: 20px;
  }
`;

const Description = styled.p`
  margin-bottom: 8px;
  width: 100%;
  font-size: 12px;
  word-break: keep-all;

  @media ${device.widerThanLaptop} {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const Info = styled.ul`
  ${flex({ alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' })};
  width: 100%;
  min-width: fit-content;

  
  & > li {
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 24px;

    & > svg {
      margin-right: 8px;
      fill: ${({ theme })=>theme.mute};
      width: fit-content;
    }

    & > a, span {
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      
      @media ${device.widerThanLaptop} {
        max-width: 270px;
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
