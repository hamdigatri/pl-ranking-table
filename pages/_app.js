import React from "react";
import App, { Container } from "next/app";
import AppContext from "../components/appContext";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AppContext.Provider>
          <Component {...pageProps} />
        </AppContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
