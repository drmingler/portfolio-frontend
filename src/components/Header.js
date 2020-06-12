import React, { Fragment } from "react";
import headerPic from "../images/portfoliopic.png";
import AboutMe from "./AboutMe";
import { useSpring, animated } from "react-spring";

const Header = function({ user }) {
  const userInfoAnimation= useSpring({
      opacity: 1,
      from: { opacity: 0 },
    delay: "1000"
  });

  const userProfileAnimation = useSpring({
        opacity: 1,
        marginLeft: 0,
        from: { opacity: 0, marginLeft: -100 },
        delay: "1000"
    });

  return (
    <Fragment>
      {user && (
        <header
          id="header"
          style={{
            backgroundImage:
              "url(https://previews.aspirity.com/spirit/assets/img/img_bg_main.jpg)"
          }}
        >
          <div className="main-header">
            <div className="container">
              <div className="row personal-profile">
                <animated.div className="portfolio-img" style={userProfileAnimation}>
                  <img src={headerPic} alt={"emmanuel"} />
                </animated.div>
                <animated.div className="personal-info"  style={userInfoAnimation}>
                  <p className="personal-profile__name" >
                    {`${user.Name}_` || "David Emmanuel Olarewaju_"}
                  </p>
                  <p className="personal-profile__work">Fullstack Developer</p>
                  <div className="contact-list">
                    <dl>
                      <dt>Phone:</dt>
                      <dd>{user.phone}</dd>
                      <dt>Skype:</dt>
                      <dd>{user.skype}</dd>
                      <dt>Email:</dt>
                      <dd>{user.email}</dd>
                      <dt>Address:</dt>
                      <dd>{user.address}</dd>
                    </dl>
                  </div>
                  <p className="personal-profile__social">
                    <a href={user.github}>
                      <i className="fa fa-github"> </i>
                    </a>
                    <a href={user.linkedin}>
                      <i className="fa fa-linkedin-square" />
                    </a>
                    <a href={user.skypeinvite}>
                      <i className="fa fa-skype" />
                    </a>
                  </p>
                </animated.div>
              </div>
            </div>
          </div>
        </header>
      )}
      {user && <AboutMe description={user.description} />}
      <hr />
    </Fragment>
  );
};

export default Header;
