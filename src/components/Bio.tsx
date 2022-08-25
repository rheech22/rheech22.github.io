import styled from "styled-components";
import LinkIcon from "../assets/icons/LinkIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import MailIcon from "../assets/icons/MailIcon";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

const Bio = () => {
  return (
    <Container>
      <Avatar>
        <img alt='avatar' src="https://user-images.githubusercontent.com/57756798/186722103-fab30337-6059-4a92-ad19-2b4f5a2fea9f.jpeg"/>
      </Avatar>
      <Profile>
        <span>Aiden</span>
        <p>하루하루는 성실하게, 인생 전체는 되는대로</p>
        <ul>
          <li>
            <LocationIcon />
            <span>Bundang</span>
          </li>
          <li>
            <MailIcon />
            <a href="rheech22@gmail.com">rheech22@gmail.com</a>
          </li>
          <li>
            <LinkIcon/>
            <a href="https://github.com/rheech22">https://github.com/rheech22</a>
          </li>
        </ul>
      </Profile>
    </Container>
  );
};

export default Bio;

const Container = styled.div`
  ${flex('center', 'normal', 'row')}
  width: 100%;
  height: fit-content;
  padding: 0 40px;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 0;
  }
`;

const Avatar = styled.div`
  ${flex('center', 'center', 'row')};
  margin-right: 8px;
  width: 148px;
  height: 148px;
  transition: all 1s;

  & > img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    margin-right: 0;
    width: 296px;
    height: 296px;
    
    & > img {
      width: 260px;
      height: 260px;
    }
  }
`;

const Profile = styled.div`
  & > span{
    padding: 8px 0;
    display: block;
    font-size: 24px;
    font-weight: 600;
  }

  & > p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  & > ul {
    svg {
      fill: ${({ theme })=>theme.mute};
      margin-right: 8px;
    }

    li {
      height: 25px;
      ${flex('center')}
    }

    a, span {
      font-size: 14px;
    }

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: ${({ theme })=>theme.blue};
      }
    }
  }

  @media ${device.tablet} {
    & > span {
      padding: 16px 0;
    }
    
    & > p {
      margin-bottom: 16px;
    }
  }
`;
