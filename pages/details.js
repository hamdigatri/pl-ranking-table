import React from "react";

const Details = props => {
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
