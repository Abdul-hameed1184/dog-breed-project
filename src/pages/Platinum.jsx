import React from 'react'
import PlatinumGrid from '../components/PlatinumGrid';
import { Helmet } from "react-helmet"

const Platinum = () => {
  return (
    <div className="platinum">
      <Helmet>
        <title>Platinum Bulldogs</title>
        <meta name="description" content="Platinum Bulldogs" />
      </Helmet>
      <div className="route">You are here : Platinum Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed6.jpg" alt="" />
      </div>
      <PlatinumGrid/>
    </div>
  );
}

export default Platinum
