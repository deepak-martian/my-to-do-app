import { useState } from "react";
import "./Toggle.css";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToogleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBackgroundColor = {
    backgroundColor: isOn ? "#4caf50" : "#f44336",
  };

  return (
    <>
      <div
        className="toggle-switch"
        onClick={handleToogleSwitch}
        style={toggleBackgroundColor}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>

      {isOn ? <div><FaToggleOn /></div> : <div><FaToggleOff /></div>}
    </>
  );
};
