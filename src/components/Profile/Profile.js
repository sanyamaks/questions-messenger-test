import React from "react";
import "./Profile.scss";
import { ReactComponent as AddButton } from "../../assets/icons/icon-add.svg";

const Profile = () => {
  return (
    <div className="profile">
      <img
        className="profile__avatar"
        src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg"
        alt="avatar"
      />
      <div className="profile__user-info">
        <p className="profile__name">David Hill</p>
        <p className="profile__status">online</p>
      </div>
      <button className="profile__button">
        <AddButton className="profile__button-icon" />
      </button>
    </div>
  );
};

export default Profile;
