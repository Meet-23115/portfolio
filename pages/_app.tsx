import "@/styles/globals.css";
import "@/styles/globals.scss"; // Relative path

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
