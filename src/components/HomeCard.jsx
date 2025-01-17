import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="homeCard">
      <Link>
        <img src="/images/Dogbreed8.jpg" alt="" style={{ width: "250px", height: "300px" }}  />
        <div className="title" style={{ marginRight: "100px"}}>Big Rope French Bulldog</div>
      </Link>
    </div>
  );
};

export default HomeCard;
