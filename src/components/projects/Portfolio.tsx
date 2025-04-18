import css from './Portfolio.module.scss';
import proyecto01 from '../../assets/images/proyectos01.webp'
import proyecto02 from '../../assets/images/proyectos02.webp'
import proyecto03 from '../../assets/images/proyectos03.webp'
import proyecto04 from '../../assets/images/proyectos04.webp'
import proyecto05 from '../../assets/images/proyectos05.webp'
import proyecto06 from '../../assets/images/proyectos06.webp'
import proyecto07 from '../../assets/images/proyectos07.webp'
import proyecto08 from '../../assets/images/proyectos08.webp'
import proyecto09 from '../../assets/images/proyectos09.webp'

const projects = [
    {
      title: 'Proyecto 1',
      image: proyecto01,
      description: 'Descripción breve del proyecto 1',
      link: 'https://github.com/tuusuario/proyecto1',
    },
    {
      title: 'Proyecto 2',
      image: proyecto02,
      description: 'Descripción breve del proyecto 2',
      link: 'https://github.com/tuusuario/proyecto2',
    },
    {
        title: 'Proyecto 3',
        image: proyecto06,
        description: 'Descripción breve del proyecto 3',
        link: 'https://github.com/tuusuario/proyecto3',
      },
    {
      title: 'Proyecto 3',
      image: proyecto03,
      description: 'Descripción breve del proyecto 3',
      link: 'https://github.com/tuusuario/proyecto3',
    },

    {
        title: 'Proyecto 1',
        image: proyecto04,
        description: 'Descripción breve del proyecto 1',
        link: 'https://github.com/tuusuario/proyecto1',
      },
      {
        title: 'Proyecto 2',
        image: proyecto05,
        description: 'Descripción breve del proyecto 2',
        link: 'https://github.com/tuusuario/proyecto2',
      },
  
      {
        title: 'Proyecto 1',
        image: proyecto07,
        description: 'Descripción breve del proyecto 1',
        link: 'https://github.com/tuusuario/proyecto1',
      },
      {
        title: 'Proyecto 2',
        image: proyecto08,
        description: 'Descripción breve del proyecto 2',
        link: 'https://github.com/tuusuario/proyecto2',
      },
      {
        title: 'Proyecto 3',
        image: proyecto09,
        description: 'Descripción breve del proyecto 3',
        link: 'https://github.com/tuusuario/proyecto3',
      },
  ];

const Portfolio = () => {
  return (
    <section className={css.portfolio}>
      <h2>Mis Proyectos</h2>
      <div className={css.underline}></div>
      <div className={css.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={css.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={css.projectImage}
            />
            <div className={css.projectInfo}>
              <h3 className={css.projectTitle}>{project.title}</h3>
              <p className={css.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={css.projectButton}
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Revisa los proyectos backend</h2>
        <div className={css.underline}></div>
        <a
             href='#'
                target="_blank"
                rel="noopener noreferrer"
                className={css.projectButton}
              >
                Ver proyecto
              </a>
      </div>
    </section>
  );
};

export default Portfolio;
