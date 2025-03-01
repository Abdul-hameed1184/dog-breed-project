import React from 'react'
import { Helmet } from 'react-helmet';  

const BulldogPuppies = () => {
  return (
    <div className="bulldogPuppies">
      <Helmet>
        <title>Bulldog Puppies</title>
        <meta name="description" content="Bulldog Puppies" />
      </Helmet>
      <div className="route">You are here :  Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed3.jpg" alt="" />
      </div>
    </div>
  );
}

export default BulldogPuppies
