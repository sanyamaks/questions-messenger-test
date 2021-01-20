import React from "react";
import "./MsgSectionsItem.scss";
import { ReactComponent as Logo } from "../../../assets/icons/icon-archive.svg";

const MsgSectionsItem = () => {
  return (
    <li className="msg-sections-item">
      <button className="msg-sections-item__button">
        <Logo class="msg-sections-item__icon" />
        <p className="msg-sections-item__title">Title (100)</p>
      </button>
    </li>
  );
};

export default MsgSectionsItem;
