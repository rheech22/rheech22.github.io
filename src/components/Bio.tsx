import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { flex } from "../styles/mixins";

import Location from "../assets/icons/Location";
import Link from "../assets/icons/Link";
import Mail from "../assets/icons/Mail";

const Bio = () => {
  return (
    <Container>
      <Avatar>
        <img alt='avatar' src="https://user-images.githubusercontent.com/57756798/186722103-fab30337-6059-4a92-ad19-2b4f5a2fea9f.jpeg"/>
      </Avatar>
      <Profile>
        <span>Aiden</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul>
          <li>
            <Location />
            <span>Bundang</span>
          </li>
          <li>
            <Mail />
            <a href="rheech22@gmail.com">rheech22@gmail.com</a>
          </li>
          <li>
            <Link/>
            <a href="https://github.com/rheech22">https://github.com/rheech22</a>
          </li>
        </ul>
      </Profile>
    </Container>
  );
};

export default Bio;

const Container = styled.div`
  ${flex('center', 'center', 'row')}
  padding: 0 40px;
  width: 100%;
  height: fit-content;
  margin-bottom: 8px;
  
  @media ${device.tablet} {
    flex-direction: column;
    margin-bottom: 18px;
    padding: 0;
    max-width: 296px;
  }
`;

const Avatar = styled.div`
  ${flex('center', 'center', 'row')};
  margin-right: 12px;
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
    width: 100%;
    min-height: 168px;
    
    & > img {
      width: 168px;
      height: 168px;
    }
  }
`;

const Profile = styled.div`
  width: fit-content;

  & > span{
    display: block;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    
    @media ${device.tablet} {
      font-size: 20px;
    }
  }

  & > p {
    margin-bottom: 8px;
    width: 100%;
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 14px;
    }
  }

  & > ul {
    svg {
      margin-right: 8px;
      fill: ${({ theme })=>theme.mute};
    }

    li {
      ${flex('center')}
      height: 24px;
    }

    a, span {
      font-size: 12px;
    }

    a {
      text-decoration: none;

      &:hover {
        color: ${({ theme })=>theme.blue};
        text-decoration: underline;
      }
    }

    @media ${device.tablet} {
      a, span {
        font-size: 12px;
      }
    }
  }

  @media ${device.tablet} {
    & > p {
      margin-bottom: 16px;
    }
  }
`;
