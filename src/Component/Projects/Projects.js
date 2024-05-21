import React from 'react';
import { useTranslation } from 'react-i18next';
import MainIcon from '../../Lib/Img/proj/job_yan.png';
import DropIcon from '../../Lib/Img/proj/dropIcon.png';
import MarvelIcon from '../../Lib/Img/proj/marvelIcon.png';
import PulseIcon from '../../Lib/Img/proj/pulse.png';
import UberIcon from '../../Lib/Img/proj/uber.png';
import DodoIcon from '../../Lib/Img/proj/dodoIcon.png';
import Cards from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './Projects.module.css';

function CardsCarousel({ items, darkTheme, t, mobileVersion, tabletVersion }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: mobileVersion ? 1 : 2,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <Cards
          tabletVersion={tabletVersion}
          mobileVersion={mobileVersion}
          key={item.id}
          item={item}
          darkTheme={darkTheme}
          t={t}
        />
      ))}
    </Slider>
  );
}
export default function Projects({
  darkTheme,
  mobileVersion,
  tabletVersion,
  desktopVersion,
  desktopVersionMax,
}) {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      icon: MainIcon,
      alt: 'proj',
      title: t('Test task'),
      stack: 'HTML , JavaScript, CSS, SCSS',
      livePrev: 'https://enver111.github.io/web/ ',
      git: 'https://github.com/Enver111/web.git',
    },
    {
      id: 2,
      icon: DropIcon,
      alt: 'proj',
      title: t('Test task'),
      stack: 'HTML, React, TypeScript, CSS',
      livePrev: 'https://enver111.github.io/dropdown_live/',
      git: 'https://github.com/Enver111/dropdown',
    },
    {
      id: 3,
      icon: MarvelIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML, React , JavaScript, SCSS',
      livePrev: 'https://enver111.github.io/marvel_live/',
      git: 'https://github.com/Enver111/marver1',
    },
    {
      id: 4,
      icon: DodoIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML, React, JavaScript, CSS, ',
      livePrev: 'https://enver111.github.io/dodo_pizza_live/',
      git: 'https://github.com/Enver111/dodo_pizza',
    },
    {
      id: 5,
      icon: PulseIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML , JavaScript, CSS, SASS',
      livePrev: 'https://enver111.github.io/pulse/',
      git: 'https://github.com/Enver111/pulse',
    },
    {
      id: 6,
      icon: UberIcon,
      alt: 'proj',
      title: t('Mentors technical task'),
      stack: 'HTML, JavaScript,CSS, SASS',
      livePrev: 'https://enver111.github.io/uber/',
      git: 'https://github.com/Enver111/uber',
    },
  ];
  const Head = (
    <>
      <h1 className={s.title}>{t('Projects')}</h1>
      <h2 className={`${s.subtitle} ${tabletVersion ? s.subtitle_tablet : ''}`}>
        {t('Things I’ve built so far')}
      </h2>
    </>
  );
  return (
    <>
      {desktopVersionMax && (
        <div className={s.proj}>
          {Head}
          <div className={`${s.cards} ${s.cards_desctop} ${s.cards_tablet}`}>
            {items.map((item) => (
              <Cards key={item.id} item={item} darkTheme={darkTheme} t={t} />
            ))}
          </div>
        </div>
      )}
      {desktopVersion && (
        <div className={`${s.proj} ${s.proj_desctop}`}>
          {Head}
          <div className={`${s.cards} ${s.cards_desctop} ${s.cards_tablet}`}>
            {items.map((item) => (
              <Cards key={item.id} item={item} darkTheme={darkTheme} t={t} />
            ))}
          </div>
        </div>
      )}
      {tabletVersion && (
        <div className={`${s.proj} ${s.proj_desctop}`}>
          {Head}
          <CardsCarousel
            items={items}
            darkTheme={darkTheme}
            t={t}
            tabletVersion={tabletVersion}
          />
        </div>
      )}
      {mobileVersion && (
        <div className={`${s.proj} ${s.proj_desctop}`}>
          {Head}
          <CardsCarousel
            mobileVersion={mobileVersion}
            items={items}
            darkTheme={darkTheme}
            t={t}
          />
        </div>
      )}
    </>
  );
}
