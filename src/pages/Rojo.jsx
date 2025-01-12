import React from 'react'
import RojoGrid from '../components/RojoGrid';

const Rojo = () => {
  return (
    <div className="rojo">
      <div className="route">You are here : Rojo Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <RojoGrid/>
    </div>
  );
}

export default Rojo
