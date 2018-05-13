import React from 'react';

import logo from '../../assets/logo_awesome.svg';

import './Logo.sass';

function Logo() {
  return (
    <a href="/" className="logo">
      <h1 className="logo__text">Awesome</h1>
      <img className="logo__img" src={logo} />
    </a>
  );
}

export default Logo;
