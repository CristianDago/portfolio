import React from "react";
import css from "./AboutUs.module.scss";
import { Grid } from "../common/grid/grid";
import cv from "../../assets/images/foto_cv.png";

const AboutUs: React.FC = () => {
  return (
    <section id="sobre-mi">
      <Grid className={`${css.about} grid-columns-2`}>
        <div>
          <img src={cv} alt="Cristian Gallardo" className={css.aboutImg} />
        </div>
        <div>
          <h2>Sobre mí</h2>
          <div className={css.underline}></div>
          <p>
            Mi nombre es Cristian Gallardo, <b>publicista</b> graduado de la{" "}
            <b>Universidad Diego Portales</b> y <b>Webmaster</b> con más de{" "}
            <b>10 años de experiencia</b> en la industria. Mi trayectoria
            profesional se caracteriza por haber trabajado en diversas empresas,
            agencias de comunicación y emprendimientos propios, así como por la
            gestión y desarrollo de proyectos encomendados por terceros. Me
            destaco por mi capacidad para tomar decisiones de manera
            responsable, mi actitud positiva y mi enfoque en el trabajo en
            equipo, la adaptabilidad, el análisis y la resolución de problemas.
            Siempre estoy en búsqueda de nuevos desafíos personales y
            profesionales.
          </p>
        </div>
      </Grid>
    </section>
  );
};

export default AboutUs;
