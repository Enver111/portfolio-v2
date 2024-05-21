import React, { useState, useEffect } from 'react';
import Arrow from '../../Lib/Icon/up-arrow.svg';
import s from './Scroll.module.css';
/* import './ScrollToTop.css';  */ // Импортируйте свой CSS

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Прокрутить вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={s.scroll}>
      {isVisible && (
        <div className={s.icon} onClick={scrollToTop}>
          <img src={Arrow} alt='arrow' />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
