import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Script from "next/script";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const googleTagID = process.env.GOOGLE_TAG_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleTagID}');
        `}
      </Script>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
