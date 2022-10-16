import styled from 'styled-components';
import { flex } from '../styles/mixins';

import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';
import Personal from '../assets/icons/Personal';
import Email from '../assets/icons/Email';
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
      url: personal,
      icon: <Personal />,
    },
  ];

  return (
    <Container>
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

export default Links;

const Container = styled.div`
  & > ul {
    ${flex()};

    & > li + li {
      margin-left: 8px;
    }
    
    & > li {
      max-width: 100%;
      height: 20px;
  
      & > a {
        ${flex({ alignItems: 'center', justifyContent: 'center' })};
  
        & > svg {
          height: 20px;
          width: 20px;
          path {
            fill: ${({ theme })=> theme.mute};
          }
        }

        @media (hover: hover) {
          &:hover {
            path {
              fill: ${({ theme })=> theme.default};
            }
          }
        }
      }
    }
  }
`;
