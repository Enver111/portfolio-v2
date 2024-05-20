import React from 'react';
import { useTranslation } from 'react-i18next';
import MainPhoto from '../../Lib/Img/mainPhoto.png';
import s from './Main.module.css';

export default function Main({
  mobileVersion,
  tabletVersion,
  desktopVersion,
  desktopVersionMax,
}) {
  const { t } = useTranslation();
  return (
    <>
      {desktopVersionMax && (
        <aside className={s.main}>
          <div className={s.about}>
            {t('Hi')} 👋, <br /> {t('My name is')} <br />{' '}
            <span>{t('Enver Osmanov')}</span>
            <br /> {t('I m a Frontend Developer')}
          </div>
          <div className={s.mainPhoto}>
            <img className={s.mainPhoto_icon} src={MainPhoto} alt='avatar' />
          </div>
        </aside>
      )}
      {desktopVersion && (
        <aside className={`${s.main} ${s.main_desctop}`}>
          <div className={s.about}>
            {t('Hi')} 👋, <br /> {t('My name is')} <br />{' '}
            <span>{t('Enver Osmanov')}</span>
            <br /> {t('I m a Frontend Developer')}
          </div>
          <div className={s.mainPhoto}>
            <img className={s.mainPhoto_icon} src={MainPhoto} alt='avatar' />
          </div>
        </aside>
      )}
      {tabletVersion && (
        <aside className={`${s.main} ${s.main_desctop}`}>
          <div className={`${s.about} ${s.about_tablet}`}>
            {t('Hi')} 👋, <br /> {t('My name is')} <br />{' '}
            <span>{t('Enver Osmanov')}</span>
            <br /> {t('I m a Frontend Developer')}
          </div>
          <div className={`${s.mainPhoto} ${s.mainPhoto_tablet}`}>
            <img
              className={`${s.mainPhoto_icon} ${s.mainPhoto_icon_tablet}`}
              src={MainPhoto}
              alt='avatar'
            />
          </div>
        </aside>
      )}
      {mobileVersion && (
        <aside className={`${s.main} ${s.main_desctop} ${s.main_mobile}`}>
          <div className={`${s.about} ${s.about_tablet} ${s.about_mobile}`}>
            {t('Hi')} 👋, <br /> {t('My name is')} <br />{' '}
            <span>{t('Enver Osmanov')}</span>
            <br /> {t('I m a Frontend Developer')}
          </div>
          <div className={`${s.mainPhoto} ${s.mainPhoto_tablet}`}>
            <img
              className={`${s.mainPhoto_icon} ${s.mainPhoto_icon_tablet}`}
              src={MainPhoto}
              alt='avatar'
            />
          </div>
        </aside>
      )}
    </>
  );
}
