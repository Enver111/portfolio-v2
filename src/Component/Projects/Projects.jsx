import Bg from '../../Lib/Icon/proj/bg.svg';
import Live from '../../Lib/Icon/proj/live.svg';
import Git from '../../Lib/Icon/proj/git.svg';
import s from './Projects.module.css';

export default function Projects() {
  const items = [
    {
      id: 1,
      icon: Bg,
      alt: 'proj',
      title: 'Project Tile goes here',
      stack: 'HTML , JavaScript, SASS, React',
      livePrev: '#live',
      git: '#live',
    },
    {
      id: 2,
      icon: Bg,
      alt: 'proj',
      title: 'Project Tile goes here',
      stack: 'HTML , JavaScript, SASS, React',
      livePrev: '#live',
      git: '#live',
    },
    {
      id: 3,
      icon: Bg,
      alt: 'proj',
      title: 'Project Tile goes here',
      stack: 'HTML , JavaScript, SASS, React',
      livePrev: '#live',
      git: '#live',
    },
    {
      id: 4,
      icon: Bg,
      alt: 'proj',
      title: 'Project Tile goes here',
      stack: 'HTML , JavaScript, SASS, React',
      livePrev: '#live',
      git: '#live',
    },
    {
      id: 5,
      icon: Bg,
      alt: 'proj',
      title: 'Project Tile goes here',
      stack: 'HTML , JavaScript, SASS, React',
      livePrev: '#live',
      git: '#live',
    },
    {
      id: 6,
      icon: Bg,
      alt: 'proj',
      title: 'Project Tile goes here',
      stack: 'HTML , JavaScript, SASS, React',
      livePrev: '#live',
      git: '#live',
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
          <div key={item.id} className={s.card}>
            <img src={item.icon} alt={item.alt} />
            <h1 className={s.card_title}>{item.title}</h1>
            <div className={s.stack}>
              Tech stack : <span>{item.stack}</span>
            </div>
            <div className={s.footer}>
              <div className={s.live}>
                <img src={Live} alt='live' />
                <a href='#live'>Live Preview</a>
              </div>
              <div className={s.code}>
                <img src={Git} alt='git' />
                <a href='#live'>View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
