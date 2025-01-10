import React from 'react'
import FrenchiesGrid from '../components/FrenchiesGrid';

function Frenchies() {
  return (
    <div className="frenchies">
      <div className="route">You are Here: Frenchies </div>
      <div className="content">
        <div className="top">
          <img src="" alt="" />
          <h1>FRENCHIES FOR SALE</h1>
          <p>
            Searching for the best Frenchie puppies for sale? Once you’ve found
            the right French bulldog breeder you must consider your budget which
            will determine what color Frenchie you will purchase. Normally we
            consider our customers’ budget as very important as it will limit,
            or provide no limit to the rare Frenchie colors you can choose from.
            The more rare the frenchie, the more expensive the parents costs,
            which then determines puppy cost. Next, consider Fluffy French
            bulldog puppies or standard short coat length. Fluffy Frenchies for
            sale are beautiful and rare, but also more expensive because of
            their rareness.
          </p>
          <h2>Finding the right Frenchie for sale</h2>
          <p>
            If you are searching for some of the world’s best Frenchies for sale
            you’ve come to the right place! Most importantly, 100% of our
            Frenchie puppies for sale are born from top quality parents
            featuring top DNA, Structure, and Temperament.
          </p>
              </div>
              <FrenchiesGrid/>
      </div>
    </div>
  );
}

export default Frenchies