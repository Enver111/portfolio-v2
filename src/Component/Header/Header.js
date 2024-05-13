import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Moon from '../../Lib/Icon/contacts/moon.svg';
import Sun from '../../Lib/Icon/contacts/sun.svg';
import Logo from '../Logo/Logo';
import Lang from '../Lang/Lang';
import s from './Header.module.css';
import Contacts from '../Contacts/Contacts';
import Buttons from '../Buttons/Buttons';

export default function Header({ darkTheme, toggleTheme }) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrolled = scrollPosition > 50 ? s.scrolled : '';
  const scrolledDarck = scrollPosition > 50 ? s.scrolledDarck : '';

  return (
    <header
      className={`${
        darkTheme && scrolledDarck
          ? `${s.header} ${s.dark} ${s.scrolledDarck}`
          : s.header
      } ${scrolled}`}
    >
      <Logo />
      <Buttons darkTheme={darkTheme} />
      <div className={s.contscts}>
        <Contacts darkTheme={darkTheme} />
        <div className={`${s.hover} ${darkTheme ? s.darkIcon : ''}`}>
          <button onClick={toggleTheme} className={s.theme}>
            {darkTheme ? (
              <img src={Sun} alt='Sun' />
            ) : (
              <img src={Moon} alt='moon' />
            )}
          </button>
        </div>
        <Lang darkTheme={darkTheme} />
      </div>
    </header>
  );
}
