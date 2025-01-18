import { BiCart, BiDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
      <div className="card">
          <img src='/images/thor.jpg' alt="" />
          <div className="detail">
              <p>Thor</p>
              <p className="price">$8000</p>
          </div>
          <div className="buttons">
              <Link><BiCart className='icon'/> Read More</Link>
              <span>|</span>
              <Link><BiDetail className='icon'/> Show Details</Link>
          </div>
    </div>
  )
}

export default Card
