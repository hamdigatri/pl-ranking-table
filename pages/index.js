import React, { useContext } from "react";
import StandingsTable from "../components/standingsTable";
import AppContext from "../components/appContext";
import Layout from "../components/pageLayout";

const Home = () => {
  const { competition, season, standings } = useContext(AppContext);
  return (
    <div className="app-container">
      <Layout>
        <StandingsTable standings={standings} />
      </Layout>
    </div>
  );
};

export default Home;
