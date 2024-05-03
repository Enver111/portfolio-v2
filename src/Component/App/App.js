import React, { useState } from 'react';
import Header from '../Header/Header';
import s from './App.module.css';
import Main from '../Main/Main';
import Stack from '../Stack/Stack';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? s.app_dark : s.app}>
      <div className={s.container}>
        <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
        <Main />
        <Stack />
      </div>
    </div>
  );
}

export default App;
