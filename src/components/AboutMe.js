import React from "react";

const AboutMe = ({ description }) => {
  return (
    <section className="container about-me">
      <div className="row">
        <div className="column">
          <h2 className="section-title">Hi_</h2>
          <p className="section__description">{description}</p>
          <button className="download-cv-btn">
            <a href="https://github.com/drmingler">
              <i className="fa fa-download" />
            </a>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
