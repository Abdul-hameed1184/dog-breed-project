import React from 'react'
import FluffyGrid from '../components/FluffyGrid';
import { Helmet } from 'react-helmet';

const Fluffy = () => {
  return (
    <div className="fluffy">
      <Helmet>
        <title>Fluffy Bulldogs</title>
        <meta name="description" content="Fluffy Bulldogs" />
        </Helmet>
      <div className="route">You are here : Fluffy Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
          </div>
          <FluffyGrid/>
    </div>
  );
}

export default Fluffy
