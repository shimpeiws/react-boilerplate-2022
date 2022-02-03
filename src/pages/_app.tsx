import type { AppProps /*, AppContext */ } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <p>React Boilerplate 2022</p>
      <Component {...pageProps} />
    </>
  );
}
