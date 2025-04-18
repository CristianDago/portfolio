import css from "./Timeline.module.scss";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "Desafío Latam",
    description: "Desarrollo Backend con Node/Express.",
  },
  {
    year: "2023",
    title: "Desafío Latam",
    description: "Desarrollo Full Stack JavaScript.",
  },
  {
    year: "2014",
    title: "Academia Mac",
    description: "Web Manager & Web Design Pro",
  },
  {
    year: "2011",
    title: "Universidad Diego Portales",
    description: "Publicidad y Comunicación Social.",
  },

];

const Timeline = () => {
  return (
    <section className={css.timeline}>
      <h2>Estudios</h2>
      <div className={css.underline}></div>
      <div className={css.timelineContainer}>
        <div className={css.timelineTrack}>
          {timelineData.map((item, index) => (
            <div key={index} className={css.timelineCard}>
              <div className={css.timelineCircle} />
              <div className={css.timelineYear}>{item.year}</div>
              <div className={css.timelineTitle}>{item.title}</div>

              <p className={css.timelineDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
