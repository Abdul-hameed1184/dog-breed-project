import React from 'react'
import CreamGrid from '../components/CreamGrid';
import { Helmet } from "react-helmet"

const Cream = () => {
  return (
    <div className="cream">
      <Helmet>
        <title>Cream Bulldogs</title>
        <meta name="description" content="Cream Bulldogs" />
      </Helmet>
      <div className="route">You are here : Cream Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <CreamGrid/>
    </div>
  );
}

export default Cream
