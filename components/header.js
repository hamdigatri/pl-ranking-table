import React, { useContext } from "react";
import AppContext from "./appContext";
import Link from "next/link";
const Header = props => {
  const { season, competition } = useContext(AppContext);
  return (
    <header>
      {props.goBack && (
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <Link href="/">
            <img
              src="../static/left-arrow.svg"
              alt="go back"
              style={{ width: 25, height: 25, cursor: "pointer" }}
            />
          </Link>
        </div>
      )}
      <img
        src="../static/logo.svg"
        alt="premier league logo"
        className="logo"
      />
      <div className="title-container" style={props.goBack ? { flex: 1 } : {}}>
        <h1>{competition}</h1>
        <h2>
          Season: {parseInt(season.startDate)} - {parseInt(season.endDate)}
        </h2>
      </div>
    </header>
  );
};

export default Header;
