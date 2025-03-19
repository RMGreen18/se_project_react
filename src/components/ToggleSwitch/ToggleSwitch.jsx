//checkbox input type
//use context

import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggleSwitch"
        className="toggle-switch__input"
      />
      <label className="toggle-switch__label" htmlFor="toggleSwitch">
        <span className="toggle-switch__slider"></span>
        <span className="toggle-switch__unit toggle-switch__unit_f">F</span>
        <span className="toggle-switch__unit toggle-switch__unit_c">C</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
