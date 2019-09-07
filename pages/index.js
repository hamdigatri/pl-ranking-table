import React, { useContext } from "react";
import Head from "next/head";
import StandingsTable from "../components/standingsTable";
import AppContext from "../components/appContext";

const Home = () => {
  const { competition, season, standings } = useContext(AppContext);
  return (
    <div className="app-container">
      <Head>
        <title>League Table</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"
        />
        <link href="../static/table.css" rel="stylesheet" />
        <link href="../static/style.css" rel="stylesheet" />
      </Head>
      <div className="title-container">
        <img
          src="../static/logo.svg"
          alt="premier league logo"
          className="logo"
        />
        <h1>{competition}</h1>
        <h2>
          Season: {parseInt(season.startDate)} - {parseInt(season.endDate)}
        </h2>
      </div>
      <StandingsTable standings={standings} />
    </div>
  );
};

export default Home;
