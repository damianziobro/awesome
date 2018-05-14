import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavBtn from '../NavBtn/NavBtn';

import './Header.sass';

function Header({ isNavOpen, onToggleNav, onCloseNav }) {
  return (
    <header className={isNavOpen ? 'header header--nav-open' : 'header'}>
      <Logo />
      <NavBtn isNavOpen={isNavOpen} onToggleNav={onToggleNav} />
      <Nav isNavOpen={isNavOpen} onCloseNav={onCloseNav} />
    </header>
  );
}

export default Header;
