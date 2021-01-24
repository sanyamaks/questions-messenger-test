import React, { useContext } from "react";
import "./Messages.scss";
import MessagesItem from "./MessagesItem/MessagesItem";
import { Context } from "../../store/Store";

const Messages = () => {
  const [state] = useContext(Context);

  const section = state.sections.find(
    (section) => section.id === state.activeSection
  );

  const renderConditionally = () => {
    if (!Number.isInteger(state.activeSection) || !section) {
      return <p>Необходимо выбрать или добавить и выбрать раздел</p>;
    } else {
      return section.messages.map((message) => {
        return (
          <MessagesItem
            className="messages__messages-item"
            title={message.title}
            time={message.time}
            key={message.id}
            id={message.id}
            isSuccess={message?.isSuccess}
          />
        );
      });
    }
  };

  return <section className="messages">{renderConditionally()}</section>;
};

export default Messages;
