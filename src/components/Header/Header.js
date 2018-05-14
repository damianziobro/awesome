import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavBtn from '../NavBtn/NavBtn';

import './Header.sass';

function Header({ isNavOpen, onNavBtnClick }) {
	return (
		<header className={isNavOpen ? 'header header--nav-open' : 'header'}>
			<Logo />
			<NavBtn isNavOpen={isNavOpen} onNavBtnClick={onNavBtnClick} />
			<Nav isNavOpen={isNavOpen} onNavBtnClick={onNavBtnClick} />
		</header>
	);
}

export default Header;
