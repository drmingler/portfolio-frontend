import React, { Fragment, useEffect, useState } from "react";
import ResumeItem from "./ResumeItem";
import { getAchievements, getUser } from "../utils/api";
import { sortAchievements } from "../utils/helpers";
import ScrollAnimation from "react-animate-on-scroll";

const ResumeSection = () => {
  const [achievements, setAchievements] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAchievements().then(response =>
      setAchievements(sortAchievements(response))
    );
    getUser(1).then(response => setUsers(response));
  }, []);

  return (
    <section id={"resume"} className="container resume-section">
      <div className="row">
        <div className="column">
          <h2 className="section-title">Resume_</h2>
          <p className="section__description">{users.resumeDescription}</p>
        </div>
      </div>
      {achievements && (
        <Fragment>
          <div className="resume-list">
            <ScrollAnimation animateIn="fadeIn" >
              <p className="resume-title">Education</p>
            </ScrollAnimation>
            {achievements.map(
              achievement =>
                achievement.typeOfDetails === "Education" && (
                  <ScrollAnimation animateIn="fadeIn" key={achievement.id}>
                    <li className="row">
                      <ResumeItem achievement={achievement} />
                    </li>
                  </ScrollAnimation>
                )
            )}
          </div>
          <div className="resume-list">
            <ScrollAnimation animateIn="fadeIn">
              <p className="resume-title">Employment</p>
            </ScrollAnimation>
            {achievements.map(
              achievement =>
                achievement.typeOfDetails === "Employment" && (
                  <ScrollAnimation animateIn="fadeIn" key={achievement.id}>
                    <li className="row">
                      <ResumeItem achievement={achievement} />
                    </li>
                  </ScrollAnimation>
                )
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default ResumeSection;
