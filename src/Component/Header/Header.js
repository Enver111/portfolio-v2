import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Github from '../../Lib/Icon/contacts/github.svg';
import Twitter from '../../Lib/Icon/contacts/twitter.svg';
import Moon from '../../Lib/Icon/contacts/moon.svg';
import Sun from '../../Lib/Icon/contacts/sun.svg';
import Logo from '../Logo/Logo';
import Lang from '../Lang/Lang';
import s from './Header.module.css';

export default function Header({ darkTheme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
  const items = [
    { id: 1, name: t('Home') },
    { id: 2, name: t('About') },
    { id: 3, name: t('Tech Stack') },
    { id: 4, name: t('Projects') },
    { id: 5, name: t('Contact') },
  ];
  return (
    <header className={darkTheme ? `${s.header} ${s.dark}` : s.header}>
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
            {darkTheme ? (
              <img src={Sun} alt='Sun' />
            ) : (
              <img src={Moon} alt='moon' />
            )}
          </button>
        </div>
        <Lang />
      </div>
    </header>
  );
}
