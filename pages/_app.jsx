import React from "react";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import moment from "moment";
import { globalAccess } from "../lib/access";
import { AppProvider } from "../lib/context";
import { SnackbarProvider } from "notistack";
import baseConfig from "../base.config";

moment.locale("es");

class WebApp extends App {
  constructor(props) {
    super(props);
    moment.locale("es");
    this.state = {};
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{baseConfig.defaultTitle}</title>
        </Head>
        <AppProvider value={{}}>
          <SnackbarProvider maxSnack={5}>
            <CssBaseline />
            <Component {...pageProps} />
          </SnackbarProvider>
        </AppProvider>
      </>
    );
  }

  static getInitialProps = async ({ Component, ctx }) => {
    try {
      return await globalAccess(Component, ctx);
    } catch (error) {
      console.error(error);
    }
  };
}

export default WebApp;
