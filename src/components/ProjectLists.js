import React from "react";
import Project from "./Project";


const ProjectLists = ({ filteredProjects }) => {
  return (
    <ul className="project-cards">
      {filteredProjects &&
        filteredProjects.map(eachProject => (
          <a href={eachProject.projectLink} style={{ color: "#555" }} key={eachProject.id}>
            <Project eachProject={eachProject} />
          </a>
        ))}
    </ul>
  );
};

export default ProjectLists;
