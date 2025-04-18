import React from "react";
import css from "./Banner.module.scss";

const Banner: React.FC = () => {
  return (
    <section className={css.banner}>
      <div className={css.bannerOverlay}>
        <h1>Web Developer</h1>
        <h1 className={css.fontLine}>Web Manager</h1>
        <h1>Web Design</h1>
      </div>
    </section>
  );
};

export default Banner;
