import React from "react";
import "./MessagesItem.scss";
import { ReactComponent as Logo } from "../../../assets/icons/icon-add2.svg";
import cn from "classnames";
import SuccessStatus from "../../Status/SuccessStatus/SuccessStatus";
import ExecutionStatus from "../../Status/ExecutionStatus/ExecutionStatus";

const MessagesItem = (props) => {
  const { className, title, time, id, isSuccess } = props;

  const renderConditionally = () => {
    if (!isSuccess) {
      return (
        <ExecutionStatus
          time={Math.floor((new Date() - time) / 1000 / 60 / 60)}
          id={id}
        />
      );
    } else {
      return <SuccessStatus id={id} />;
    }
  };

  const getMonth = (pos) => {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][pos];
  };
  return (
    <article className={cn("messages-item", className)}>
      {renderConditionally()}

      <div className="messages-item__text">
        <p className="messages-item__question">{title}</p>
        <p className="messages-item__time">
          Guest {time.getHours() > 12 ? time.getHours() - 12 : time.getHours()}:
          {time.getMinutes()} {time.getHours() > 12 ? "pm" : "am"} -{" "}
          {time.getDate()} {getMonth(time.getMonth())}
        </p>
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
