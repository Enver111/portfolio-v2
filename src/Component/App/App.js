import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Header from '../Header/Header';
import s from './App.module.css';
import Main from '../Main/Main';
import Stack from '../Stack/Stack';
import Projects from '../Projects/Projects';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../Lib/lang/i18n';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Link to='section1' spy={true} smooth={true} offset={-70} duration={500}>
      <div id='section1' className={darkTheme ? s.app_dark : s.app}>
        <div className={s.container}>
          <I18nextProvider i18n={i18n}>
            <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <Main />
            <Stack />
            <Projects />
          </I18nextProvider>
        </div>
      </div>
    </Link>
  );
}

export default App;
