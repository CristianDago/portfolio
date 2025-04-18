// src/pages/Home.tsx
import React from "react";
import Banner from "../components/banner/Banner"; // Importa el componente Banner
import AboutUs from "../components/aboutUs/AboutUs";
import Timeline from "../components/Timeline/Timeline";
import Portfolio from "../components/projects/Portfolio";

const Home: React.FC = () => {
  return (
    <div>
      <Banner /> {/* Aquí está el banner */}
      <AboutUs />
      <Timeline />
      <Portfolio/>
    </div>
  
  );
};

export default Home;
