import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { StateContext } from "src/AppContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return <StateContext><Component {...pageProps} /></StateContext>
}

export default MyApp;
