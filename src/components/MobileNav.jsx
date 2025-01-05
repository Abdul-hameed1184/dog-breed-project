import { useEffect, useRef, useState } from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import { CgChevronDown, CgClose, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import StudServices from "../pages/StudServices";

const MobileNav = () => {
  const navRef = useRef();

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

  return (
    <div className="mobileNav">
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img src="//logo.png" />
          </div>
          <div className="left">
            <BiSearch className="icon" />
            {navbar ? (
              <CgClose className="icon " onClick={showNavbar} />
            ) : (
              <CgMenu className="icon bar" onClick={showNavbar} />
            )}
          </div>
        </div>

        <div className="nav-menu" ref={navRef}>
          <ul>
            <li>
              <Link to={"/"} onClick={() => toggleMenu(1)}>
                French Bulldog Puppies
                <span>
                  {showMenu[1] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[1] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> path = {location.pathname}
                  </li>
                  <li>
                    <span>-</span> Future litter reservation deposit
                  </li>
                  <li>
                    <span>-</span> Puppy waiting list
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link to={"/contacts"} onClick={() => toggleMenu(2)}>
                Contact
                <span>
                  {showMenu[2] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[2] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> contact southeast frenchies
                  </li>
                  <li>
                    <span>-</span> sample puppy contract
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link onClick={() => toggleMenu(3)} to={"/french-bulldog-colors"}>
                French Bulldog Colors
                <span>
                  {showMenu[3] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[3] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> Rare French BUlldog colors
                  </li>
                  <li>
                    <span>-</span> Blue
                  </li>
                  <li>
                    <span>-</span> Merle
                  </li>
                  <li>
                    <span>-</span> Fluffy
                  </li>
                  <li>
                    <span>-</span> Isabella
                  </li>
                  <li>
                    <span>-</span> Lilac
                  </li>
                  <li>
                    <span>-</span> Platinum
                  </li>
                  <li>
                    <span>-</span> Rojo
                  </li>
                  <li>
                    <span>-</span> Big Rope
                  </li>
                  <li>
                    <span>-</span> Chocolate french bulldog puppies
                  </li>
                  <li>
                    <span>-</span> Cream frenchies
                  </li>
                  <li>
                    <span>-</span> Black frenchies
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
            </li>
            <li>
              <Link onClick={() => toggleMenu(4)} to={"/programs"}>
                Our Program
                <span>
                  {showMenu[4] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[4] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> Frequently Asked Questions
                  </li>
                  <li>
                    <span>-</span> About Southeast French Bulldog
                  </li>
                  <li>
                    <span>-</span> Southeast French Bulldog Reviews
                  </li>
                  <li>
                    <span>-</span> Past Frenchies Puppies
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link onClick={() => toggleMenu(5)} to={"/finance"}>
                Finance
                <span>
                  {showMenu[5] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[5] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> French Bulldog Finance Company
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link onClick={() => toggleMenu(6)} to={"/stud-services"}>
                Stud Services
                <span>
                  {showMenu[6] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[6] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> French Bulldog French Services
                  </li>
                  <li>
                    <span>-</span> French Bulldog Stock Lock In
                  </li>
                  <li>
                    <span>-</span> Goober Rojo Cherry tan tricolor merle
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link onClick={() => toggleMenu(7)} to={"/"}>
                HOME
                <span>
                  {showMenu[7] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[7] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> Home
                  </li>
                  <li>
                    <span>-</span> Frenchies Blog
                  </li>
                  <li>
                    <span>-</span> Frenchies puppy for Sale
                  </li>
                  <li>
                    <span>-</span> French Bulldogs for sale
                  </li>
                  <li>
                    <span>-</span> Frenchies for sale
                  </li>
                  <li>
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
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link onClick={() => toggleMenu(8)} to={"/gear"}>
                Gear
                <span>
                  {showMenu[8] ? <CgChevronDown /> : <BiChevronRight />}
                </span>
              </Link>
              {showMenu[8] ? (
                <ul className="showMenu">
                  <li>
                    <span>-</span> French Leash & Harness
                  </li>
                  <li>
                    <span>-</span> French Bulldog Clothes for sale
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
