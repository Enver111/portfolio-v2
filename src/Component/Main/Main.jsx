import React from 'react';
import { useTranslation } from 'react-i18next';
import MainPhoto from '../../Lib/Img/mainPhoto.png';
import s from './Main.module.css';

export default function Main() {
  const { t } = useTranslation();
  return (
    <aside className={s.main}>
      <div className={s.about}>
        {t('Hi')} 👋, <br /> {t('My name is')} <br />{' '}
        <span>{t('Enver Osmanov')}</span>
        <br /> {t('I m a Frontend Developer')}
      </div>
      <div className={s.mainPhoto}>
        <img src={MainPhoto} alt='avatar' />
      </div>
    </aside>
  );
}
