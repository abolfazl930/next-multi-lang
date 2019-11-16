  
import React from 'react'
import App from 'next/app'
// import Head from "next/head";

import { appWithTranslation } from '../i18n'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (

      <Component {...pageProps} />

    )
  }
}

export default appWithTranslation(MyApp)
// export default MyApp