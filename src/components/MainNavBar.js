import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const MainNavBar = function() {
  const [isScroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="menu-area" className={`${isScroll ? "cus-menu" : ""}`}>
      <div className="container">
        <nav>
          <ul className="menu-items">
            <li>
              <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HELLO
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                RESUME
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-icon" onClick={() => setMobileMenu(true)}>
          <span>
            <i className="fa fa-bars" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenu ? "active" : ""}`}>
        <div className="container">
          <div className="close-icon" onClick={() => setMobileMenu(false)}>
            <i className="fa fa-close" aria-hidden="true" />
          </div>
          <nav className="mobile-menu-wrapper">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  HELLO
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  RESUME
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
