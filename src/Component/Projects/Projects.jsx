import { useTranslation } from 'react-i18next';
import MainIcon from '../../Lib/Img/proj/job_yan.png';
import DropIcon from '../../Lib/Img/proj/dropIcon.png';
import MarvelIcon from '../../Lib/Img/proj/marvelIcon.png';
import PulseIcon from '../../Lib/Img/proj/pulse.png';
import UberIcon from '../../Lib/Img/proj/uber.png';
import DodoIcon from '../../Lib/Img/proj/dodoIcon.png';
import Live from '../../Lib/Icon/proj/live.svg';
import Git from '../../Lib/Icon/proj/git.svg';
import s from './Projects.module.css';

export default function Projects({ darkTheme }) {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      icon: MainIcon,
      alt: 'proj',
      title: t('Test task'),
      stack: 'HTML , JavaScript, CSS',
      livePrev: 'https://enver111.github.io/web/ ',
      git: 'https://github.com/Enver111/web.git',
    },
    {
      id: 2,
      icon: DropIcon,
      alt: 'proj',
      title: t('Test task'),
      stack: 'HTML, React, TypeScript, CSS',
      livePrev: 'https://enver111.github.io/dropdown_live/',
      git: 'https://github.com/Enver111/dropdown',
    },
    {
      id: 3,
      icon: MarvelIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML, React , JavaScript, SCSS',
      livePrev: 'https://enver111.github.io/marvel_live/',
      git: 'https://github.com/Enver111/marver1',
    },
    {
      id: 4,
      icon: DodoIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML, React, JavaScript, CSS, ',
      livePrev: 'https://enver111.github.io/dodo_pizza_live/',
      git: 'https://github.com/Enver111/dodo_pizza',
    },
    {
      id: 5,
      icon: PulseIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML , JavaScript, SASS',
      livePrev: 'https://enver111.github.io/pulse/',
      git: 'https://github.com/Enver111/pulse',
    },
    {
      id: 6,
      icon: UberIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML , JavaScript, SASS',
      livePrev: 'https://enver111.github.io/uber/',
      git: 'https://github.com/Enver111/uber',
    },
  ];

  return (
    <div className={s.proj}>
      <h1 className={s.title}>Проекты</h1>
      <h2 className={s.subtitle}>
        Веб-сайты, которые я написал на данный момент
      </h2>
      <div className={s.cards}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${s.card} ${darkTheme ? s.darkCards : ''}`}
          >
            <img src={item.icon} alt={item.alt} />

            <h1 className={s.card_title}>{item.title}</h1>
            <div className={s.stack}>
              {t('Tech stack :')}
              <span>{item.stack}</span>
            </div>
            <div className={s.footer}>
              <div className={`${s.live} ${darkTheme ? s.darkIcon : ''}`}>
                <img src={Live} alt='live' />
                <a href={item.livePrev}>{t('Open Project')}</a>
              </div>
              <div className={`${s.code} ${darkTheme ? s.darkIcon : ''}`}>
                <img src={Git} alt='git' />
                <a href={item.git}>{t('Open Code')}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
