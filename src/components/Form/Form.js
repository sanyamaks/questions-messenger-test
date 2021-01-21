import React from "react";
import "./Form.scss";
import { ReactComponent as AddButton } from "../../assets/icons/icon-add2.svg";

const Form = () => {
  return (
    <form className="form">
      <input className="form__message" placeholder="Enter your message" />
      <button className="form__button" type="button">
        <AddButton className="form__button-icon" />
      </button>
    </form>
  );
};

export default Form;
