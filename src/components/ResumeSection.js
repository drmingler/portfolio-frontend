import React, { Fragment, useEffect, useState } from "react";
import ResumeItem from "./ResumeItem";
import { getAchievements, getUser } from "../utils/api";
import {sortAchievements} from  "../utils/helpers";

const ResumeSection = () => {
  const [achievements, setAchievements] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAchievements().then(response => setAchievements(sortAchievements(response)));
    getUser(1).then(response => setUsers(response));
  }, []);



  return (
    <section id={"resume"} className="container resume-section">
      <div className="row">
        <div className="column">
          <h2 className="section-title">Resume_</h2>
          <p className="section__description">
            {users.resumeDescription}
          </p>
        </div>
      </div>
      {achievements && (
        <Fragment>
          <div className="resume-list">
            <p className="resume-title">Education</p>
            {achievements.map(
              achievement =>
                achievement.typeOfDetails === "Education" && (
                  <li className="row" key={achievement.id}>
                    <ResumeItem achievement={achievement} />
                  </li>
                )
            )}
          </div>
          <div className="resume-list">
            <p className="resume-title">Employment</p>
            {achievements.map(
              achievement =>
                achievement.typeOfDetails === "Employment" && (
                  <li className="row" key={achievement.id}>
                      <ResumeItem achievement={achievement} />
                  </li>
                )
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default ResumeSection;
