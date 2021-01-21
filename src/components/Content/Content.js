import React from "react";
import "./Content.scss";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <Messages />
    </div>
  );
};

export default Content;
