import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import s from './Contact.module.css';

export default function Contact({
  darkTheme,
  mobileVersion,
  tabletVersion,
  desktopVersion,
  desktopVersionMax,
}) {
  const { t } = useTranslation();
  return (
    <>
      {desktopVersionMax && (
        <div className={s.contact}>
          <h1 className={s.title}>
            {t('For any questions please write to me:')} <br />{' '}
            <a href='mailto:enver.erfanovich@gmail.com'>
              enver.erfanovich@gmail.com
            </a>
          </h1>
          <Footer
            darkTheme={darkTheme}
            mobileVersion={mobileVersion}
            tabletVersion={tabletVersion}
            desktopVersion={desktopVersion}
            desktopVersionMax={desktopVersionMax}
          />
        </div>
      )}
      {desktopVersion && (
        <div className={`${s.contact} ${s.contact_desktop}`}>
          <h1 className={s.title}>
            {t('For any questions please write to me:')} <br />{' '}
            <a href='mailto:enver.erfanovich@gmail.com'>
              enver.erfanovich@gmail.com
            </a>
          </h1>
          <Footer
            darkTheme={darkTheme}
            mobileVersion={mobileVersion}
            tabletVersion={tabletVersion}
            desktopVersion={desktopVersion}
            desktopVersionMax={desktopVersionMax}
          />
        </div>
      )}
      {tabletVersion && (
        <div className={`${s.contact} ${s.contact_desktop}`}>
          <h1 className={`${s.title} ${s.title_tablet}`}>
            {t('For any questions please write to me:')} <br />{' '}
            <a href='mailto:enver.erfanovich@gmail.com'>
              enver.erfanovich@gmail.com
            </a>
          </h1>
          <Footer
            darkTheme={darkTheme}
            mobileVersion={mobileVersion}
            tabletVersion={tabletVersion}
            desktopVersion={desktopVersion}
            desktopVersionMax={desktopVersionMax}
          />
        </div>
      )}
      {mobileVersion && (
        <div className={`${s.contact} ${s.contact_desktop}`}>
          <h1 className={`${s.title} ${s.title_mobile}`}>
            {t('For any questions please write to me:')} <br />{' '}
            <a href='mailto:enver.erfanovich@gmail.com'>
              enver.erfanovich@gmail.com
            </a>
          </h1>
          <Footer
            darkTheme={darkTheme}
            mobileVersion={mobileVersion}
            tabletVersion={tabletVersion}
            desktopVersion={desktopVersion}
            desktopVersionMax={desktopVersionMax}
          />
        </div>
      )}
    </>
  );
}
