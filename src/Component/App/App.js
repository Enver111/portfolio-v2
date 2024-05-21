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
import { useMediaQuery } from 'react-responsive';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const mobileVersion = useMediaQuery({
    query: ' (max-width: 767px)',
  });
  const tabletVersion = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });
  const desktopVersion = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1200px)',
  });
  const desktopVersionMax = useMediaQuery({
    query: '(min-width: 1201px)',
  });

  function HomePage() {
    return (
      <>
        <Main
          darkTheme={darkTheme}
          mobileVersion={mobileVersion}
          tabletVersion={tabletVersion}
          desktopVersion={desktopVersion}
          desktopVersionMax={desktopVersionMax}
        />
        <Stack
          darkTheme={darkTheme}
          mobileVersion={mobileVersion}
          tabletVersion={tabletVersion}
          desktopVersion={desktopVersion}
          desktopVersionMax={desktopVersionMax}
        />
        <Projects
          darkTheme={darkTheme}
          mobileVersion={mobileVersion}
          tabletVersion={tabletVersion}
          desktopVersion={desktopVersion}
          desktopVersionMax={desktopVersionMax}
        />
        <Footer
          darkTheme={darkTheme}
          mobileVersion={mobileVersion}
          tabletVersion={tabletVersion}
          desktopVersion={desktopVersion}
          desktopVersionMax={desktopVersionMax}
        />
      </>
    );
  }
  return (
    <Router>
      <div id='section1' className={darkTheme ? s.app_dark : s.app}>
        <div className={s.container}>
          <I18nextProvider i18n={i18n}>
            <Header
              darkTheme={darkTheme}
              toggleTheme={toggleTheme}
              mobileVersion={mobileVersion}
              tabletVersion={tabletVersion}
              desktopVersion={desktopVersion}
              desktopVersionMax={desktopVersionMax}
            />
            <Scroll />
            <Routes>
              <Route
                path='/001'
                element={
                  <HomePage
                    darkTheme={darkTheme}
                    mobileVersion={mobileVersion}
                    tabletVersion={tabletVersion}
                    desktopVersion={desktopVersion}
                    desktopVersionMax={desktopVersionMax}
                  />
                }
              />
              <Route
                path='/001/about'
                element={
                  <AboutMe
                    darkTheme={darkTheme}
                    mobileVersion={mobileVersion}
                    tabletVersion={tabletVersion}
                    desktopVersion={desktopVersion}
                    desktopVersionMax={desktopVersionMax}
                  />
                }
              />
              <Route
                path='/001/tech-stack'
                element={
                  <Stack
                    darkTheme={darkTheme}
                    mobileVersion={mobileVersion}
                    tabletVersion={tabletVersion}
                    desktopVersion={desktopVersion}
                    desktopVersionMax={desktopVersionMax}
                  />
                }
              />
              <Route
                path='/001/projects'
                element={
                  <Projects
                    darkTheme={darkTheme}
                    mobileVersion={mobileVersion}
                    tabletVersion={tabletVersion}
                    desktopVersion={desktopVersion}
                    desktopVersionMax={desktopVersionMax}
                  />
                }
              />
              <Route
                path='/001/contacts'
                element={
                  <Contact
                    darkTheme={darkTheme}
                    mobileVersion={mobileVersion}
                    tabletVersion={tabletVersion}
                    desktopVersion={desktopVersion}
                    desktopVersionMax={desktopVersionMax}
                  />
                }
              />
            </Routes>
          </I18nextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
