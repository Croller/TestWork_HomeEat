import React, { memo } from 'react';
import {
  HeaderWrapper,
  Logo,
  CheckBox,
  Hamburger,
  Icon,
  NavWrapper,
  LinkStyled,
  List,
  Item,
} from './styled';

const LINK_LIST = [
  {
    key: 'work',
    name: 'Work',
  },
  {
    key: 'about',
    name: 'About',
  },
  {
    key: 'search',
    name: 'Search',
  },
];

export const Header = memo(() => (
  <HeaderWrapper>
    <Logo>
      <LinkStyled to="/">Logo</LinkStyled>
    </Logo>
    <CheckBox
      type="checkbox"
      id="menu-btn"
    />
    <Hamburger
      className="menu-hamburger"
      htmlFor="menu-btn"
    >
      <Icon />
    </Hamburger>
    <NavWrapper className="menu-nav">
      <List>
        {LINK_LIST.map(({ key, name }) => (
          <Item key={key}>
            <LinkStyled to={`/${key}`}>
              {name}
            </LinkStyled>
          </Item>
        ))}
      </List>
    </NavWrapper>
  </HeaderWrapper>
));
