import React from 'react'
import PricesGrid from '../components/PricesGrid'
import Contact from '../components/Contact'
import PriceesGrid2 from '../components/PriceesGrid2'

const FrenchPrices = () => {
  return (
    <div className='frenchPrices'>
          <div className="route">You are here: French bulldog Prices</div>
              <div className="cover">
                  <img src="" alt="" />
              </div>
          <div className="container">
              <PricesGrid />
              <Contact />
              <PriceesGrid2/>
          </div>
    </div>
  )
}

export default FrenchPrices
