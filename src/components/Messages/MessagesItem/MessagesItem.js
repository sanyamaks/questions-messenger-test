import React from "react";
import "./MessagesItem.scss";
import { ReactComponent as Logo } from "../../../assets/icons/icon-add2.svg";
import cn from "classnames";
import SuccessStatus from "../../Status/SuccessStatus/SuccessStatus";
import ExecutionStatus from "../../Status/ExecutionStatus/ExecutionStatus";

const MessagesItem = (props) => {
  const { className } = props;
  return (
    <article className={cn("messages-item", className)}>
      {/*<ExecutionStatus />*/}
      <SuccessStatus />
      <div className="messages-item__text">
        <p className="messages-item__question">
          Hello, what is the delivery time?
        </p>
        <p className="messages-item__time">Guest 4.20 am</p>
      </div>
      <div className="messages-item__button-container">
        <button className="messages-item__button">
          <Logo className="messages-item__button-icon" />
        </button>
      </div>
    </article>
  );
};

export default MessagesItem;
