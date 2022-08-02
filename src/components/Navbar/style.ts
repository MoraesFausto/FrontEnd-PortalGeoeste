import styled, { css } from 'styled-components';


import {
  secondaryBackground,
  tertiaryColor,
} from '../../styles/palets';

interface IPropsItemMenu {
  active?: boolean;
}

export const Nav = styled.nav`
  background-color: rgb(8, 165, 238);
  padding: 10px;
  margin-top: 0px;
  -webkit-box-shadow: 0px 10px 14px -15px rgba(138, 138, 138, 1);
  -moz-box-shadow: 0px 10px 14px -15px rgba(138, 138, 138, 1);
  box-shadow: 0px 10px 14px -15px rgba(138, 138, 138, 1);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20000; 
  &:after {
    content: '';
    border-radius: 0;
  }
  font-size: 18px;
  ul {
    max-width: 1200px;
    padding: 0;
    margin: 0 auto;

    list-style: none;
    display: flex;
    justify-content: space-around;
    text-align:center;
  }
`;

export const NavItem = styled.li<IPropsItemMenu>`
  padding: 10px;
  border-radius: 30px;
  transition: 0.3s all;
  a {
    color: white;
    text-decoration: none;

  }
  &:hover {
    background-color: ${tertiaryColor};
    color: #fff;
    > a {
      color: rgb(8,165,238);
    }
    ul {
      display: block;
      margin-left: -70px;
    }
  }
  .DropDraw {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background:  rgb(8, 165, 238);
    border-radius: 30px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.065), inset 0 -1px 0 0 #fff,
      inset 0 0 0 1px rgba(229, 229, 229, 0.5);
    padding: 8px;
    width: 200px;
    margin-top: 10px;
    display: none;
    position: absolute;
    z-index: 1;
  }
  .lastDropDraw {
    display: flex;
    align-items: flex-start;
    background: ${secondaryBackground};
    border-radius: 8px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.065), inset 0 -1px 0 0 #fff,
      inset 0 0 0 1px rgba(229, 229, 229, 0.5);
    padding: 8px;
    width: 200px;
    margin-top: 12px;
    display: none;
    position: absolute;
    z-index: 1;
    left: 0;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${tertiaryColor};
      > a {
        color:  rgb(8, 165, 238);
      }
    `}
`;