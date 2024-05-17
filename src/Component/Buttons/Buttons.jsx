import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import s from './Buttons.module.css';

export default function Buttons({ darkTheme }) {
  const { t } = useTranslation();
  const items = [
    { id: 1, name: t('Home'), path: '/' },
    { id: 2, name: t('About'), path: '/about' },
    { id: 3, name: t('Tech Stack'), path: '/tech-stack' },
    { id: 4, name: t('Projects'), path: '/projects' },
    { id: 5, name: t('Contacts'), path: '/contacts' },
  ];
  return (
    <div className={s.heder_btns}>
      {items.map((item) => (
        <button
          className={`${s.btn} ${darkTheme ? s.darkBtns : ''}`}
          key={item.id}
        >
          <Link to={item.path}>{item.name}</Link>{' '}
        </button>
      ))}
    </div>
  );
}
