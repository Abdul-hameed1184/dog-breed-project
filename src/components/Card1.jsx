import { BiCart, BiDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Card1 = () => {
  return (
    <div className="card">
          <img src='/images/Dogbreed6.jpg' alt="" />
          <div className="detail">
              <p>French Bulldog puppy balance</p>
              <p className="price">$2,500</p>
          </div>
          <div className="buttons">
              <Link><BiCart className='icon'/> Read More</Link>
              <span>|</span>
              <Link><BiDetail className='icon'/> Show Details</Link>
          </div>
    </div>
  )
}

export default Card1