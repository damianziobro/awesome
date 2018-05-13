import React from 'react';
import Link from 'gatsby-link';

import './Nav.sass';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className="nav__link" to="/">
                        Features
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/">
                        Case Studies
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/">
                        About
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link nav__link--border" to="/">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;