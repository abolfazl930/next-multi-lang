  
import React from 'react'
import App from 'next/app'
import Head from "next/head";

import { appWithTranslation } from '../i18n'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
      <Head>

                <link
                  rel="shortcut icon"
                  type="image/x-icon"
                  href="/favicon.ico"
                />
      </Head>
           
      <Component {...pageProps} />
      </>

    )
  }
}

export default appWithTranslation(MyApp)
