import { Link } from 'gatsby';

import { useState } from 'react';
import { useContext, useDispatch } from '../store/context';

import styled from 'styled-components';
import { flex } from '../styles/mixins';
import { device } from '../styles/breakpoints';
import { headerBg, headerLogo } from '../styles/themes';

import config from '../../blog-config';
import { getTheme } from '../utils';

import SearchBar from './SearchBar';
import Button from './Button';

const Header = () => {
  const dispatch = useDispatch();

  const { displayMode } = useContext();

  const [ searchKeyword, setSearchKeyword ] = useState('');

  const handleClick = () => dispatch({ type: 'setDisplayMode', payload: { displayMode: getTheme(displayMode) } });

  const handleChange = (value: string) => {
    if (value.length > 40) return;

    setSearchKeyword(value);
  };

  return (
    <Container>
      <Link to="/">
        <h1>{config.title}</h1>
      </Link>
      <SearchBar
        searchKeyword={searchKeyword}
        onChange={handleChange}
      />
      <Button onClick={handleClick} accessibleName="Change Display Mode"/>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  ${flex({ alignItems: 'center' })}
  padding: 8px 16px;
  min-width: 360px;
  width: 100%;
  height: 62px;
  background-color: ${headerBg};
  
  @media ${device.widerThanLaptop} {
    padding: 16px 32px;
  }

  & > a {
    margin-right: 16px;
    color: ${headerLogo};
    text-decoration: none;

    & > h1 {
      font-size: 24px;
      font-weight: 600;
      white-space: nowrap;
    }
  }

  & > button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    outline: none;
    
    &:nth-of-type(1) {
      background-image: linear-gradient(to right, #fceabb 0%, black 100%);
      background-position: ${({ theme }) => theme.themeIconPosition};
      background-size: 200% auto;
      box-shadow: 0px 0px 15px #eee;
      border-radius: 50%;
      transition: 1.5s;
  
      &:hover { 
        box-shadow: 0px 0px 27px #fff;
      }
    }

    &:last-of-type {
      @media ${device.widerThanMobile} {
        margin-left: auto;
      }
      
      margin-left: 5vw;
      color: #eee;
      opacity: 0.7;
      min-width: 36px;
      width: 36px;
      height: 36px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
