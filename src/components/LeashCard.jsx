import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const LeashCard = () => {
  return (
    <div className="leashCard">
      <img src="/images/Dogbreed3.jpg" alt="" />
      <div className="detail">
        <p>Lorem ipsum dolor sit amet.</p>
        <p className="price">$5,000</p>
      </div>
      <div className="buttons">
        <Link>
          <BiCart /> Select Option{" "}
        </Link>
      </div>
    </div>
  );
};

export default LeashCard;
