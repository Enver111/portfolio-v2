import Github from '../../Lib/Icon/contacts/github.svg';
import Telegram from '../../Lib/Icon/contacts/telegram.svg';
import s from '../Header/Header.module.css';

export default function Contacts({ darkTheme, mobileVersion }) {
  const darkIcon = darkTheme ? s.darkIcon : '';
  return (
    <div
      className={`${s.contscts} ${s.contscts_desktop} ${
        mobileVersion ? s.contscts_mobile : ''
      }`}
    >
      <div className={`${s.hover} ${darkIcon}`}>
        <a href='https://github.com/Enver111'>
          <img src={Github} alt='github' />
        </a>
      </div>
      <div className={`${s.hover} ${darkIcon}`}>
        <a href='https://t.me/osmanovenver'>
          <img src={Telegram} alt='telegram' />
        </a>
      </div>
    </div>
  );
}
