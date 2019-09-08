import React, { useContext } from "react";
import AppContext from "./appContext";
const Header = () => {
  const { season, competition } = useContext(AppContext);
  return (
    <header>
      <img
        src="../static/logo.svg"
        alt="premier league logo"
        className="logo"
      />
      <div className="title-container">
        <h1>{competition}</h1>
        <h2>
          Season: {parseInt(season.startDate)} - {parseInt(season.endDate)}
        </h2>
      </div>
    </header>
  );
};

export default Header;
