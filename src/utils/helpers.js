export const filterProject = (project, projectType) => {
  const listOfProjects = project.filter(
    project => project.typeOfProject === projectType
  );
  return listOfProjects.length > 0 ? listOfProjects : project;
};

export const sortAchievements = achievements => {
  const data = [];
  const result = achievements
    .filter(achievement => {
      if (achievement.endDate === "Present") {
         data.push(achievement);
          return null
      } else {
        return achievement;
      }
    })
    .sort((a, b) => b.endDate - a.endDate);
    return [...data, ...result]
};
