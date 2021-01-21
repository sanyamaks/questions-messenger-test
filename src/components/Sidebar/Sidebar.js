import React from "react";
import "./Sidebar.scss";
import Profile from "../Profile/Profile";
import MsgSectionContainer from "../MsgSectionContainer/MsgSectionContainer";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <MsgSectionContainer />
      <div className="sidebar__button-container">
          <button className="sidebar__button">Add</button>
      </div>
    </div>
  );
};

export default Sidebar;
