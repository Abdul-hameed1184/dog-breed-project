import React from 'react'
import ChocolateGrid from '../components/ChocolateGrid';

const Chocolate = () => {
  return (
    <div className="chocolate">
      <div className="route">You are here : Chocolate Bulldogs</div>
      <div className="cover">
        <img src="images/Dogbreed1.jpg" alt="" />
      </div>
      <ChocolateGrid />
    </div>
  );
}

export default Chocolate
