import React, { useContext } from "react";
import AppContext from "../components/appContext";
import Layout from "../components/pageLayout";

const Details = props => {
  const { standings } = useContext(AppContext);
  const team = standings[standings.findIndex(item => item.team.id == props.id)];
  return (
    <Layout>
      <div className="details-container">
        <div>
          <img src={team.team.crestUrl} style={{ width: 250, height: 250 }} />
        </div>
        <div>
          <ul>
            <li>Name : {team.team.name}</li>
            <li>Played Games : {team.playedGames}</li>
            <li>Won : {team.won}</li>
            <li>Draw : {team.draw}</li>
            <li>Lost : {team.lost}</li>
            <li>Goals for : {team.goalsFor}</li>
            <li>Goals against : {team.goalsAgainst}</li>
            <li>Goal diffrence : {team.goalDifference}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

Details.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Details;
