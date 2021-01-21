import React from "react";
import "./Messages.scss";
import MessagesItem from "./MessagesItem/MessagesItem";

const Messages = () => {
  return (
    <section className="messages">
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
      <MessagesItem className="messages__messages-item"/>
    </section>
  );
};

export default Messages;
