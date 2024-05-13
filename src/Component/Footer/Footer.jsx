import Buttons from '../Buttons/Buttons';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_wrap}>
        <Logo />
        <div className={s.footer_contacts}>
          <a href='tel:+79780200852'>+7 (978) 020-08-52</a>
          <a href='mailto:enver.erfanovich@gmail.com'>
            enver.erfanovich@gmail.com
          </a>
          <Contacts />
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.footer_foot}>
        <Buttons />
        <p className={s.creators}>
          Designed by <span>Pavan MG</span> built by <span>Enver EO</span> with{' '}
          <span>Love</span> & <span>Coffee</span>
        </p>
      </div>
    </div>
  );
}