import Company from '../../Lib/Icon/aboutMe/company.svg';
import Location from '../../Lib/Icon/aboutMe/location.svg';
import Period from '../../Lib/Icon/aboutMe/period.svg';

import s from './AboutMe.module.css';

export default function AboutMe() {
  const items = [
    {
      id: 1,
      position: 'Junior',
      organization: 'Mtu',
      location: 'Simferopol',
      schedule: 'Full time',
      workPeriod: 'Sep 2020 - Dec 2021',
    },
  ];
  return (
    <div className={s.aboutMe}>
      <h1>About Me</h1>
      <p></p>
      <h1>Work Experience</h1>
      <div className={s.worckExp}>
        {items.map((item) => (
          <div className={s.workCard}>
            <div key={item.id} className={s.cardHead}>
              <h2>{item.position}</h2>
              <div>{item.schedule}</div>
            </div>
            <div className={s.cardSubheader}>
              <div className={s.company}>
                <img src={Company} alt='company' />
                <p>{item.organization}</p>
                <img src={Location} alt='location' />
                <p>{item.location}</p>
              </div>
              <div className={s.poriod}>
                <img src={Period} alt='period' />
                <p>{item.workPeriod}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
