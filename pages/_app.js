import React from "react";
import App from "next/app";
import Head from "next/head";

import { appWithTranslation } from "../i18n";
import Layout from "../components/layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout>
          <Head>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default appWithTranslation(MyApp);
