import styled from 'styled-components';
import { flex } from '../styles/mixins';
import { device } from '../styles/breakpoints';

import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';
import Clip from '../assets/icons/Clip';
import LinkedIn from '../assets/icons/LinkedIn';
import Instagram from '../assets/icons/Instagram';
import Email from '../assets/icons/Email';
import Resume from '../assets/icons/Resume';

import config from '../../blog-config';

const Socials = () => {
  const { github, twitter, instagram, linkedIn, email, resume } = config;

  const LINKS = [
    {
      url: linkedIn,
      icon: <LinkedIn />,
    },
    {
      url: twitter,
      icon: <Twitter />,
    },
    {
      url: github,
      icon: <Github />,
    },
    {
      url: instagram,
      icon: <Instagram />,
    },
    {
      url: email,
      icon: <Email />,
    },
    {
      url: resume,
      icon: <Resume />,
    },
  ];

  return (
    <Container>
      <div>
        <Clip />
      </div>
      <ul>
        {
          LINKS.map(({ url, icon }, i)=> {
            if (!url) return null;

            return (
              <li key={i}>
                <a href={url === email ? `mailto:${url}` : url}>{icon}</a>
              </li>
            );
          })
        }
      </ul>
    </Container>
  );
};

export default Socials;

const Container = styled.div`
  ${flex({ alignItems: 'center' })};
  position: absolute;
  left: 98px;
  bottom: 10px;
  width: 40px;
  min-height: 40px;
  background-color: ${({ theme }) => theme.bg };
  border-radius: 19px;
  border: ${({ theme }) => `1px solid ${theme.border}`};
  overflow: hidden;
  transition: background-color .5s, border-color .5s;

  @media ${device.widerThanLaptopS} {
    left: 128px;
  }

  &:hover {
    width: fit-content;
  }

  & > div {
    ${flex({ alignItems: 'center', justifyContent: 'center' })};
    min-width: 38px;
    min-height: 38px;
    cursor: pointer;
  }

  & > ul {
    ${flex({ alignItems: 'center' })};
    height: 100%;
    width: fit-content;
    
    & > li {
      width: 38px;

      & > a {
        ${flex({ alignItems: 'center', justifyContent: 'center' })};
      }
    }
  }

  svg {
    height: 20px;
    width: 20px;
    path {
      fill: ${({ theme })=> theme.mute};
      transition: all .5s;
    }
  }

  @media (hover: hover) {
    &:hover {
      path {
        fill: ${({ theme })=> theme.default};
      }
    }
  }
`;
