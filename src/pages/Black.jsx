import React from 'react'
import BlackGrid from '../components/BlackGrid';

const Black = () => {
  return (
    <div className="black">
      <div className="route">You are here : Black Bulldogs</div>
      <div className="cover">
        <img src="/images/colors1.jpg" alt="" />
      </div>
      <BlackGrid/>
    </div>
  );
}

export default Black
