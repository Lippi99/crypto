import type { AppProps } from "next/app";
import { globalStyles } from "../../styles/global";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles()}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
