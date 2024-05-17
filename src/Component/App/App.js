import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import s from './App.module.css';
import Main from '../Main/Main';
import Stack from '../Stack/Stack';
import Projects from '../Projects/Projects';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../Lib/lang/i18n';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Scroll from '../Scroll/Scroll';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  function HomePage() {
    return (
      <>
        <Main darkTheme={darkTheme} />
        <Stack darkTheme={darkTheme} />
        <Projects darkTheme={darkTheme} />
        <Footer darkTheme={darkTheme} />
      </>
    );
  }
  return (
    <Router>
      <div id='section1' className={darkTheme ? s.app_dark : s.app}>
        <div className={s.container}>
          <I18nextProvider i18n={i18n}>
            <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <Scroll />
            <Routes>
              <Route
                path='/about'
                element={<AboutMe darkTheme={darkTheme} />}
              />
              <Route path='/' element={<HomePage darkTheme={darkTheme} />} />
              <Route
                path='/tech-stack'
                element={<Stack darkTheme={darkTheme} />}
              />
              <Route
                path='/projects'
                element={<Projects darkTheme={darkTheme} />}
              />
              <Route
                path='/contacts'
                element={<Contact darkTheme={darkTheme} />}
              />
            </Routes>
          </I18nextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
