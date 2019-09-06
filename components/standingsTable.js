import React from "react";
import Link from "next/link";

const StandingsTable = props => {
  const { standings } = props;
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Position</td>
            <td>Team</td>
            <td>Played</td>
            <td>Won</td>
            <td>Draw</td>
            <td>Lost</td>
            <td>Points</td>
          </tr>
        </thead>
        <tbody>
          {standings.map(team => (
            <Link href={"/details?id=" + team.team.id} key={team.team.id}>
              <tr>
                <td>{team.position}</td>
                <td>{team.team.name}</td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.points}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
