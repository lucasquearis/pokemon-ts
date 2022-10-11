import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import Footer from "../templates/Footer";
import Header from "../templates/Header";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <div className="mx-auto w-full">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
