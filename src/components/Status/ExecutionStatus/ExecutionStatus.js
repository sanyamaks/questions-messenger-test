import React from "react";
import "./ExecutionStatus.scss";

const ExecutionStatus = () => {
    return (
        <div className="execution-status">
            <p className="execution-status__id">Q2718</p>
            <div className="execution-status__past-time-container">
                <p className="execution-status__past-time">16h</p>
            </div>
        </div>
    );
};

export default ExecutionStatus;
