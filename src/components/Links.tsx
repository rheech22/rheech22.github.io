import styled from 'styled-components';
import { flex } from '../styles/mixins';

import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';
import Personal from '../assets/icons/LinkBig';
import Email from '../assets/icons/MailBig';
import LinkedIn from '../assets/icons/LinkedIn';
import Instagram from '../assets/icons/Instagram';

import config from '../../blog-config';


const Links = () => {
  const { github, twitter, instagram, linkedIn, email, personal } = config;

  const LINKS = [
    {
      url: linkedIn,
      icon: <LinkedIn />,
    },
    {
      url: instagram,
      icon: <Instagram />,
    },
    {
      url: github,
      icon: <Github />,
    },
    {
      url: twitter,
      icon: <Twitter />,
    },
    {
      url: email,
      icon: <Email />,
    },
    {
      url: personal,
      icon: <Personal />,
    },
  ];

  return (
    <Container>
      {
        LINKS.map(({ url, icon })=> {
          if (!url) return null;

          return (
            <li><a href={url === email ? `mailto:${url}` : url}>{icon}</a></li>
          );
        })
      }
    </Container>
  );
};

export default Links;

const Container = styled.ul`
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
