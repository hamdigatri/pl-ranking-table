import React from "react";

const StandingsTable = props => {
  const { total } = props;
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
          {total.table.map(team => (
            <tr key={team.team.id}>
              <td>{team.position}</td>
              <td>{team.team.name}</td>
              <td>{team.playedGames}</td>
              <td>{team.won}</td>
              <td>{team.draw}</td>
              <td>{team.lost}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
