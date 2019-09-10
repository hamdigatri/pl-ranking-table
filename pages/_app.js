import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import axios from "axios";
import AppContext from "../components/appContext";

Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const res = await axios.get(
      "http://api.football-data.org/v2/competitions/2021/standings",
      { headers: { "X-Auth-Token": "57c8cb7275dd4ab695bc3f3d9b23ba92" } }
    );

    return {
      pageProps,
      competition: res.data.competition.name,
      season: res.data.season,
      standings: res.data.standings[0].table
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
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
          <link href="../static/table.css" rel="stylesheet" />
          <link href="../static/style.css" rel="stylesheet" />
          <link href="../static/nprogress.css" rel="stylesheet" />
        </Head>

        <AppContext.Provider
          value={{
            competition: this.props.competition,
            season: this.props.season,
            standings: this.props.standings
          }}
        >
          <Component {...pageProps} />
        </AppContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
