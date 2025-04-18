import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import css from './footer.module.scss';

const Footer = () => {
  return (
    <footer id="contacto" className={css.footer}>
      <h2>Contáctame</h2>
      <div className={css.underline}></div>
      <div className={css.iconContainer}>
        <a
          href="https://github.com/CristianDago"
          target="_blank"
          rel="noopener noreferrer"
          className={css.iconLink}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/publicistaweb/"
          target="_blank"
          rel="noopener noreferrer"
          className={css.iconLink}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackmedia.cl/"
          className={css.iconLink}
        >
         <FaLink />
        </a>
      </div>
      <p className={css.copyText}>
        &copy; {new Date().getFullYear()} Mi Aplicación
      </p>
    </footer>
  );
};

export default Footer;
