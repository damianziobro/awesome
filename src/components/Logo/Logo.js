import React from 'react';

import logo from '../../assets/logo_awesome.svg';

import './Logo.sass';

function Logo() {
    return (
        <div className="logo">
            <h1 className="logo__text">Awesome</h1>
            <img className="logo__img" src={logo} />
        </div>
    );
};

export default Logo;