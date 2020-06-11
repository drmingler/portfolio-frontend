import React from "react";
import Project from "./Project";

const ProjectLists = ({ filteredProjects }) => {
  return (
    <ul className="project-cards">
      {filteredProjects &&
        filteredProjects.map(eachProject => (
          <a href={eachProject.projectLink} key={eachProject.id} style={{color : "#555"}}>
            <li className="project-card">
              <Project eachProject={eachProject} />
            </li>
          </a>
        ))}
    </ul>
  );
};

export default ProjectLists;
