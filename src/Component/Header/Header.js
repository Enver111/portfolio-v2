import React from 'react';
import Github from '../../Lib/Icon/contacts/github.svg';
import Twitter from '../../Lib/Icon/contacts/twitter.svg';
import Moon from '../../Lib/Icon/contacts/moon.svg';
import s from './Header.module.css';
import Logo from '../Logo/Logo';

export default function Header({ darkTheme, toggleTheme }) {
  const items = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Tech Stack' },
    { id: 4, name: 'Projects' },
    { id: 5, name: 'Contact' },
  ];

  return (
    <div className={darkTheme ? `${s.header} ${s.dark}` : s.header}>
      <Logo />
      <div className={s.heder_btns}>
        {items.map((item) => (
          <button className={s.btn} key={item.id}>
            {item.name}
          </button>
        ))}
      </div>
      <div className={s.contscts}>
        <div className={s.hover}>
          <a href='#github'>
            <img src={Github} alt='github' />
          </a>
        </div>
        <div className={s.hover}>
          <a href='#twitter'>
            <img src={Twitter} alt='twitter' />
          </a>
        </div>
        <div className={s.hover}>
          <button onClick={toggleTheme} className={s.theme}>
            <img src={Moon} alt='moon' />
          </button>
        </div>
      </div>
    </div>
  );
}
