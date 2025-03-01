import React from 'react'
import IsabellaGrid from '../components/IsabellaGrid';
import  { Helmet } from "react-helmet"  

const Isabella = () => {
  return (
    <div className="isabella">
      <Helmet>
        <title>Isabella Bulldogs</title>
        <meta name="description" content="Isabella Bulldogs" />
        </Helmet>
      <div className="route">You are here : Isabella Bulldogs</div>
      <div className="cover">
        <img src="/images/Dogbreed3.jpg" alt="" />
          </div>
          <IsabellaGrid/>
    </div>
  );
}

export default Isabella
