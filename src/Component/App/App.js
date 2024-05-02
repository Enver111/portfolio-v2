import React, { useState } from 'react';
import Header from '../Header/Header';
import s from './App.module.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? s.app_dark : s.app}>
      <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
