import { Link } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <ul className="routes">
        <li>French Bulldog Puppies</li>
        <span>|</span>
        <Link to={"/contacts"}>
          <li>contacts</li>
        </Link>
        <span>|</span>
        <li>French Bulldog colors</li>
        <span>|</span>
        <Link to={"/programs"}>
        <li>our program</li>
        </Link>
        <span>|</span>
        <Link to={"/finance"}>
          <li>Finance</li>
        </Link>
        <span>|</span>
        <Link to={"/stud-services"}>
          <li>Stud Service</li>
        </Link>
        <span>|</span>
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <span>|</span>
        <Link to={"/gear"}>
          <li>Gear</li>
        </Link>
        {/* <li>
            <Link>French Bull Puppies</Link>
          </li>
          <li>
            <Link>French Bull Puppies</Link>
          </li>
          <li>
            <Link>French Bull Puppies</Link>
          </li>
          <li>
            <Link>French Bull Puppies</Link>
          </li>
          <li>
            <Link>French Bull Puppies</Link>
          </li>
          <li>
            <Link>French Bull Puppies</Link>
          </li>
          <li>
            <Link>French Bull Puppies</Link>
          </li> */}
      </ul>
    </>
  );
};

export default Routes;
