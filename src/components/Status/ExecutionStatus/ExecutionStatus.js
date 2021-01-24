import React from "react";
import "./ExecutionStatus.scss";

const ExecutionStatus = (props) => {
  const { time, id } = props;
  return (
    <div className="execution-status">
      <p className="execution-status__id">Q{id}</p>
      <div className="execution-status__past-time-container">
        <p className="execution-status__past-time">{time}h</p>
      </div>
    </div>
  );
};

export default ExecutionStatus;
