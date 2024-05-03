import MainPhoto from '../../Lib/Img/mainPhoto.png';
import s from './Main.module.css';

export default function Main() {
  return (
    <aside className={s.main}>
      <div className={s.about}>
        Привет 👋, <br /> Меня зовут <br /> <span>Энвер Османов</span>
        <br /> я Frontend разработчик
      </div>
      <div className={s.mainPhoto}>
        <img src={MainPhoto} alt='MainPhoto' />
      </div>
    </aside>
  );
}
