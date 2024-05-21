import { useTranslation } from 'react-i18next';
import HtmlIcon from '../../Lib/Icon/stack/Html.svg';
import CssIcon from '../../Lib/Icon/stack/Css.svg';
import JavaScriptIcon from '../../Lib/Icon/stack/JavaScript.svg';
import ReactIcon from '../../Lib/Icon/stack/React.svg';
import ReduxIcon from '../../Lib/Icon/stack/Redux.svg';
import BootstrapIcon from '../../Lib/Icon/stack/Bootstrap.svg';
import TailwindIcon from '../../Lib/Icon/stack/Tailwind.svg';
import SassIcon from '../../Lib/Icon/stack/Sass.svg';
import GitIcon from '../../Lib/Icon/stack/Git.svg';
import GreensockIcon from '../../Lib/Icon/stack/Greensock.svg';
import VScodeIcon from '../../Lib/Icon/stack/VScode.svg';
import GitGubIcon from '../../Lib/Icon/stack/GitGub.svg';
import TypeScriptIcon from '../../Lib/Icon/stack/typescript.svg';
import DokerIcon from '../../Lib/Icon/stack/docker.svg';
import s from './Stack.module.css';

export default function Stack({
  darkTheme,
  mobileVersion,
  tabletVersion,
  desktopVersion,
  desktopVersionMax,
}) {
  const { t } = useTranslation();
  const items = [
    { id: 1, icon: HtmlIcon, alt: 'HtmlIcon' },
    { id: 2, icon: CssIcon, alt: 'CssIcon' },
    { id: 3, icon: JavaScriptIcon, alt: 'JavaScriptIcon' },
    { id: 4, icon: TypeScriptIcon, alt: 'TypeScript' },
    { id: 5, icon: ReactIcon, alt: 'ReactIcon' },
    { id: 6, icon: ReduxIcon, alt: 'ReduxIcon' },
    { id: 7, icon: BootstrapIcon, alt: 'BootstrapIcon' },
    { id: 8, icon: TailwindIcon, alt: 'TailwindIcon' },
    { id: 9, icon: SassIcon, alt: 'SassIcon' },
    { id: 10, icon: GitIcon, alt: 'GitIcon' },
    { id: 11, icon: GreensockIcon, alt: 'GreensockIcon' },
    { id: 12, icon: VScodeIcon, alt: 'VScodeIcon' },
    { id: 13, icon: GitGubIcon, alt: 'GitGubIcon' },
    { id: 14, icon: DokerIcon, alt: 'Doker' },
  ];
  return (
    <>
      {desktopVersionMax && (
        <div className={s.stack}>
          <h1 className={s.title}>{t('My Tech Stack')}</h1>
          <h2 className={s.subtitle}>
            {t('Technologies I’ve been working with recently')}
          </h2>
          <div className={`${s.stack_icons} ${darkTheme ? s.darckIcon : ''}`}>
            {items.map((item) => (
              <img
                className={s.icons}
                key={item.id}
                src={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      )}
      {desktopVersion && (
        <div className={`${s.stack} ${s.stack_desktop}`}>
          <h1 className={s.title}>{t('My Tech Stack')}</h1>
          <h2 className={s.subtitle}>
            {t('Technologies I’ve been working with recently')}
          </h2>
          <div className={`${s.stack_icons} ${darkTheme ? s.darckIcon : ''}`}>
            {items.map((item) => (
              <img
                className={s.icons}
                key={item.id}
                src={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      )}
      {tabletVersion && (
        <div className={`${s.stack} ${s.stack_desktop} ${s.stack_tablet}`}>
          <h1 className={`${s.title} ${s.title_tablet}`}>
            {t('My Tech Stack')}
          </h1>
          <h2 className={`${s.subtitle} ${s.subtitle_tablet}`}>
            {t('Technologies I’ve been working with recently')}
          </h2>
          <div
            className={`${s.stack_icons} ${s.stack_icons_tablet} ${
              darkTheme ? s.darckIcon : ''
            }`}
          >
            {items.map((item) => (
              <img
                className={`${s.icons} ${s.icons_tablet}`}
                key={item.id}
                src={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      )}
      {mobileVersion && (
        <div
          className={`${s.stack} ${s.stack_desktop} ${s.stack_tablet} ${s.title_mobile}`}
        >
          <h1 className={`${s.title} ${s.title_tablet} ${s.title_mobile}`}>
            {t('My Tech Stack')}
          </h1>
          <h2
            className={`${s.subtitle} ${s.subtitle_tablet} ${s.subtitle_mobile}`}
          >
            {t('Technologies I’ve been working with recently')}
          </h2>
          <div
            className={`${s.stack_icons} ${s.stack_icons_tablet} ${
              s.stack_icons_mobile
            } ${darkTheme ? s.darckIcon : ''}`}
          >
            {items.map((item) => (
              <img
                className={`${s.icons} ${s.icons_tablet} ${s.icons_mobile}`}
                key={item.id}
                src={item.icon}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
