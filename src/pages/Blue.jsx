import React from 'react'
import BlueGrid from '../components/BlueGrid';

const Blue = () => {
  return (
    <div className="blue">
      <div className="route">You are here : Blue Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed2.jpg" alt="" />
      </div>
      <BlueGrid/>
    </div>
  );
}

export default Blue
