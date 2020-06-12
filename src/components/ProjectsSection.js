import React, { useEffect, useState } from "react";
import ProjectLists from "./ProjectLists";
import { filterProject } from "../utils/helpers";
import { getProjects } from "../utils/api";

const ProjectSection = () => {
  const [projects, setProject] = useState([]);
  const [ProjectType, setProjectType] = useState("");

  useEffect(() => {
    getProjects().then(response => setProject(response));
  }, []);

  // To sort the projects into categories
  const filteredProjects = filterProject(projects, ProjectType);


  return (
    <section className="container project-section" id={"project"}>
      <h2 className="section-title">My Projects_</h2>
      <nav>
        <ul className="projects-list">
          <li onClick={() => setProjectType("All")}>
            <span className={`${ProjectType === "All" && "active"}`}>All</span>
          </li>
          <li onClick={() => setProjectType("Websites")}>
            <span className={`${ProjectType === "Websites" && "active"}`}>Websites</span>
          </li>
          <li onClick={() => setProjectType("Mobile-Apps")}>
            <span className={`${ProjectType === "Mobile-Apps" && "active"}`}>Mobile-Apps</span>
          </li>
        </ul>
      </nav>
      <ProjectLists filteredProjects={filteredProjects} />
    </section>
  );
};

export default ProjectSection;
