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
            <li>
              <span>Name :</span> {team.team.name}
            </li>
            <li>
              <span>Played Games :</span> {team.playedGames}
            </li>
            <li>
              <span>Won :</span> {team.won}
            </li>
            <li>
              <span>Draw :</span> {team.draw}
            </li>
            <li>
              <span>Lost :</span> {team.lost}
            </li>
            <li>
              <span>Goals for :</span> {team.goalsFor}
            </li>
            <li>
              <span>Goals against : </span>
              {team.goalsAgainst}
            </li>
            <li>
              <span>Goal diffrence :</span> {team.goalDifference}
            </li>
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
