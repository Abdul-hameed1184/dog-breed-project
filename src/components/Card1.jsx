// filepath: /c:/Users/SK_PROJECTS/Desktop/dog-breed-project/src/components/Card1.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { BiCart, BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Card1 = () => {
  return (
    <div className="card">
      <Helmet>
        <title>Manic Jr - French Bulldogs</title>
        <meta name="description" content="Manic Jr - $1,500. Available French Bulldog." />
      </Helmet>
      <img src='/images/manic.jpg' alt="Manic Jr" />
      <div className="detail">
        <p>Manic Jr</p>
        <p className="price">$1,500</p>
      </div>
      <div className="buttons">
        <Link><BiCart className='icon'/> Read More</Link>
        <span>|</span>
        <Link><BiDetail className='icon'/> Show Details</Link>
      </div>
    </div>
  );
};

export default Card1;