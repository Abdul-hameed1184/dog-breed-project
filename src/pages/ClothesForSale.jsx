import { Helmet } from 'react-helmet';
import React from 'react';

const ClothesForSale = () => {
  return (
    <div className="gear">
      <Helmet>
        <title>Bulldog Clothes</title>
        <meta name="description" content="Bulldog Clothes" />
      </Helmet>
      <div className="route">You are here: Blldog Clothes</div>
      <div className="cover">
        <img src="/images/Dogbreed4.jpg" alt="" />
      </div>
      <div className="content">
        
      </div>
    </div>
  );
}

export default ClothesForSale
