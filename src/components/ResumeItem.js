import React from "react";

const ResumeItem = ({ achievement }) => {
  const { name, description, startDate, endDate } = achievement;
  return (
    <div className="column-resume-list">
      <div className="resume-list-block">
        <p className="resume-list-block-title">{name}</p>
        <p className="resume-list-block-date">{`${startDate} - ${endDate}`}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
