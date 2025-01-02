import { Link } from "react-router-dom";
import { useRef } from "react";
// import HomeDropdown from "./HomeDropdown";

const Routes = () => {
  const navRef = useRef();
  const navRef2 = useRef();
  const navRef3 = useRef();
  const navRef4 = useRef();
  const navRef5 = useRef();
  const navRef6 = useRef();
  const navRef7 = useRef();
  const navRef8 = useRef();
  // const showRef8 = useRef();
  const handleMouseEnter = () => {
    navRef.current.classList.toggle("visible");
  };
  const handleMouseLeave = () => {
    navRef.current.classList.remove("visible");
  };
  const handleMouseEnter2 = () => {
    navRef2.current.classList.toggle("visible");
  };
  const handleMouseLeave2 = () => {
    navRef2.current.classList.remove("visible");
  };
  const handleMouseEnter3 = () => {
    navRef3.current.classList.toggle("visible");
  };
  const handleMouseLeave3 = () => {
    navRef3.current.classList.remove("visible");
  };
  const handleMouseEnter4 = () => {
    navRef4.current.classList.toggle("visible");
  };
  const handleMouseLeave4 = () => {
    navRef4.current.classList.remove("visible");
  };
  const handleMouseEnter5 = () => {
    navRef5.current.classList.toggle("visible");
  };
  const handleMouseLeave5 = () => {
    navRef5.current.classList.remove("visible");
  };
  const handleMouseEnter6 = () => {
    navRef6.current.classList.toggle("visible");
  };
  const handleMouseLeave6 = () => {
    navRef6.current.classList.remove("visible");
  };
  const handleMouseEnter7 = () => {
    navRef7.current.classList.toggle("visible");
  };
  const handleMouseLeave7 = () => {
    navRef7.current.classList.remove("visible");
  };
  const handleMouseEnter8 = () => {
    navRef8.current.classList.toggle("visible");
  };
  const handleMouseLeave8 = () => {
    navRef8.current.classList.remove("visible");
  };
  
  
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <div className="main-nav">
              <ul className="nav-body">
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter} to={'/Bulldog-puppies'}>
                    French Bulldog Puppies
                  </Link>
                  <ul
                    className="sub-menu1"
                    ref={navRef}
                    onMouseLeave={handleMouseLeave}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter2} to={"/contacts"}>
                    contacts
                  </Link>
                  <ul
                    className="sub-menu2"
                    ref={navRef2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link
                    onMouseEnter={handleMouseEnter3}
                    to={"/french-bulldog-colors"}
                  >
                    French Bulldog Colors
                  </Link>
                  <ul
                    className="sub-menu3"
                    ref={navRef3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter4} to={"/programs"}>
                    Our Programs
                  </Link>
                  <ul
                    className="sub-menu4"
                    ref={navRef4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter5} to={"/finance"}>
                    Finance
                  </Link>
                  <ul
                    className="sub-menu5"
                    ref={navRef5}
                    onMouseLeave={handleMouseLeave5}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter6} to={"/stud-services"}>
                    Stud Services
                  </Link>
                  <ul
                    className="sub-menu6"
                    ref={navRef6}
                    onMouseLeave={handleMouseLeave6}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter7} to={"/"}>
                    HOME
                  </Link>
                  <ul
                    className="sub-menu7"
                    ref={navRef7}
                    onMouseLeave={handleMouseLeave7}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <Link onMouseEnter={handleMouseEnter8} to={"/gear"}>
                    Gear
                  </Link>
                  <ul
                    className="sub-menu8"
                    ref={navRef8}
                    onMouseLeave={handleMouseLeave8}
                  >
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                    <li>option1 </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <ul className="routes">
        <li>French Bulldog Puppies</li>
        <span>|</span>
        <Link to={"/contacts"}>
          <li>contacts</li>
        </Link>
        <span>|</span>
        <Link to={"/french-bulldog-colors"}>
          <li>French Bulldog colors</li>
        </Link>
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
        <Link
          to="/"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <li>HOME</li>
          {visibleDropdown === "home" && renderDropdown("home")}
        </Link>
        <span>|</span>
        <Link to={"/gear"}>
          <li>Gear</li>
        </Link>
      </ul> */}
    </>
  );
};

export default Routes;
