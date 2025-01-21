import React, { useContext } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { ThemeContext } from "../../components/context/ThemeContext";

const Themetoggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="nav_ac" onClick={toggleTheme}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
