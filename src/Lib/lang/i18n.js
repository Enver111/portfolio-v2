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
          'Since August 2023, I have been actively studying frontend web development, having mastered basics of HTML, CSS, SCSS, SASS, JavaScript and TypeScript. Deep I immersed myself in the React library and know how to work effectively with Redux to manage application state. I actively use the system Git version control for easy collaborative development. Ready to new challenges and constantly strive for professional growth.':
            'Since August 2023, I have been actively studying frontend web development, having mastered basics of HTML, CSS, SCSS, SASS, JavaScript and TypeScript. Deep I immersed myself in the React library and know how to work effectively with Redux to manage application state. I actively use the system Git version control for easy collaborative development. Ready to new challenges and constantly strive for professional growth.',

          'Personal qualities': 'Personal qualities',

          'Creative thinking and abilities approach problems in a non-standard way. Perseverance, attentiveness to Details and scrupulousness in work. Analytic mind, ability to think logically and abstractly. Flexibility and speed adaptation to various changes. ':
            'Creative thinking and abilities approach problems in a non-standard way. Perseverance, attentiveness to Details and scrupulousness in work. Analytic mind, ability to think logically and abstractly. Flexibility and speed adaptation to various changes.',

          'I like working on interesting and complex projects. Eat great desire and determination to develop in Frontend development.':
            'I like working on interesting and complex projects. Eat great desire and determination to develop in Frontend development.',

          'Work Experience': 'Work Experience',
          'Leading specialist': 'Leading specialist',
          'Full time': 'Full time',
          'MTU Rosimushchestvo in Republic of Crimea':
            'MTU Rosimushchestvo in Republic of Crimea',
          Simferopol: 'Simferopol',
          'Aug 2019 - June 2020': 'Aug 2019 - June 2020',
          'Aug 2020 - Nov 2023': 'Aug 2020 - Nov 2023',
          'State Inspector of Crimea': 'State Inspector of Crimea',
          'Ministry of Natural Resources of Crimea':
            'Ministry of Natural Resources of Crimea',
          Education: 'Education',
          'Construction engineer': 'Construction engineer',
          'V.I. Vernadsky Crimean Federal University':
            'V.I. Vernadsky Crimean Federal University',
          Bachelor: 'Bachelor',
          'Sept 2012 - May 2018': 'Sept 2012 - May 2018',
          'Designed by': 'Designed by',
          'Pavan MG': 'Pavan MG',
          'built by': 'built by',
          'Enver EO': 'Enver EO',
          with: 'with',
          Love: 'Love',
          Coffee: 'Coffee',
          'Test task': 'Test task',
          'Mentors technical task': 'Mentors technical task',
          'Tech stack :': 'Tech stack : ',
          'Open Project': 'Open Project',
          'Open Code': 'Open Code',
          'For any questions please write to me:':
            'For any questions please write to me: ',
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

          'Since August 2023, I have been actively studying frontend web development, having mastered basics of HTML, CSS, SCSS, SASS, JavaScript and TypeScript. Deep I immersed myself in the React library and know how to work effectively with Redux to manage application state. I actively use the system Git version control for easy collaborative development. Ready to new challenges and constantly strive for professional growth.':
            'C августа 2023 года активно изучаю frontend web разработку, освоив основы HTML, CSS, SCSS, SASS, JavaScript и TypeScript. Глубоко погрузился в библиотеку React и умею эффективно работать с Redux для управления состоянием приложения. Активно использую систему контроля версий Git для удобного совместного разработки. Готов к новым вызовам и постоянно стремлюсь к профессиональному росту. ',

          'Personal qualities': 'Личностные качества',

          'Creative thinking and abilities approach problems in a non-standard way. Perseverance, attentiveness to Details and scrupulousness in work. Analytic mind, ability to think logically and abstractly. Flexibility and speed adaptation to various changes. ':
            'Творческое мышление и способность подходить к задачам нестандартно. Усидчивость, внимательность к деталям и скрупулезность в работе. Аналитический склад ума,способность мыслить логически и абстрактно. Гибкость и быстрая адаптация к различным изменениям.',

          'I like working on interesting and complex projects. Eat great desire and determination to develop in Frontend development.':
            'Нравится работать над интересными и сложными проектами. Есть большое желание и целеустремленность развиваться в Frontend разработке. ',

          'Work Experience': 'Опыт работы',
          'Leading specialist': 'Ведущий специалист',
          'Full time': 'Полная занятость ',
          'MTU Rosimushchestvo in Republic of Crimea':
            'МТУ Росимущества в Республике Крым',
          Simferopol: 'Симферополь',
          'Aug 2019 - June 2020': 'Авг 2019 - Июн 2020',
          'Aug 2020 - Nov 2023': 'Авг 2020 - Ноя 2023',
          'State Inspector of Crimea':
            'Государственный инспектор Республики Крым',
          'Ministry of Natural Resources of Crimea': 'Минприроды Крыма',
          Education: 'Образование',
          'Construction engineer': 'Инженер-строитель',
          'V.I. Vernadsky Crimean Federal University':
            '«КФУ им. В.И. Вернадского», Симферополь ',
          Bachelor: 'Бакалавр',
          'Sept 2012 - May 2018': 'Сен 2012 - Май 2018',
          'Designed by Pavan MG built by Enver EO with Love & Coffee':
            'Разработано Паван НГ, построено Энвер ЭО с любовью & Кофе',
          'Designed by': 'Разработано',
          'Pavan MG': 'Паван MГ',
          'built by': 'построено',
          'Enver EO': 'Энвер ЭО',
          with: 'c',
          Love: 'любовью',
          Coffee: 'Кофе',
          'Test task': 'Тестовое задание',
          'Mentors technical task': 'Техническое задание ментора',
          'Tech stack :': 'Технический стек : ',
          'Open Project': 'Открыть проект',
          'Open Code': 'Открыть код',
          'For any questions please write to me:':
            'По всем вопросам пишите мне:',
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
