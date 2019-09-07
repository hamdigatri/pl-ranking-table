import React, { useContext } from "react";
import AppContext from "../components/appContext";

const Details = props => {
  const { standings } = useContext(AppContext);
  const team = standings[standings.findIndex(item => item.team.id == props.id)];
  return (
    <div>
      <h1>Team detail</h1>
      <img src={team.team.crestUrl} style={{ width: 100, height: 100 }} />
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
  );
};

Details.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Details;
