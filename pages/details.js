import React, { useContext } from "react";
import AppContext from "../components/appContext";

const Details = props => {
  const { standings } = useContext(AppContext);
  const team = standings[standings.findIndex(item => item.team.id == props.id)];
  return (
    <div>
      <h1>Team detail</h1>
    </div>
  );
};

Details.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Details;
