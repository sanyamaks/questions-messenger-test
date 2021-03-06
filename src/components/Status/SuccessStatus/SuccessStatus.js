import React from "react";
import "./SuccessStatus.scss";
import { ReactComponent as SuccessLogo } from "../../../assets/icons/icon-success.svg";

const SuccessStatus = (props) => {
    const {  id } = props;
  return (
    <div className="success-status">
      <p className="success-status__id">Q{id}</p>
      <div className="success-status__icon-container">
        <SuccessLogo className="success-status__icon" />
      </div>
      <p className="success-status__closed">Closed</p>
    </div>
  );
};

export default SuccessStatus;
