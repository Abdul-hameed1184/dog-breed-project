import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const PreviewGrid = ({ product }) => {
    const products = product
    const [number, setnumber] = useState(1);
    const increment = () => {
        setnumber(number+ 1)
    }
    const decrement = () => {
        if (number >= 2) {
            setnumber(number-1)
        }
    }
  return (
    <div className="previewGrid">
      <div className="left">
        <img src="images/thor.jpg" alt="" />
      </div>
      <div className="right">
        <h1>{products}</h1>
        <p className="review">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <span>(4 customer reviewed)</span>
        </p>
        <p className="price">$5,000</p>
        <p>
          Lock in Fee towards for one of our Studs here at SouthEast Elite French
          Bulldogs.
        </p>
        <div className="buttons">
          <div className="action">
            <button className="decrement" onClick={decrement}>
              -
            </button>
            <span>{number}</span>
            <button className="increment" onClick={increment}>
              +
            </button>
          </div>
          <button>Add to cart</button>
        </div>
        <div className="category">
          <p>
            category :
            <span>
               best Frenchie Stud, Big Rope French bulldog stud, Big Rope
              Frenchie Stud, Fluffy French Bulldog stud, Fluffy Frenchie Stud,
              French bulldog stud, French Bulldog stud near me, French Bulldog
              Stud Service, Frenchie stud, Frenchie stud service
            </span>
          </p>
          <p>
            Tags :
            <span>
              
              Fluffy French Bulldog Stud, French bulldog stud, French bulldog
              stud for sale, French bulldog stud service, French Bulldog Studs,
              Frenchie Stud near me, Frenchie Stud Service, Frenchie stud
              service near me, Frenchie studs near me, Isabella French Bulldog
              Stud, Lilac French Bulldog Stude, Rojo French Bulldog Stud, Rojo
              Frenchie Stud
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreviewGrid
