import React, { Fragment } from "react";
import { animated, useSpring } from "react-spring";

const Project = ({ eachProject }) => {
  const { name, picture, stacks, description, siteLink } = eachProject;

  const props = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: -1000 },
    delay: "300"
  });

  return (
    <animated.li className="project-card" style={props}>
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
            {stacks.map((stack) => (
                <li key={stack.id}>{stack.stackName}</li>
            ))}
          </ul>
          <span className="project-card__link">{siteLink}</span>
        </div>
      </div>
    </animated.li>
  );
};

export default Project;
