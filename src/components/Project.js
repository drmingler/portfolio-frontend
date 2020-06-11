import React, { Fragment } from "react";

const Project = ({ eachProject }) => {
  const { name, picture, stacks, description, siteLink } = eachProject;
  return (
    <Fragment>
      <div className="project-img">
        <img src={picture} alt="project-img" />
      </div>
      <div className="project-details">
        <div className="project-card__info">
          <h3 className="project-card__title">{name}</h3>
          <p className="project-card__description">
            {description.length < 200
              ? description
              : description.substr(0, 200) + "..."}
          </p>
          <p className="project-card__stack">Used stack:</p>
          <ul className="list_of_stacks">
            {stacks.map((stack, index) => (
              <li key={index}>{stack}</li>
            ))}
          </ul>
          <span className="project-card__link">
            {/*<button className={"source-btn"}>*/}
            {/*  View Source*/}
            {/*</button>*/}
            {siteLink}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
