import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";

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

  const menuBarAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: "700"
  });

  return (
    <Fragment>
      <animated.div id="menu-area" className={`${isScroll ? "cus-menu" : ""}`} style={menuBarAnimation}>
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
                  to="resume"
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
                  to="project"
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
                  to="footer"
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
      </animated.div>
      <div className={`mobile-menu ${isMobileMenu ? "active" : ""}`}>
        <div className="container">
          <div className="close-icon" onClick={() => setMobileMenu(false)}>
            <i className="fa fa-close" aria-hidden="true" />
          </div>
          <nav className="mobile-menu-wrapper">
            <ul>
              <li>
                <Link
                  onClick={() => setMobileMenu(false)}
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
                  onClick={() => setMobileMenu(false)}
                  activeClass="active"
                  to="resume"
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
                  onClick={() => setMobileMenu(false)}
                  activeClass="active"
                  to="project"
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
                  onClick={() => setMobileMenu(false)}
                  activeClass="active"
                  to="footer"
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
    </Fragment>
  );
};

export default MainNavBar;
