import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/" className="header__link">
      <img src={logo} alt="WTWR logo " className="header__logo" />
      </Link>
  
      <p className="header__date-and-loc">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={onAddClick}
        type="button"
        className="header__add-btn"
      >
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">
      <div className="header__user-container">
        <p className="header__user-title">Terrence Tegegne</p>
        <img src={avatar} alt="avatar" className="header__user-avatar" />
      </div>
      </Link>
    </header>
  );
}

export default Header;
