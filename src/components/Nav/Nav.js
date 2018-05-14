import React from 'react';
import Link from 'gatsby-link';

import './Nav.sass';

function Nav({ isNavOpen, onCloseNav }) {
  return (
    <nav className={isNavOpen ? 'nav nav--open' : 'nav'}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/" onClick={onCloseNav}>
            Features
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/" onClick={onCloseNav}>
            Case Studies
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/" onClick={onCloseNav}>
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link nav__link--border"
            to="/"
            onClick={onCloseNav}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul
        className={
          isNavOpen
            ? 'nav-social-links'
            : 'nav-social-links nav-social-links--hidden'
        }
      >
        <li className="nav-social-links__item">
          <a
            href="https://www.facebook.com"
            className="nav-social-links__link"
            onClick={onCloseNav}
            target="_blank"
          >
            <img
              className="nav-social-links__img"
              src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSCDEcqUqaAAAAuElEQVQ4y+2RMQrCQBBF34qNmCJIesHGnEC8hGDpcXIPr5C9gJVtLmCdwt5UQUEYi+zKCrtrFlunWv7Mn/93PlJLStVKhKSapI3D9Ev/QcMNmLMlAyDq+CiFZcp5gGIE7UpZQuwPlRcN7u9Mfy2tC4cVDIEdy7SzZj/m4Eu64QA81RVAcnIALsxCwd1V62zs6EAWw/h4Syv78CkUsgd6dQKQkhLYvLvBHIwtqT7h5Cv9CeMIOmlevwD1aOO/mSfCrwAAAABJRU5ErkJggg"
            />
          </a>
        </li>
        <li className="nav-social-links__item">
          <a
            href="https://www.twitter.com"
            className="nav-social-links__link"
            onClick={onCloseNav}
            target="_blank"
          >
            <img
              className="nav-social-links__img"
              src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAQAAADr5dYVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSCTUC37/CAAABJUlEQVQoz42SsUtCURTGv2cWPrElaAsH3QJraCoQWoIakmhoUOfoP2gJgra2IIiguWiNsCGMSCgIoiFoaokmiTIcLAp6v4bS3rvvlu83nvt9h++ecySRkBWG2KEOvLDPsEQvRdKSOKBskY/wxC+vHNHkUBIOb8AqPQF5jFtMHlhhTfTxCcAFYz7DBDauGJDEdadQoYArSZQs8ur3m5gLlFvU2GLXYtiQpDj9ymlPxU6apPLKW8f23P5eg2jMS1LM8bStKHiqtSeSoBqh/7F/6imWqXcxzPgNGd67yE/MQ1j8V94kE76dKc5/dm7ywbT9OpOs44XkLQpBWQqXNLNsWvdxQ87sO8npH8nvWSJu5nAkiawWNK5RDcoVetSdLlXRmeOFg38BCMLoAm2YCvcAAAAASUVORK5CYII"
            />
          </a>
        </li>
        <li className="nav-social-links__item">
          <a
            href="https://plus.google.com"
            className="nav-social-links__link"
            onClick={onCloseNav}
            target="_blank"
          >
            <img
              className="nav-social-links__img"
              src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAQAAABtcaS7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQgSChUSnMzJAAABHUlEQVQoz42TMSxDURSGv1cVEWUwdSQGYZJ0JamkoSsxsZgkEquE1cDIIGKymMRktTGg0pXJILF0k1CSovkM76Xa1z780829/7l/7vnOhUgWPLGivnjpqt38Jgc8tVV3jiTbe7y2XVvJBXuRpeSiOWc9Vo8MkuzDfql6YKqxN2VXzDXohOPhclvV27glVrCsPgKkmAFgJ6jzLwW+kgH6gyqARTaaTp+DOXCNBbKMUuMGUPW9JfpHny1NUTVNlQy9ZsKEmMKLHrhoTiirOh8lZM2bN++Kqvftj05zTg7Y9CyoQ1ChEg4KAFedGjYUcThs4jBtTdViBw7gboP0kjkL7vuhajmBdsIsvTmWzLF9Wp+c/INg4z9ULbluX5LvG5CyIvpPf1M4AAAAAElFTkSuQmCC"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
