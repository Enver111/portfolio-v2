import s from './Projects.module.css';

export default function Projects() {
  return (
    <div className={s.proj}>
      <h1 className={s.title}>Проекты</h1>
      <h2 className={s.subtitle}>
        Веб-сайты, которые я написал на данный момент
      </h2>
      <div className={s.card}>
        <img src='' alt='' />
        <h1 className={s.card_title}></h1>
        <p className={s.description}></p>
        <div className={stack}>
          {' '}
          <span></span>
        </div>
        <div className={s.footer}>
          <div className={s.live}>
            <img src='' alt='' />
            <p></p>
          </div>
          <div className={s.code}>
            <img src='' alt='' />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
