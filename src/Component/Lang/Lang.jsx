import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Lang.module.css';

export default function Lang({ darkTheme }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Ru');
  const [langs, setLangs] = useState(['Ru', 'En', 'Es']);

  const toggleOpen = () => setIsOpen(!isOpen);

  const selectLang = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang);
  };

  const langDark = darkTheme ? s.langDark : '';
  return (
    <div className={`${s.lang} ${darkTheme ? s.langDark_main : ''}`}>
      <button onClick={toggleOpen}>{selectedLang}</button>
      {isOpen && (
        <div className={`${s.lang_select} ${langDark}`}>
          <ul>
            {langs.map(
              (lang, index) =>
                lang !== selectedLang && (
                  <li key={index} onClick={() => selectLang(lang)}>
                    {lang}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
