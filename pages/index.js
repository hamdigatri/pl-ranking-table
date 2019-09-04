import React from "react";
import Head from "next/head";
import axios from "axios";

class Home extends React.Component {
  static async getInitialProps() {
    const res = await axios.get(
      "http://api.football-data.org/v2/competitions/2021/standings",
      { headers: { "X-Auth-Token": "57c8cb7275dd4ab695bc3f3d9b23ba92" } }
    );
    return { data: res.data };
  }

  render() {
    return (
      <div>
        <Head>
          <title>League Table</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"
          />
        </Head>
        <h1>hola</h1>
      </div>
    );
  }
}
export default Home;
