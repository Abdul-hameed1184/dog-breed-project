import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="form">
      <h4>FIND OUT WHEN WE ARE EXPECTING PUPPIES</h4>
      <form>
        <input type="text" placeholder="E-Mail:*" />
        <button>Submit</button>
      </form>
      
      <ul>
        <h3>SOUTHEAST FRENCH LINK</h3>
        <li>
          <Link to={"/available-puppies"}>Available puppies</Link>
        </li>
        <li>
          <Link to={"/programs"}>About our Breeders program</Link>
        </li>
        <li>
          <Link to={"/finance"}>Finance your puppies</Link>
        </li>
        <li>
          <Link>Privacy policies</Link>
        </li>
        <li>
          <Link>Health guarantees</Link>
        </li>
        <li>
          <Link>Terms and condition</Link>
        </li>
      </ul>
    </div>
  );
};

export default Form;
