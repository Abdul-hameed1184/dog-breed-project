import { Link } from 'react-router-dom'

const HomeCard = () => {
  return (
      <div className="homeCard">
          <Link>
          <img src="src/assets/images/big-rope-Frenchie-14.jpg" alt="" />
          <div className="title">Big Rope French Bulldog</div>
          </Link>
    </div>
  )
}

export default HomeCard