import { useTranslation } from 'react-i18next';
import Company from '../../Lib/Icon/aboutMe/company.svg';
import Location from '../../Lib/Icon/aboutMe/location.svg';
import Period from '../../Lib/Icon/aboutMe/period.svg';
import Diploma from '../../Lib/Icon/aboutMe/dipl.svg';
import s from './AboutMe.module.css';

export default function AboutMe() {
  const { t } = useTranslation();
  const worckExpirience = [
    {
      id: 1,
      position: t('Leading specialist'),
      organization: t('MTU Rosimushchestvo in Republic of Crimea'),
      location: t('Simferopol'),
      schedule: t('Full time'),
      workPeriod: t('Aug 2019 - June 2020'),
    },
    {
      id: 2,
      position: t('State Inspector of Crimea'),
      organization: t('Ministry of Natural Resources of Crimea'),
      location: t('Simferopol'),
      schedule: t('Full time'),
      workPeriod: t('Aug 2020 - Nov 2023'),
    },
  ];
  const education = [
    {
      id: 3,
      position: t('Construction engineer'),
      organization: t('V.I. Vernadsky Crimean Federal University'),
      location: t('Bachelor'),
      schedule: t('Full time'),
      workPeriod: t('Sept 2012 - May 2018'),
    },
  ];
  return (
    <div className={s.aboutMe}>
      <div className={s.aboutMe_wrap}>
        <h1>{t('About')}</h1>
        <p>
          {t(
            'Since August 2023, I have been actively studying frontend web development, having mastered basics of HTML, CSS, SCSS, SASS, JavaScript and TypeScript. Deep I immersed myself in the React library and know how to work effectively with Redux to manage application state. I actively use the system Git version control for easy collaborative development. Ready to new challenges and constantly strive for professional growth.'
          )}
        </p>
        <h1>{t('Personal qualities')}</h1>
        <p>
          {t(
            'Creative thinking and abilities approach problems in a non-standard way. Perseverance, attentiveness to Details and scrupulousness in work. Analytic mind, ability to think logically and abstractly. Flexibility and speed adaptation to various changes. '
          )}
          <br />
          {t(
            'I like working on interesting and complex projects. Eat great desire and determination to develop in Frontend development.'
          )}
        </p>
      </div>
      <div className={s.worckExp}>
        <h1>{t('Work Experience')}</h1>
        {worckExpirience.map((item) => (
          <div key={item.id} className={s.workCard}>
            <div className={s.cardHead}>
              <h2>{item.position}</h2>
              <p>{item.schedule}</p>
            </div>
            <div className={s.cardSubheader}>
              <div className={s.company}>
                <img src={Company} alt='company' />
                <p>{item.organization}</p>
                <img src={Location} alt='location' />
                <p>{item.location}</p>
              </div>
              <div className={s.period}>
                <img src={Period} alt='period' />
                <p>{item.workPeriod}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.worckExp}>
        <h1>{t('Education')}</h1>
        {education.map((item) => (
          <div key={item.id} className={s.workCard}>
            <div className={s.cardHead}>
              <h2>{item.position}</h2>
              <p>{item.schedule}</p>
            </div>
            <div className={s.cardSubheader}>
              <div className={s.company}>
                <img src={Company} alt='company' />
                <p>{item.organization}</p>
                <img src={Diploma} alt='location' />
                <p>{item.location}</p>
              </div>
              <div className={s.period}>
                <img src={Period} alt='period' />
                <p>{item.workPeriod}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
