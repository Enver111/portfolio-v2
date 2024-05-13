import { useTranslation } from 'react-i18next';

import s from './Buttons.module.css';

export default function Buttons({ darkTheme }) {
  const { t } = useTranslation();
  const items = [
    { id: 1, name: t('Home') },
    { id: 2, name: t('About') },
    { id: 3, name: t('Tech Stack') },
    { id: 4, name: t('Projects') },
    { id: 5, name: t('Contacts') },
  ];
  return (
    <div className={s.heder_btns}>
      {items.map((item) => (
        <button
          className={`${s.btn} ${darkTheme ? s.darkBtns : ''}`}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
