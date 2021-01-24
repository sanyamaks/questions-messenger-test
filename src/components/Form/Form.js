import React, { useContext, useRef } from "react";
import "./Form.scss";
import { ReactComponent as AddButton } from "../../assets/icons/icon-add2.svg";
import { Context } from "../../store/Store";

const Form = () => {
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.activeSection || inputRef.current.value.trim() === "") {
      return null;
    }
    const section = state.sections.find(
      (section) => section.id === state.activeSection
    );
    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        title: inputRef.current.value,
        id: section.currentId,
        time: new Date(),
        isSuccess: Math.floor(Math.random() * 2) === 1,
      },
    });
    dispatch({ type: "UPDATE_MESSAGE_ID" });
    formRef.current.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <input
        type="text"
        className="form__message"
        ref={inputRef}
        placeholder="Enter your message"
      />
      <button className="form__button" type="button" onClick={handleSubmit}>
        <AddButton className="form__button-icon" />
      </button>
    </form>
  );
};

export default Form;
