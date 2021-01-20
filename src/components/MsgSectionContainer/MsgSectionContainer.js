import React from "react";
import "./MsgSectionContainer.scss";
import MsgSections from "../MsgSections/MsgSections";

const MsgSectionContainer = () => {
  return (
    <div className="msg-section-container">
      <h3 className="msg-section-container__title">Messages</h3>
      <p className="msg-section-container__subtitle">history</p>
      <nav className="msg-section-container__wrapper">
        <MsgSections />
      </nav>
    </div>
  );
};

export default MsgSectionContainer;
