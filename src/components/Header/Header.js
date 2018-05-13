import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './Header.sass';

function Header() {
	return (
		<header className="header">
			<Logo />
			<Nav />
		</header>
	);
}

export default Header;
