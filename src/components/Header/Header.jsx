import { useState } from "react";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

 
  return (
    <header className="header">
      <img src={logo} alt="WTWR logo " className="header__logo" />
      <p className="header__date-and-loc">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__user-title">Terrence Tegegne</p>
        <img src={avatar} alt="avatar" className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;
