import Github from '../../Lib/Icon/contacts/github.svg';
import Telegram from '../../Lib/Icon/contacts/telegram.svg';
import s from '../Header/Header.module.css';

export default function Contacts({ darkTheme }) {
  const darkIcon = darkTheme ? s.darkIcon : '';
  return (
    <div className={s.contscts}>
      <div className={`${s.hover} ${darkIcon}`}>
        <a href='#github'>
          <img src={Github} alt='github' />
        </a>
      </div>
      <div className={`${s.hover} ${darkIcon}`}>
        <a href='#telegram'>
          <img src={Telegram} alt='telegram' />
        </a>
      </div>
    </div>
  );
}
