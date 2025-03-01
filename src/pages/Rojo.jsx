import React from 'react'
import RojoGrid from '../components/RojoGrid';
import { Helmet } from "react-helmet"

const Rojo = () => {
  return (
    <div className="rojo">
      <Helmet>
        <title>Rojo Bulldogs</title>
        <meta name="description" content="Rojo Bulldogs" />
      </Helmet>
      <div className="route">You are here : Rojo Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <RojoGrid/>
    </div>
  );
}

export default Rojo
