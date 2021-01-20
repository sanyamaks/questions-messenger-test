import React from "react";
import "./Sidebar.scss";
import Profile from "../Profile/Profile";
import MsgSectionContainer from "../MsgSectionContainer/MsgSectionContainer";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <MsgSectionContainer />
    </div>
  );
};

export default Sidebar;
