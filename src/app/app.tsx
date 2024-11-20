// pages/_app.tsx
import { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Script Pirsch Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://example.pirsch.io/script.js"
        data-id="IlUHCiamxUzs2EvV9q8ofPrs5QsHtZfY"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
