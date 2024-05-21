import Live from '../../Lib/Icon/proj/live.svg';
import Git from '../../Lib/Icon/proj/git.svg';
import s from './Projects.module.css';
export default function Cards({
  item,
  darkTheme,
  t,
  tabletVersion,
  mobileVersion,
}) {
  return (
    <div
      key={item.id}
      className={`${s.card} ${
        tabletVersion || mobileVersion ? s.card_tablet : ''
      }  ${darkTheme ? s.darkCards : ''} `}
    >
      <img
        className={`${s.card_img} ${
          tabletVersion || mobileVersion ? s.card_img_tablet : ''
        }`}
        src={item.icon}
        alt={item.alt}
      />

      <h1 className={s.card_title}>{item.title}</h1>
      <div className={`${s.stack} ${darkTheme ? s.stack_dark : ''}`}>
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
  );
}
