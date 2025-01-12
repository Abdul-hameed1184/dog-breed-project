import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="homeCard">
      <Link>
        <img src="/images/Dogbreed1.jpg" alt="" />
        <div className="title">Big Rope French Bulldog</div>
      </Link>
    </div>
  );
};

export default HomeCard;
