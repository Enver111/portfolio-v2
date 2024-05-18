import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Moon from '../../Lib/Icon/contacts/moon.svg';
import Sun from '../../Lib/Icon/contacts/sun.svg';
import Logo from '../Logo/Logo';
import Lang from '../Lang/Lang';
import s from './Header.module.css';
import Contacts from '../Contacts/Contacts';
import Buttons from '../Buttons/Buttons';
import { useMediaQuery } from 'react-responsive';

export default function Header({
  darkTheme,
  toggleTheme,
  mobileVersion,
  tabletVersion,
  desktopVersion,
  desktopVersionMax,
}) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  /// мобила от 320px до 576px
  // планшеты от 992px до 768px
  // компы от 1200px до 1024px

  return (
    <>
      {desktopVersionMax && (
        <header
          className={`${
            darkTheme && scrolledDarck
              ? ` ${s.dark} ${s.scrolledDarck}`
              : s.header
          } ${s.header} ${scrolled}`}
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
      )}
      {desktopVersion && (
        <header
          className={`${
            darkTheme && scrolledDarck
              ? `${s.header}  ${s.dark} ${s.scrolledDarck}`
              : s.header
          } ${s.header_desktop} ${scrolled}`}
        >
          <Logo />
          <Buttons darkTheme={darkTheme} />
          <div className={`${s.contscts} ${s.contscts_desktop}`}>
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
      )}
      {tabletVersion && (
        <header
          className={`${
            darkTheme && scrolledDarck
              ? `${s.header}  ${s.dark} ${s.scrolledDarck}`
              : s.header
          } ${s.header_desktop} ${scrolled}`}
        >
          <button
            className={`${s.hamburger} ${isOpen ? s.hamb_open : ''} ${
              darkTheme ? s.hamb_open_dark : ''
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className={` ${s.buttonsBlock} ${
              darkTheme ? ` ${s.buttonsTablet_dark}` : ''
            } ${isOpen ? s.open : ''}`}
          >
            <Buttons darkTheme={darkTheme} tabletVersion={tabletVersion} />
          </div>
          <Logo />
          <div className={`${s.contscts} ${s.contscts_desktop}`}>
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
      )}
      {mobileVersion && (
        <header
          className={`${
            darkTheme && scrolledDarck
              ? `${s.header}  ${s.dark} ${s.scrolledDarck}`
              : s.header
          } ${s.header_mobile} ${scrolled}`}
        >
          <Logo />

          <div className={s.btns_menu}>
            <div className={s.header_btn_mob}>
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
            <button
              className={`${s.hamburger} ${isOpen ? s.hamb_open : ''} ${
                darkTheme ? s.hamb_open_dark : ''
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className={` ${s.buttonsBlock} ${s.buttonsBlockMobile} ${
                darkTheme ? s.buttonsTablet_dark : ''
              } ${isOpen ? s.open_mob : ''}`}
            >
              <Buttons darkTheme={darkTheme} mobileVersion={mobileVersion} />
              <Contacts darkTheme={darkTheme} mobileVersion={mobileVersion} />
            </div>
          </div>
        </header>
      )}
    </>
  );
}
