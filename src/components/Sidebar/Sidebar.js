import React, { useContext } from "react";
import "./Sidebar.scss";
import Profile from "../Profile/Profile";
import MsgSectionContainer from "../MsgSectionContainer/MsgSectionContainer";
import { Context } from "../../store/Store";

const Sidebar = () => {
  const [state, dispatch] = useContext(Context);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_SECTION",
      payload: {
        id: state.currentId,
        title: `section ${state.currentId}`,
        currentId: 0,
        messages: [],
      },
    });
    dispatch({ type: "UPDATE_SECTION_ID" });
  };

  return (
    <div className="sidebar">
      <Profile />
      <MsgSectionContainer />
      <div className="sidebar__button-container">
        <button className="sidebar__button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
