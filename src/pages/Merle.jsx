import React from 'react'
import MerleGrid from '../components/MerleGrid';

const Merle = () => {
  return (
    <div className='merle'>
      <Helmet>
        <title>Merle Bulldogs</title>
        <meta name="description" content="Merle Bulldogs" />
      </Helmet>
      <div className="route">You are here : Merle Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed5.jpg" alt="" />
      </div>
      <MerleGrid/>
    </div>
  );
}

export default Merle
