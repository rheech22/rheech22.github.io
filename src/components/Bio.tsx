import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import Location from "../assets/icons/Location";
import Link from "../assets/icons/Link";
import Mail from "../assets/icons/Mail";

import config from "../../blog-config";

const { avatarUrl, author, description, locaiton, email, github } = config;

const Bio = () => {
  return (
    <Container>
      <Avatar>
        <img alt='avatar' src={avatarUrl} />
      </Avatar>
      <Profile>
        <span>{author}</span>
        <p>{description}</p>
        <ul>
          <li>
            <Location />
            <span>{locaiton}</span>
          </li>
          <li>
            <Mail />
            <a href={email}>{email}</a>
          </li>
          <li>
            <Link/>
            <a href={github}>{github}</a>
          </li>
        </ul>
      </Profile>
    </Container>
  );
};

export default Bio;

const Container = styled.div`
  @media ${device.widerThanLaptop} {
    flex-direction: column;
    max-width: 316px;
    padding: 20px;
    margin: 0 0 18px 0;
  }

  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin: 0 20px;
  margin-bottom: 8px;
  height: fit-content;
`;

const Avatar = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  margin-right: 12px;
  width: 148px;
  height: 148px;
  transition: all 1s;

  & > img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  @media ${device.widerThanLaptop} {
    margin-right: 0;
    width: 100%;
    min-height: 168px;
    
    & > img {
      width: 168px;
      height: 168px;
    }
  }
`;

const Profile = styled.div`
  @media ${device.widerThanLaptop} {
    & > p {
      margin-bottom: 16px;
    }
  }

  max-width: 296px;

  & > span{
    @media ${device.widerThanLaptop} {
      font-size: 20px;
    }

    width: 100%;
    display: block;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > p {
    @media ${device.widerThanLaptop} {
      font-size: 14px;
    }

    margin-bottom: 8px;
    width: 100%;
    font-size: 12px;
  }

  & > ul {
    @media ${device.widerThanLaptop} {
      a, span {
        font-size: 12px;
      }
    }

    width: 100%;

    svg {
      margin-right: 8px;
      fill: ${({ theme })=>theme.mute};
      width: fit-content;
    }

    li {
      ${flex({ alignItems: 'center' })}
      width: 100%;
      height: 24px;
    }
    
    a, span {
      @media ${device.widerThanLaptop} {
        max-width: 270px;
      }
  
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }

    a {
      text-decoration: none;

      &:hover {
        color: ${({ theme })=>theme.blue};
        text-decoration: underline;
      }
    }
  }
`;
