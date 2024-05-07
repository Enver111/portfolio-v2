import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';

i18n
  .use(initReactI18next) // инициализация react-i18next
  .init({
    resources: {
      En: {
        translation: {
          Home: 'Home',
          About: 'About me',
          'Tech Stack': 'Tech Stack',
          Projects: 'Projects',
          Contacts: 'Contacts',
          Hi: 'Hi',
          'My name is': 'My name is',
          'Enver Osmanov': 'Enver Osmanov',
          'I m a Frontend Developer': "I'm a Frontend Developer",
          'My Tech Stack': 'My Tech Stack',
          'Technologies I’ve been working with recently':
            'Technologies I’ve been working with recently',
          'Things I’ve built so far': 'Things I’ve built so far',
        },
      },
      Ru: {
        translation: {
          Home: 'Домой',
          About: 'Обо мне',
          'Tech Stack': 'Технический стек',
          Projects: 'Проекты',
          Contacts: 'Контакты',
          Hi: 'Привет',
          'My name is': 'Меня зовут',
          'Enver Osmanov': 'Энвер Османов',
          'I m a Frontend Developer': 'Я Frontend-разработчик',
          'My Tech Stack': 'Мой Технический Стек',
          'Technologies I’ve been working with recently':
            'Технологии, с которыми я работал в последнее время',
          'Things I’ve built so far':
            'Веб-сайты, которые я создал на данный момент',
        },
      },
    },
    lang: 'Ru', // язык по умолчанию
    fallbackLng: 'Ru', // язык по умолчанию, если не найдено соответствующих переводов
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
