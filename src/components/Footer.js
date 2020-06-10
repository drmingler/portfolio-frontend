import React from "react";
import useContact from "../hooks/useContact";
const Footer = () => {
   const  user = useContact();
  return (
    <div
      className="background"
      style={{
        backgroundImage:
          "url(https://previews.aspirity.com/spirit/assets/img/img_bg_main.jpg)"
      }}
    >
      <section id={"footer"} className="footer">
        <div className="container">
          <h2 className="contact-title">Get in touch_</h2>
          <div className="contact-me row">
            <div className="contact-info">
              <dl>
                <dt>Phone:</dt>
                  <dd>{user.phone}</dd>
                <dt>Skype:</dt>
                  <dd>{user.skype}</dd>
                <dt>Email:</dt>
                  <dd>{user.email}</dd>
              </dl>
              <ul className="social-platforms">
                <li>
                  <a href={user.linkedin}>Linkedin</a>
                </li>
                <li>
                  <a href={user.github}>Github</a>
                </li>
                <li>
                  <a href={user.skypeinvite}>Skype</a>
                </li>
              </ul>
            </div>
            <div className="contact-form-container">
              <p className="contacts__form-title">
                Or just write me a letter here_
              </p>
              <form>
                <input
                  placeholder="Your Name"
                  type="text"
                  required
                  className="field-name"
                />
                <input
                  placeholder="Your e-mail"
                  type="email"
                  required
                  className="field-name"
                />
                <textarea
                  placeholder="Type the message here"
                  required
                  className="field-name"
                />
                <button>SEND</button>
              </form>
              <div className="footer-date">
                <p>© 2020 David Emmanuel Olarewaju. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
