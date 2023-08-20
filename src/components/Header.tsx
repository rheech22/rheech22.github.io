import { Link } from 'gatsby';
import { useState } from 'react';
import { css, styled } from 'styled-components';

import config from '../../blog-config';
import Moon from '../assets/icons/Moon';
import Sun from '../assets/icons/Sun';
import { useContext, useDispatch } from '../store/context';
import { device } from '../styles/breakpoints';
import { sunrise, sunset } from '../styles/keyframes';
import { flex, font_sora } from '../styles/mixins';
import { blue, gray, yellow } from '../styles/themes';
import { getTheme } from '../utils';
import SearchBar from './SearchBar';

const Header = () => {
  const dispatch = useDispatch();

  const { displayMode } = useContext();

  const [searchKeyword, setSearchKeyword] = useState('');

  const handleClick = () =>
    dispatch({ type: 'setDisplayMode', payload: { displayMode: getTheme(displayMode) } });

  const handleChange = (value: string) => {
    if (value.length > 40) return;

    setSearchKeyword(value);
  };

  return (
    <Container>
      <Link to="/" tabIndex={-1}>
        <h1>{config.title}</h1>
      </Link>
      <Button onClick={handleClick} tabIndex={-1} aria-label="switch display mode">
        <CircleLayout>
          <div>
            <Moon />
          </div>
          <div>
            <Sun />
          </div>
        </CircleLayout>
      </Button>
      <SearchBar searchKeyword={searchKeyword} onChange={handleChange} />
      <Index>
        <Link
          to="/wikis"
          tabIndex={-1}
          activeStyle={{
            color: `${displayMode === 'day' ? blue : yellow}`,
            PointerEvent: 'none',
            cursor: 'default '
          }}>
          <h2>Index.</h2>
        </Link>
      </Index>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  ${flex({ alignItems: 'center' })}
  width: 100%;
  min-height: 71px;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.headerBg};
  backdrop-filter: blur(20px);
  z-index: 1;
  transition: all 0.5s;

  & > a {
    ${font_sora()};
    display: none;
    color: ${({ theme }) => theme.title};
    text-decoration: none;
    transition: color 2s;

    @media ${device.widerThanTablet} {
      display: block;
    }

    & > h1 {
      font-size: 24px;
      font-weight: 600;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 0;
  margin: 0 8px 0 4px;
  border: none;
  border-radius: 50%;
  background: none;
  min-width: 38px;
  min-height: 38px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 2s;

  @media (hover: hover) {
    &:hover {
      box-shadow:
        rgb(109, 110, 129) 1.5px 1.5px 3px 0px inset,
        rgba(109, 110, 129, 0.5) -1.5px -1.5px 3px 1px inset;

      background-image: linear-gradient(
        to right bottom,
        #000000,
        #211e1f,
        #3b353b,
        #55505a,
        #6d6c7b,
        #6d6e81,
        #6b7187,
        #69748d,
        #535c78,
        #3e4563,
        #2b304e,
        #181b3a
      );
    }
  }
`;

const CircleLayout = styled.div`
  position: absolute;
  top: 19px;
  right: -32px;
  border: 1px dotted transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  transition: border-color 2s;

  @media (hover: hover) {
    &:hover {
      border-color: ${gray};

      svg {
        path {
          fill: ivory;
        }
      }
    }
  }

  & > div {
    position: absolute;
    top: 40px;
    right: 40px;
    border-radius: 50%;
    border: none;
    padding: 0;
    width: 20px;
    height: 20px;
    background: none;
    outline: none;

    &:first-of-type {
      animation: ${({ theme: { name } }) =>
        name === 'dark'
          ? css`
              ${sunrise} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards
            `
          : css`
              ${sunset} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards
            `};
    }

    &:last-of-type {
      animation: ${({ theme: { name } }) =>
        name === 'dark'
          ? css`
              ${sunset} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards
            `
          : css`
              ${sunrise} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards
            `};
    }

    svg {
      width: 20px;
      height: 20px;
      transform: ${({ theme }) => (theme.name === 'dark' ? 'rotate(90deg)' : 'rotate(-90deg)')};

      path {
        fill: ${({ theme }) => theme.mode};
      }
    }
  }
`;

const Index = styled.div`
  ${font_sora()};
  margin-left: auto;
  font-weight: 500;

  & > a {
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.link};
    }
  }
`;
