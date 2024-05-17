import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import s from './Contact.module.css';

export default function Contact({ darkTheme }) {
  const { t } = useTranslation();
  return (
    <div className={s.contact}>
      <h1 className={s.title}>
        {t('For any questions please write to me:')} <br />{' '}
        <a href='mailto:enver.erfanovich@gmail.com'>
          enver.erfanovich@gmail.com
        </a>
      </h1>
      <Footer darkTheme={darkTheme} />
    </div>
  );
}
