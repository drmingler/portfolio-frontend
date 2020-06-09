import React, { useEffect, useState } from "react";
import { getUser, getAchievement, getProject, getAchievements, getProjects, getUsers} from "./utils/api";

function App() {
  useEffect(() => {
    getUsers().then(data => console.log(data));
  }, []);
  return <div>"Hello"</div>;
}

export default App;
