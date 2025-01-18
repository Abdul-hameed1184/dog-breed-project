import { Link } from "react-router-dom";
import { useRef } from "react";
// import HomeDropdown from "./HomeDropdown";

const Routes = () => {
  const navRef = useRef();
  const navRef2 = useRef();
  // const navRef3 = useRef();
  // const navRef4 = useRef();
  // const navRef5 = useRef();
  const navRef6 = useRef();
  const navRef7 = useRef();
  const navRef8 = useRef();

  const subRef1 = useRef();

  // const showRef8 = useRef();
  const handleMouseEnter = () => {
    navRef.current.classList.add("visible");
  };
  const handleMouseLeave = () => {
    navRef.current.classList.remove("visible");
  };
  const handleMouseEnter2 = () => {
    navRef2.current.classList.add("visible");
  };
  const handleMouseLeave2 = () => {
    navRef2.current.classList.remove("visible");
  };
  // const handleMouseEnter3 = () => {
  //   navRef3.current.classList.add("visible");
  // };
  // const handleMouseLeave3 = () => {
  //   navRef3.current.classList.remove("visible");
  // };
  // const handleMouseEnter4 = () => {
  //   navRef4.current.classList.add("visible");
  // };
  // const handleMouseLeave4 = () => {
  //   navRef4.current.classList.remove("visible");
  // };
  // const handleMouseEnter5 = () => {
  //   navRef5.current.classList.add("visible");
  // };
  // const handleMouseLeave5 = () => {
  //   navRef5.current.classList.remove("visible");
  // };
  const handleMouseEnter6 = () => {
    navRef6.current.classList.add("visible");
  };
  const handleMouseLeave6 = () => {
    navRef6.current.classList.remove("visible");
  };
  const handleMouseEnter7 = () => {
    navRef7.current.classList.add("visible");
  };
  const handleMouseLeave7 = () => {
    navRef7.current.classList.remove("visible");
  };
  const handleMouseEnter8 = () => {
    navRef8.current.classList.add("visible");
  };
  const handleMouseLeave8 = () => {
    navRef8.current.classList.remove("visible");
  };

  const handleMouseEnterSub1 = () => {
    subRef1.current.classList.add("visible");
  };
  const handleMouseLeaveSub1 = () => {
    subRef1.current.classList.remove("visible");
  };

   const openPdf = (event) => {
     event.preventDefault(); // Prevents the default behavior of the link
     window.open(
       "/designerfrenchbulldogscontract.pdf",
       "_blank",
       "noopener,noreferrer"
     );
   };

  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <div className="main-nav">
              <ul className="nav-body">
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={"#"}>French Bulldog Puppies</Link>
                    <ul className="sub-menu1" ref={navRef}>
                      <li>
                        <Link to={"/available-puppies"}>
                          Available French Bulldog Puppies
                        </Link>
                      </li> 
                      <li>
                        <Link to={"/future-litter"}>
                          Future litter reservation deposit
                        </Link>
                      </li>
                      <li>
                        <Link to={"/puppies-wait-list"}>
                          puppy waiting list
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <Link to={"/contacts"}>contacts</Link>
                    <ul className="sub-menu2" ref={navRef2}>
                      <li>
                        <Link to={"/contacts/#top"}>
                          Contact SouthEast Elite  Frenchies
                        </Link>
                      </li>
                      <li>
                        <Link onClick={openPdf}>Sample Puppy Contract</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              
                
                {/*   <span>|</span>
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <Link to={"/french-bulldog-colors"}>
                      French Bulldog Colors
                    </Link>
                    <ul className="sub-menu4" ref={navRef3}>
                      <li>
                        <Link to={"/rare-french-bulldog-colors"}>
                          Rare frenchies Bulldog Colors
                        </Link>
                      </li>
                      <li>
                        <Link to={"/blue-bulldog-colors"}> Blue</Link>
                      </li>
                      <li>
                        <Link to={"/merle-bulldog"}>Merle</Link>
                      </li>
                      <li>
                        <Link to={"/fluffy-bulldog"}>Fluffy</Link>
                      </li>
                      <li>
                        <Link to={"/isabella-bulldog"}>Isabella</Link>
                      </li>
                      <li>
                        <Link to={"/lilac-bulldog"}>Lilac</Link>
                      </li>
                      <li>
                        <Link to={"/platinum-bulldog"}>Platinum</Link>
                      </li>
                      <li>
                        <Link to={"/rojo-bulldog"}>Rojo </Link>
                      </li>
                       <li>
                        <Link to={"/big-rope-bulldog"}>Big Rope</Link>
                      </li> 
                      <li>
                        <Link to={"/chocolate-bulldog"}>
                          Chocolate Frenchies Bulldog Puppies for Sale
                        </Link>
                      </li>
                      <li>
                        <Link to={"/cream-bulldog"}>Cream Frenchies</Link>
                      </li>
                      <li>
                        <Link to={"/black-bulldog"}>Black Frenchies</Link>
                      </li>


                       <li>
                        <Link>Brindle French Bulldogs </Link>
                      </li>
                      <li>
                        <Link>Fawn French Bulldog</Link>
                      </li> 
                    </ul>
                  </div>
                </li> */}
                {/* <span>|</span>
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <Link to={"/programs"}>Our Programs</Link>
                    <ul className="sub-menu4" ref={navRef4}>
                      <li>
                        <Link to={"/FAQ"}>Frequently Asked Questions </Link>
                      </li>
                      <li>
                        <Link to={"/programs/#top"}>
                          About Southeast French Bulldog
                        </Link>
                      </li>
                      <li>
                        <Link to={"/reviews"}>
                          Southeast French Bulldog Reviews
                        </Link>
                      </li>
                      <li>Past Frenchies Puppies </li>
                    </ul>
                  </div>
                </li>
                <span>|</span>

                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                  >
                    <Link to={"/finance"}>Finance</Link>
                    <ul className="sub-menu5" ref={navRef5}>
                      <li>
                        <Link to={"/finance/#top"}>
                          Bulldog Finance Company
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li> */}
                <span>|</span>
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                  >
                    <Link to={"/stud-services"}>Stud Services</Link>
                    <ul className="sub-menu6" ref={navRef6}>
                      <li>
                        <Link to={"/stud-services/#top"}>
                          French Bulldog Stud Services
                        </Link>
                      </li>
                      <li>
                        <Link to={"/stud-lock-in"}>
                          French Bulldog Stud Lock in
                        </Link>
                      </li>
                      <li>
                        <Link to={"/rojo-tan-tricolor"}>
                          Goober Rocho Cherry Tan Tricolor
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <span>|</span>
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter7}
                    onMouseLeave={handleMouseLeave7}
                  >
                    <Link to={"/"}>HOME</Link>
                    <ul className="sub-menu7" ref={navRef7}>
                      <li>
                        {" "}
                        <Link to={"/#top"}>HOME </Link>
                      </li>
                      <li>frenchies blog </li>

                      <li>
                        <Link to={"/puppy-for-sale"}>
                          French puppy for sale
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/bulldog-for-sale"}>
                          {" "}
                          French Bulldog for sale
                        </Link>{" "}
                      </li>
                      <li>
                        <Link to={"frenchies-for-sale"}>
                          Frenchies for sale
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </li>
                 <span>|</span>
                <li className="nav-list">
                  <div
                    onMouseEnter={handleMouseEnter8}
                    onMouseLeave={handleMouseLeave8}
                  >
                    <Link to={"/gear"}>Gear</Link>
                    <ul className="sub-menu8" ref={navRef8}>
                      <li>
                        <Link to={"/leashes"}>
                          Frenchies Leashes and Harness
                        </Link>
                      </li>
                      <li
                        onMouseEnter={handleMouseEnterSub1}
                        onMouseLeave={handleMouseLeaveSub1}
                      >
                        <Link to={"#"}>French Bulldog Clothes for sale</Link>
                        <ul className="sub-sub-menu" ref={subRef1}>
                          <li>
                            <Link to={"/gear/#top"}>
                              Frenchies cloth for sale
                            </Link>
                          </li>
                          <li>
                            <Link to={"/baby-clothes-for-sale"}>
                              Baby french bulldog clothes
                            </Link>
                          </li>
                          <li>
                            <Link to={"/french-bulldog-prices"}>
                              French bulldog clothes
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
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
