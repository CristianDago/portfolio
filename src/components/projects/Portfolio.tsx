import css from "./Portfolio.module.scss";
import proyecto01 from "../../assets/images/proyectos01.webp";
import proyecto02 from "../../assets/images/proyectos02.webp";
import proyecto03 from "../../assets/images/proyectos03.webp";
import proyecto04 from "../../assets/images/proyectos10.webp";
import proyecto05 from "../../assets/images/proyectos05.webp";
import proyecto06 from "../../assets/images/proyectos06.webp";
import proyecto07 from "../../assets/images/proyectos07.webp";
import proyecto08 from "../../assets/images/proyectos08.webp";
import proyecto09 from "../../assets/images/proyectos09.webp";

const projects = [
  {
    title: "Areyuna y Guzmán",
    image: proyecto01,
    link: "https://abogadosayg.cl/",
  },

  {
    title: "Etniker",
    image: proyecto04,
    link: "https://www.etniker.cl/",
  },
  {
    title: "Probelle",
    image: proyecto06,
    link: "https://www.probelle.cl/",
  },
  {
    title: "Clínica trasandina",
    image: proyecto02,
    description: "Descripción breve del proyecto 2",
    link: "https://clinicatrasandina.cl/",
  },

  {
    title: "Vitalmédica",
    image: proyecto03,
    description: "Descripción breve del proyecto 3",
    link: "https://vitalmedica.cl/",
  },

  {
    title: "Nepipetshop",
    image: proyecto05,
    description: "Descripción breve del proyecto 2",
    link: "https://nepipetshop.cl/",
  },

  {
    title: "Patitas del recuerdo",
    image: proyecto07,
    description: "Descripción breve del proyecto 1",
    link: "https://patitasdelrecuerdo.cl/",
  },
  {
    title: "Organic Style",
    image: proyecto08,
    description: "Descripción breve del proyecto 2",
    link: "https://organicstyle.cl/",
  },
  {
    title: "Modo Escénico",
    image: proyecto09,
    description: "Descripción breve del proyecto 3",
    link: "https://modoescenico.cl/",
  },
];

const Portfolio = () => {
  return (
    <section id="proyectos" className={css.portfolio}>
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
          href="https://github.com/CristianDago/StudentHub"
          target="_blank"
          rel="noopener noreferrer"
          className={css.projectButton}
        >
          Ver proyectos
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
