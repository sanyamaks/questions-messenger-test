import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/icons/icon-arrow.svg";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Questions Messenger</h2>
      <div className="header__select-container">
        <select className="header__select" size="1">
          <option className="header__select-option" value="All questions">
            All questions
          </option>
          <option className="header__select-option" value="Part questions">
            Part questions
          </option>
          <option className="header__select-option" value="Questions">
            Questions
          </option>
        </select>
        <Logo className="header__select-icon" />
      </div>
    </header>
  );
};

export default Header;
