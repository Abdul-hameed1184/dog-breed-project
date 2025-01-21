import { useEffect, useRef, useState } from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { CgChevronDown, CgClose, CgMenu } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const navRef = useRef();
  const location = useLocation();
  const [navbar, setnavbar] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_bar");

    setnavbar(!navbar);
  };

  const [showMenu, setShowMenu] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const toggleMenu = (id) => {
    setShowMenu((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // const stayMenu = (id) => {
  //     setShowMenu((prevState) => ({
  //       ...prevState,
  //       [id]: !prevState[id],
  //     }));
  // };
  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    navRef.current.classList.remove("responsive_bar");
    window.scrollTo(0, 0);
    setnavbar(false);
    setShowMenu({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    });
  }, [location.pathname]);
  const openPdf = (event) => {
    event.preventDefault(); // Prevents the default behavior of the link
    window.open(
      "/designerfrenchbulldogscontract.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mobileNav">
      <nav>
        <div className="nav-container">
          <BiSearch className="search" />
          <div className="logo">
            <img src="/images/logo.png" />
          </div>
          
            {navbar ? (
              <CgClose className="icon " onClick={showNavbar} />
            ) : (
              <CgMenu className="icon bar" onClick={showNavbar} />
            )}
            
              
            
                <div className="nav-menu" ref={navRef}>
                  <ul>
                    <li>
                      <Link
                        to={"/available-puppies"}
                        onClick={() => console.log(location)}
                      >
                        French Bulldog Puppies
                      </Link>
                      <span>
                        {showMenu[1] ? (
                          <CgChevronDown onClick={() => toggleMenu(1)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(1)} />
                        )}
                      </span>
                      {showMenu[1] ? (
                        <ul className="showMenu">
                          <li>
                            <span>-</span>
                            <Link to={"/available-puppies"}>
                              Available French Bullog
                            </Link>
                          </li>
                          <li>
                            <Link to={"/future-litter"}>
                              <span>-</span> Future litter reservation deposit
                            </Link>
                          </li>
                          <li>
                            <span>-</span>
                            <Link to={"/puppies-wait-list"}>
                              Puppy waiting list
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </li>
                    <li>
                      <Link to={"/contacts"}>Contact</Link>
                      <span>
                        {showMenu[2] ? (
                          <CgChevronDown onClick={() => toggleMenu(2)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(2)} />
                        )}
                      </span>
                      {showMenu[2] ? (
                        <ul className="showMenu">
                          <li>
                            <Link to={"/contacts/#top"}>
                              <span>-</span> contact southeast frenchies
                            </Link>
                          </li>
                          <li>
                            <Link onClick={openPdf}>
                              <span>-</span> sample puppy contract
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </li>
                    {/* <li>
                      <Link to={"/french-bulldog-colors"}>
                        French Bulldog Colors
                      </Link>
                      <span>
                        {showMenu[3] ? (
                          <CgChevronDown onClick={() => toggleMenu(3)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(3)} />
                        )}
                      </span>
                      {showMenu[3] ? (
                <ul className="showMenu">
                          <li>
                            <Link to={"/rare-french-bulldog-colors"}>
                    <span>-</span> Rare French BUlldog colors</Link>
                  </li>
                          <li>
                            <Link to={"/blue-bulldog-colors"}>
                    <span>-</span> Blue</Link>
                  </li>
                          <li>
                            <Link to={"/merle-bulldog"}>
                    <span>-</span> Merle</Link>
                  </li>
                          <li>
                            <Link to={"/fluffy-bulldog"}>
                    <span>-</span> Fluffy</Link>
                  </li>
                          <li>
                            <Link to={"/isabella-bulldog"}>
                    <span>-</span> Isabella</Link>
                  </li>
                          <li>
                            <Link to={"/lilac-bulldog"}>
                    <span>-</span> Lilac</Link>
                  </li>
                          <li>
                            <Link to={"/platinum-bulldog"}>
                    <span>-</span> Platinum</Link>
                  </li>
                          <li>
                            <Link to={"/rojo-bulldog"}>
                    <span>-</span> Rojo</Link>
                  </li>
                  <li>
                    <span>-</span> Big Rope
                  </li>
                          <li>
                            <Link to={"/chocolate-bulldog"}>
                    <span>-</span> Chocolate french bulldog puppies</Link>
                  </li>
                          <li>
                            <Link to={"/cream-bulldog"}>
                    <span>-</span> Cream frenchies</Link>
                  </li>
                          <li>
                            <Link to={"/black-bulldog"}>
                    <span>-</span> Black frenchies</Link>
                  </li>
                  <li>
                    <span>-</span> Frenchies bulldog cbreeders
                  </li>
                  <li>
                    <span>-</span> Black and tan frenchies
                  </li>
                  <li>
                    <span>-</span> Brindle g=french buldogs
                  </li>
                  <li>
                    <span>-</span> Fawn french Bulldogs
                  </li>
                </ul>
              ) : null}
                    </li> */}
                    {/* <li>
                      <Link to={"/programs"}>Our Program</Link>
                      <span>
                        {showMenu[4] ? (
                          <CgChevronDown onClick={() => toggleMenu(4)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(4)} />
                        )}
                      </span>
                      {showMenu[4] ? (
                        <ul className="showMenu">
                          <li>
                            <Link to={"/FAQ"}>
                              <span>-</span> Frequently Asked Questions
                            </Link>
                          </li>
                          <li>
                            <Link to={"/programs/#top"}>
                              <span>-</span> About Southeast French Bulldog
                            </Link>
                          </li>
                          <li>
                            <Link to={"/reviews"}>
                              <span>-</span> Southeast French Bulldog Reviews
                            </Link>
                          </li>
                          <li>
                            <span>-</span> Past Frenchies Puppies
                          </li>
                        </ul>
                      ) : null}
                    </li> */}
                    {/* <li>
                      <Link to={"/finance"}>Finance</Link>
                      <span>
                        {showMenu[5] ? (
                          <CgChevronDown onClick={() => toggleMenu(5)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(5)} />
                        )}
                      </span>
                      {showMenu[5] ? (
                        <ul className="showMenu">
                          <li>
                            <Link to={"/finance/#top"}>
                              <span>-</span> Bulldog Finance Company
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </li> */}
                    <li>
                      <Link to={"/stud-services"}>Stud Services</Link>
                      <span>
                        {showMenu[6] ? (
                          <CgChevronDown onClick={() => toggleMenu(6)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(6)} />
                        )}
                      </span>
                      {showMenu[6] ? (
                        <ul className="showMenu">
                          <li>
                            <Link to={"/stud-services/#top"}>
                              <span>-</span> French Bulldog French Services
                            </Link>
                          </li>
                          <li>
                            <Link to={"/stud-lock-in"}>
                              <span>-</span> French Bulldog Stock Lock In
                            </Link>
                          </li>
                          {/* <li>
                            <Link to={"/rojo-tan-tricolor"}>
                              <span>-</span> Goober Rojo Cherry tan tricolor
                              merle
                            </Link>
                          </li> */}
                        </ul>
                      ) : null}
                    </li>
                    <li>
                      <Link to={"/"}>HOME</Link>
                      <span>
                        {showMenu[7] ? (
                          <CgChevronDown onClick={() => toggleMenu(7)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(7)} />
                        )}
                      </span>
                      {showMenu[7] ? (
                        <ul className="showMenu">
                          <li>
                            <Link to={"/#top"}>
                              <span>-</span> Home
                            </Link>
                          </li>
                          <li>
                            <span>-</span> Frenchies Blog
                          </li>
                          <li>
                            <Link to={"/puppy-for-sale"}>
                              <span>-</span> Frenchies puppy for Sale
                            </Link>
                          </li>
                          <li>
                            <Link to={"/bulldog-for-sale"}>
                              <span>-</span> French Bulldogs for sale
                            </Link>
                          </li>
                          <li>
                            <Link to={"frenchies-for-sale"}>
                              <span>-</span> Frenchies for sale
                            </Link>
                          </li>
                          {/* <li>
                    <span>-</span> French Bulldog Prices
                  </li>
                  <li>
                    <span>-</span> French Bulldog babies
                  </li>
                  <li>
                    <span>-</span> Frenchies for sale Tampa
                  </li>
                  <li>
                    <span>-</span> French Bulldog puppies for sale GA
                  </li>
                  <li>
                    <span>-</span> French bulldog for sale FL
                  </li>
                  <li>
                    <span>-</span> Bab Frenchie pictures
                  </li> */}
                        </ul>
                      ) : null}
                    </li>
                    <li>
                      <Link to={"/gear"}>Merchandise</Link>
                      <span>
                        {showMenu[8] ? (
                          <CgChevronDown onClick={() => toggleMenu(8)} />
                        ) : (
                          <BiChevronRight onClick={() => toggleMenu(8)} />
                        )}
                      </span>
                      {showMenu[8] ? (
                        <ul className="showMenu">
                          {/* <li>
                            <Link to={"/leashes"}>
                              <span>-</span> French Leash & Harness
                            </Link>
                          </li>
                          <li>
                            <Link to={"/gear/#top"}>
                              <span>-</span> Frenchies cloth for sale
                            </Link>
                          </li>
                          <li>
                            <Link to={"/baby-clothes-for-sale"}>
                              <span>-</span> Baby french bulldog clothes
                            </Link>
                          </li>
                          <li>
                            <Link to={"/french-bulldog-prices"}>
                              <span>-</span> French bulldog clothes
                            </Link>
                          </li>  */}
                        </ul>
                      ) : null}
                    </li>
                  </ul>
                </div>
          </div>
      </nav>
    </div>
  );
};

export default MobileNav;
