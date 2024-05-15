import Footer from '../Footer/Footer';
import s from './Contact.module.css';

export default function Contact() {
  return (
    <div className={s.contact}>
      <h1 className={s.title}>
        For any questions please write to me: <br />{' '}
        <a href='enver.erfanovich@gmail.com'>enver.erfanovich@gmail.com</a>
      </h1>
      <Footer />
    </div>
  );
}
