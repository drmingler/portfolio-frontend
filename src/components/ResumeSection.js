import React, { Fragment, useEffect, useState } from "react";
import ResumeItem from "./ResumeItem";
import { getAchievements } from "../utils/api";

const ResumeSection = () => {
  const [achievements, setAchievements] = useState(null);
  
  useEffect(() => {
    getAchievements().then(response => setAchievements(response));
  }, []);
  return (
    <section id={"resume"} className="container resume-section">
      <div className="row">
        <div className="column">
          <h2 className="section-title">Resume_</h2>
          <p className="section__description">
            Lorem ipsum dolor sit amet,
            <i>
              <b>communication</b>
            </i>
            adipisicing elit
            <i>
              <b>helpful</b>
            </i>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
            <i>
              <b>sence of humour</b>
            </i>
            ullamco laboris nisi ut
            <i>
              <b>honest</b>
            </i>
            ea commodo consequat. Duis aute irure dolor in upper-intermediate
            english level velit dolore eu ivivdtevoluptatem ontend developer.
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
