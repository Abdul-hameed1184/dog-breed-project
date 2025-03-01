import GearGrid from "../components/GearGrid";
import React from "react";
import { Helmet } from "react-helmet";

const GearPage = () => {
  return (
    <div className="gear">
      <Helmet>
        <title>Bulldog Clothes</title>
        <meta name="description" content="Bulldog Clothes" />
      </Helmet>
      <div className="route">You are here: Bulldog Clothes</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <div className="content">
        <GearGrid />
      </div>
    </div>
  );
};

export default GearPage;
