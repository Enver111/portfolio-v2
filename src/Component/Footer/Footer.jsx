import { useTranslation } from 'react-i18next';
import Buttons from '../Buttons/Buttons';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

export default function Footer({ darkTheme }) {
  const { t } = useTranslation();
  return (
    <div className={s.footer}>
      <div className={s.footer_wrap}>
        <Logo />
        <div
          className={`${s.footer_contacts} ${
            darkTheme ? s.footer_contacts_dark : ''
          }`}
        >
          <a className={s.footer_link} href='tel:+79780200852'>
            +7 (978) 020-08-52
          </a>
          <a className={s.footer_link} href='mailto:enver.erfanovich@gmail.com'>
            enver.erfanovich@gmail.com
          </a>
          <Contacts darkTheme={darkTheme} />
        </div>
      </div>
      <div className={`${s.line} ${darkTheme ? s.darkLine : ''}`}></div>
      <div className={s.footer_foot}>
        <Buttons darkTheme={darkTheme} />
        <p className={s.creators}>
          {t('Designed by')}{' '}
          <span className={s.cretors_name}>{t('Pavan MG')}</span>{' '}
          {t('built by')}{' '}
          <span className={s.cretors_name}>{t('Enver EO')}</span> {t('with')}{' '}
          <span className={s.cretors_name}>{t('Love')}</span> &{' '}
          <span className={s.cretors_name}>{t('Coffee')}</span>
        </p>
      </div>
    </div>
  );
}
