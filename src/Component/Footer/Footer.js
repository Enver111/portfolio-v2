import { useTranslation } from 'react-i18next';
import Buttons from '../Buttons/Buttons';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

export default function Footer({
  darkTheme,
  mobileVersion,
  tabletVersion,
  desktopVersion,
  desktopVersionMax,
}) {
  const { t } = useTranslation();
  const contactNum = (
    <>
      <a className={s.footer_link} href='tel:+79780200852'>
        +7 (978) 020-08-52
      </a>
      <a className={s.footer_link} href='mailto:enver.erfanovich@gmail.com'>
        enver.erfanovich@gmail.com
      </a>
    </>
  );
  const Creators = (
    <>
      <p
        className={`${s.creators} ${desktopVersion ? s.creators_desctop : ''}`}
      >
        {t('Designed by')}{' '}
        <span className={s.cretors_name}>{t('Pavan MG')}</span> {t('built by')}{' '}
        <span className={s.cretors_name}>{t('Enver EO')}</span> {t('with')}{' '}
        <span className={s.cretors_name}>{t('Love')}</span> &{' '}
        <span className={s.cretors_name}>{t('Coffee')}</span>
      </p>
    </>
  );
  return (
    <>
      {desktopVersionMax && (
        <div className={s.footer}>
          <div className={s.footer_wrap}>
            <Logo />
            <div
              className={`${s.footer_contacts} ${
                darkTheme ? s.footer_contacts_dark : ''
              }`}
            >
              {contactNum}
              <Contacts darkTheme={darkTheme} />
            </div>
          </div>
          <div className={`${s.line} ${darkTheme ? s.darkLine : ''}`}></div>
          <div className={s.footer_foot}>
            <Buttons darkTheme={darkTheme} />
            {Creators}
          </div>
        </div>
      )}
      {desktopVersion && (
        <div className={`${s.footer} ${s.footer_desktop}`}>
          <div className={s.footer_wrap}>
            <Logo />
            <div
              className={`${s.footer_contacts} ${
                darkTheme ? s.footer_contacts_dark : ''
              }`}
            >
              {contactNum}
              <Contacts darkTheme={darkTheme} />
            </div>
          </div>
          <div className={`${s.line} ${darkTheme ? s.darkLine : ''}`}></div>
          <div className={`${s.footer_foot} ${s.footer_foot_desktop}`}>
            <Buttons darkTheme={darkTheme} />
            {Creators}
          </div>
        </div>
      )}
      {tabletVersion && (
        <div className={`${s.footer} ${s.footer_desktop}`}>
          <div className={s.footer_wrap}>
            <Logo />
            <div
              className={`${s.footer_contacts} ${
                darkTheme ? s.footer_contacts_dark : ''
              }`}
            >
              {contactNum}
              <Contacts darkTheme={darkTheme} />
            </div>
          </div>
          <div className={`${s.line} ${darkTheme ? s.darkLine : ''}`}></div>
          <div className={`${s.footer_foot} ${s.footer_foot_desktop}`}>
            <Buttons darkTheme={darkTheme} />
            {Creators}
          </div>
        </div>
      )}
      {mobileVersion && (
        <div className={`${s.footer} ${s.footer_desktop}`}>
          <div className={`${s.footer_wrap} ${s.footer_wrap_mobile}`}>
            <Logo />
            <div
              className={`${s.footer_contacts} ${s.footer_contacts_mobile} ${
                darkTheme ? s.footer_contacts_dark : ''
              }`}
            >
              {contactNum}
              <Contacts darkTheme={darkTheme} />
            </div>
          </div>
          <div className={`${s.line} ${darkTheme ? s.darkLine : ''}`}></div>
          <div className={`${s.footer_foot} ${s.footer_foot_desktop}`}>
            {Creators}
          </div>
        </div>
      )}
    </>
  );
}
