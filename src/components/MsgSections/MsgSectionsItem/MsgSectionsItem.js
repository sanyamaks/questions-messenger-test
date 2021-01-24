import React from "react";
import "./MsgSectionsItem.scss";
import { ReactComponent as Logo } from "../../../assets/icons/icon-archive.svg";
import cn from "classnames";

const MsgSectionsItem = (props) => {
  const { title, numberOfMessage, onClick, isActive } = props;
  return (
    <li
      className={cn("msg-sections-item", {
        "msg-sections-item_active": isActive,
      })}
    >
      <button className="msg-sections-item__button" onClick={onClick}>
        <Logo className="msg-sections-item__icon" />
        <p className="msg-sections-item__title">
          {title} ({numberOfMessage})
        </p>
      </button>
    </li>
  );
};

export default MsgSectionsItem;
