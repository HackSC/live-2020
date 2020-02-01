import React from "react";
import App, { Container } from "next/app";
import { hotjar } from "react-hotjar";
import { ThemeProvider } from "styled-components";
import "react-calendar-timeline/lib/Timeline.css";
import { GlobalStyles, theme } from "../styles";

class HackSC extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    hotjar.initialize("1547187");
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default HackSC;
