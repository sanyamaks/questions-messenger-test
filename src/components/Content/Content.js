import React from "react";
import "./Content.scss";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import Form from "../Form/Form";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <Messages />
      <Form />
    </div>
  );
};

export default Content;
