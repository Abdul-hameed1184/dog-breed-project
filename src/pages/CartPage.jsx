import React, { useState } from 'react'
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CartPage = () => {
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
    <div className="cartPage">
      <div className="route">You are here: Home / cart</div>
      <div className="product-container">
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th className="icon-column"></th>
              <th  className='pics'></th>
              <th className="product">PRODUCT</th>
              <th className="price">PRICE</th>
              <th className="quantity">QUANTITY</th>
              <th className="total">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="icon-column">
                <BiX />
              </td>
              <td className="pics">
                <img src="images/leash7.jpg" alt="" />
              </td>
              <td className="product">
                <Link>Yogawear French Bulldog Harness - graphite</Link>
              </td>
              <td className="price">$50,000</td>
              <td className="quantity">
                <div className="action">
                  <button className="decrement" onClick={decrement}>
                    -
                  </button>
                  <span>{number}</span>
                  <button className="increment" onClick={increment}>
                    +
                  </button>
                </div>
              </td>
              <td className="total">$50,000</td>
            </tr>
            <tr>
              <td className="icon-column">
                <BiX />
              </td>
              <td className="pics">
                <img src="images/leash7.jpg" alt="" />
              </td>
              <td className="product">
                {" "}
                <Link>Yogawear French Bulldog Harness - graphite</Link>
              </td>
              <td className="price">$50,000</td>
              <td className="quantity">
                <div className="action">
                  <button className="decrement" onClick={decrement}>
                    -
                  </button>
                  <span>{number}</span>
                  <button className="increment" onClick={increment}>
                    +
                  </button>
                </div>
              </td>
              <td className="total">$50,000</td>
            </tr>
            <tr>
              <td className="icon-column">
                <BiX />
              </td>
              <td className="pics">
                <img src="images/leash7.jpg" alt="" />
              </td>
              <td className="product">
                {" "}
                <Link>Yogawear French Bulldog Harness - graphite</Link>
              </td>
              <td className="price">$50,000</td>
              <td className="quantity">
                <div className="action">
                  <button className="decrement" onClick={decrement}>
                    -
                  </button>
                  <span>{number}</span>
                  <button className="increment" onClick={increment}>
                    +
                  </button>
                </div>
              </td>
              <td className="total">$50,000</td>
            </tr>
            <tr>
              <td colSpan="6" className="bottom">
                <div className="bottom-container">
                  <div className="coupon">
                    <input type="text" placeholder="coupon code" />
                    <button>Apply Coupon</button>
                  </div>
                  <div className="update">
                    <button>UpdateCart</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table border="1" className="sub-total">
          <thead>
            <tr>
              <th className="title">SUBTOTAL</th>
              <th>$50,000</th>
              {/* <th>Column 3</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="title">SHIPPING</td>
              <td>
                <div>
                  <p className="rate">
                    Flat rate Ground Shipping: <span>$14.95</span>
                  </p>
                  <p className="ship">Shipping to <span>HJ</span></p>
                  <Link>Change Address</Link>
                </div>
              </td>
              {/* <td>Row 1, Col 3</td> */}
            </tr>
            <tr>
              <td className="title">TOTAL</td>
              <td>$50,014.95</td>
              {/* <td>Row 2, Col 3</td> */}
            </tr>
          </tbody>
        </table>
        <button className='proceed'>Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default CartPage
