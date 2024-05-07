import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import MainPhoto from '../../Lib/Img/mainPhoto.png';
import s from './Main.module.css';

export default function Main() {
  const { t } = useTranslation();
  const avatarRef = useRef();
  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      avatarRef.current.getBoundingClientRect();
    const x = (event.pageX - left) / width - 0.5;
    const y = (event.pageY - top) / height - 0.5;
    avatarRef.current.style.transform = `rotateX(${y * 30}deg) rotateY(${
      x * 30
    }deg)`;
  };
  const handleMouseLeave = () => {
    avatarRef.current.style.transform = '';
  };
  return (
    <aside className={s.main}>
      <div className={s.about}>
        {t('Hi')} 👋, <br /> {t('My name is')} <br />{' '}
        <span>{t('Enver Osmanov')}</span>
        <br /> {t('I m a Frontend Developer')}
      </div>
      <div
        ref={avatarRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={s.mainPhoto}
      >
        <img src={MainPhoto} alt='MainPhoto' />
      </div>
    </aside>
  );
}
