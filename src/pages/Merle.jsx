import React from 'react'
import MerleGrid from '../components/MerleGrid';

const Merle = () => {
  return (
    <div className='merle'>
      <div className="route">You are here : Merle Bulldogs</div>
      <div className="cover">
        <img src="/images/colors1.jpg" alt="" />
      </div>
      <MerleGrid/>
    </div>
  );
}

export default Merle
