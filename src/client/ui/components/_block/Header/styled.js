import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from 'client/style/constants';

export const HeaderWrapper = styled.header`
  background-color: #FFFFFF;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.span`
  margin-left: 20px;
`;

export const CheckBox = styled.input`
  display: none;

  &:checked ~ .menu-hamburger > span {
    background: transparent;

    &::before {
      top: 0;
      transform: rotate(-45deg);
    }

    &::after {
      top: 0;
      transform: rotate(45deg);
    }
  }

  &:checked ~ .menu-nav > ul {
    transform: translateX(-250px);
  }
`;

export const Hamburger = styled.label`
  display: block;
  margin-left: auto;
  margin-right: 20px;

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

export const Icon = styled.span`
  background: #333333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;

  &::before,
  &::after {
    background: #333333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  &::before {
    top: 5px;
  }

  &::after {
    top: -5px;
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

export const LinkStyled = styled(Link)`
  color: #000000;
  text-decoration: unset;
`;

export const NavWrapper = styled.div`
  height: 80px;
  margin-left: 0;
  position: relative;

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    margin-left: auto;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const List = styled.ul`
  display: absolute;
  color: #000000;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 82px;
  position: fixed;
  right: -250px;
  width: 250px;
  transition: transform 250ms ease-in-out;
  background-color: #FFFFFF;

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: flex;
    flex-direction: row;
    position: relative;
    right: 0;
    margin-top: 0;
    width: unset;
  }
`;

export const Item = styled.li`
  margin-bottom: 20px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    margin: 0;
    padding: 0;
    height: auto;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
