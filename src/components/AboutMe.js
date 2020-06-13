import React from "react";
const AboutMe = ({ description, resumeLink }) => {
  return (
    <section className="container about-me">
      <div className="row">
        <div className="column">
          <h2 className="section-title">Hi_</h2>
          <p className="section__description">{description}</p>
          <a href={resumeLink}>
            <button className="download-cv-btn">
              <i className="fa fa-download" />
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
