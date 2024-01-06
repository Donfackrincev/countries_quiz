// "use-client";
import type { NextPage } from "next";
import React from "react";
import Script from "next/script";
import "./../styles/globals.css";
import { Provider } from "react-redux";

import Head from "next/head";

import { store } from "@/configs/store";

interface AppProps {
  Component: NextPage;
}

const App = (props: AppProps) => {
  const { Component } = props;
  const { defaultProps } = Component;

  return (
    <>
      <Head>
        <title>page</title>
        <meta name="description" />
        <meta name="keywords" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo-16x16.png"
        />
        <meta name="application-name" />
        <meta name="theme-color" content="timecolor" />
      </Head>
    <Provider store={store}>
      <Component {...defaultProps} />
      </Provider>
    </>
  );
};

export default App;
