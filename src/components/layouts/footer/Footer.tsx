import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '0.5rem' }}>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#000', fontSize: '1.5rem' }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#0077b5', fontSize: '1.5rem' }}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:tuemail@correo.com"
          style={{ margin: '0 10px', color: '#c23a2b', fontSize: '1.5rem' }}
        >
          <FaEnvelope />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mi Aplicación</p>
    </footer>
  );
};

export default Footer;
