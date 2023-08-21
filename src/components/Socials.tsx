import styled from 'styled-components';

import config from '../../blog-config';
import Clip from '../assets/icons/Clip';
import Email from '../assets/icons/Email';
import Github from '../assets/icons/Github';
import Instagram from '../assets/icons/Instagram';
import LinkedIn from '../assets/icons/LinkedIn';
import Resume from '../assets/icons/Resume';
import Twitter from '../assets/icons/Twitter';
import { device } from '../styles/breakpoints';
import { flex } from '../styles/mixins';

const Socials = () => {
  const { github, twitter, instagram, linkedIn, email, resume } = config;

  const LINKS = [
    {
      label: 'link to LinkedIn',
      url: linkedIn,
      icon: <LinkedIn />
    },
    {
      label: 'link to Twitter',
      url: twitter,
      icon: <Twitter />
    },
    {
      label: 'link to GitHub',
      url: github,
      icon: <Github />
    },
    {
      label: 'link to Instagram',
      url: instagram,
      icon: <Instagram />
    },
    {
      label: 'send to Email',
      url: email,
      icon: <Email />
    },
    {
      label: 'link to resume',
      url: resume,
      icon: <Resume />
    }
  ];

  return (
    <Container>
      <div>
        <Clip />
      </div>
      <ul>
        {LINKS.map(({ url, icon, label }, i) => {
          if (!url) return null;

          return (
            <li key={i}>
              <a href={url === email ? `mailto:${url}` : url} aria-label={label}>
                {icon}
              </a>
            </li>
          );
        })}
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
  border: ${({ theme }) => `1px solid ${theme.border}`};
  border-radius: 19px;
  width: 40px;
  min-height: 40px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg};
  transition:
    background-color 0.5s,
    border-color 0.5s;

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
      fill: ${({ theme }) => theme.mute};
      transition: all 0.5s;
    }
  }

  @media (hover: hover) {
    svg {
      &:hover {
        path {
          fill: ${({ theme }) => theme.default};
        }
      }
    }
  }
`;
