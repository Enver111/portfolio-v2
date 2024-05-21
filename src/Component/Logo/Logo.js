import s from './Logo.module.css';

export default function Logo() {
  return (
    <div className={s.logo}>
      <div className={s.logo_num}>
        &#123;<span>001</span>&#125;
      </div>
      <div>osmanov</div>
    </div>
  );
}
