import React, { useContext } from "react";
import Head from "next/head";
import StandingsTable from "../components/standingsTable";
import AppContext from "../components/appContext";

const Home = () => {
  const { competition, season, standings } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>League Table</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"
        />
      </Head>
      <h1>{competition}</h1>
      <h2>
        Season: {parseInt(season.startDate)} - {parseInt(season.endDate)}
      </h2>
      <StandingsTable total={standings[0]} />
    </div>
  );
};

export default Home;
