import React from 'react';

import closeMenu from '../../assets/close_menu.svg';
import openMenu from '../../assets/open_menu.svg';

import './NavBtn.sass';

function NavBtn({ isNavOpen, onNavBtnClick }) {
    return (
        <button className="nav-btn" type="button" onClick={onNavBtnClick}>
            <img className={isNavOpen ? "nav-btn__img nav-btn__img--hidden" : "nav-btn__img"} src={openMenu} />
            <img className={isNavOpen ? "nav-btn__img" : "nav-btn__img nav-btn__img--hidden"} src={closeMenu} />

        </button>
    );
}

export default NavBtn;