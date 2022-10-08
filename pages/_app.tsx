import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import Footer from "../templates/Footer";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
