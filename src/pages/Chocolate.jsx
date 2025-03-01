import React from 'react'
import ChocolateGrid from '../components/ChocolateGrid';
import { Helmet } from "react-helmet"

const Chocolate = () => {
  return (
    <div className="chocolate">
      <Helmet>
        <title>Chocolate Bulldogs</title>
        <meta name="description" content="Chocolate Bulldogs" />
        </Helmet>
      <div className="route">You are here : Chocolate Bulldogs</div>
      <div className="cover">
        <img src="images/Dogbreed1.jpg" alt="" />
      </div>
      <ChocolateGrid />
    </div>
  );
}

export default Chocolate
