import React from 'react'
import BlackGrid from '../components/BlackGrid';

const Black = () => {
  return (
    <div className="black">
        <Helmet>
        <title>Black Bulldogs</title>
        <meta name="description" content="Black Bulldogs" />
      </Helmet>
      <div className="route">You are here : Black Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <BlackGrid/>
    </div>
  );
}

export default Black
