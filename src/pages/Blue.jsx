import React from 'react'
import { Helmet } from 'react-helmet';  
import BlueGrid from '../components/BlueGrid';

const Blue = () => {
  return (
    <div className="blue">
       <Helmet>
              <title>Blue Bulldogs</title>
              <meta name="description" content="Blue Bulldogs." />
        </Helmet>
      <div className="route">You are here : Blue Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed2.jpg" alt="" />
      </div>
      <BlueGrid/>
    </div>
  );
}

export default Blue
