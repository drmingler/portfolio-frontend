import React, { Fragment, useEffect, useState } from "react";
import headerPic from "../images/portfoliopic.png";
import { getUser } from "../utils/api";
import AboutMe from "./AboutMe";
const Header = function() {
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    getUser(1).then(response => setUser(response));
  }, []);

  return (
    <Fragment>
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
              <div className="portfolio-img">
                <img src={headerPic} alt={"emmanuel"} />
              </div>
              <div className="personal-info">
                <p className="personal-profile__name">{`${user.Name}_`}</p>
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
              </div>
            </div>
          </div>
        </div>
      </header>
      <AboutMe description = {user.description}/>
      <hr />
    </Fragment>
  );
};

export default Header;
