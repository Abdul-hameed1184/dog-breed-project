import React from 'react'
import LilacGrid from '../components/LilacGrid';
import { Helmet } from "react-helmet"

const Lilac = () => {
  return (
    <div className="lilac">
      <Helmet>
        <title>Lilac Bulldogs</title>
        <meta name="description" content="Lilac Bulldogs" />
      </Helmet>
      <div className="route">You are here : Lilac Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed5.jpg" alt="" />
      </div>
      <LilacGrid/>
    </div>
  );
}

export default Lilac
