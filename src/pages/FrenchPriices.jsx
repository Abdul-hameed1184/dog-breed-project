import React from 'react'
import PricesGrid from '../components/PricesGrid'
import Contact from '../components/Contact'
import PriceesGrid2 from '../components/PriceesGrid2'
import { Helmet } from 'react-helmet'

const FrenchPrices = () => {
  return (
    <div className='frenchPrices'>
      <Helmet>
        <title>French Bulldog Prices</title>
        <meta name="description" content="French Bulldog Prices" />
      </Helmet>
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
