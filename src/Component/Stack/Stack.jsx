import HtmlIcon from '../../Lib/Icon/stack/Html.svg';
import CssIcon from '../../Lib/Icon/stack/Css.svg';
import JavaScriptIcon from '../../Lib/Icon/stack/JavaScript.svg';
import ReactIcon from '../../Lib/Icon/stack/React.svg';
import ReduxIcon from '../../Lib/Icon/stack/Redux.svg';
import BootstrapIcon from '../../Lib/Icon/stack/Bootstrap.svg';
import TailwindIcon from '../../Lib/Icon/stack/Tailwind.svg';
import SassIcon from '../../Lib/Icon/stack/Sass.svg';
import GitIcon from '../../Lib/Icon/stack/Git.svg';
import GreensockIcon from '../../Lib/Icon/stack/Greensock.svg';
import VScodeIcon from '../../Lib/Icon/stack/VScode.svg';
import GitGubIcon from '../../Lib/Icon/stack/GitGub.svg';
import s from './Stack.module.css';

export default function Stack() {
  const items = [
    { id: 1, icon: HtmlIcon, alt: 'HtmlIcon' },
    { id: 2, icon: CssIcon, alt: 'CssIcon' },
    { id: 3, icon: JavaScriptIcon, alt: 'JavaScriptIcon' },
    { id: 4, icon: ReactIcon, alt: 'ReactIcon' },
    { id: 5, icon: ReduxIcon, alt: 'ReduxIcon' },
    { id: 6, icon: BootstrapIcon, alt: 'BootstrapIcon' },
    { id: 7, icon: TailwindIcon, alt: 'TailwindIcon' },
    { id: 8, icon: SassIcon, alt: 'SassIcon' },
    { id: 9, icon: GitIcon, alt: 'GitIcon' },
    { id: 10, icon: GreensockIcon, alt: 'GreensockIcon' },
    { id: 11, icon: VScodeIcon, alt: 'VScodeIcon' },
    { id: 12, icon: GitGubIcon, alt: 'GitGubIcon' },
  ];
  return (
    <div className={s.stack}>
      <h1 className={s.title}>Мой Технический Стек</h1>
      <h2 className={s.subtitle}>
        Технологии, с которыми я работал в последнее время
      </h2>
      <div className={s.stack_icons}>
        {items.map((item) => (
          <img
            className={s.icons}
            key={item.id}
            src={item.icon}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
}
