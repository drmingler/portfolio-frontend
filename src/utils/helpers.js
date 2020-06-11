export const filterProject = (project, projectType) => {
  const listOfProjects = project.filter(
    project => project.typeOfProject === projectType
  );
  return listOfProjects.length > 0 ? listOfProjects : project;
};
