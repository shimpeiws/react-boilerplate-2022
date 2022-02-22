import type { AppProps /*, AppContext */ } from "next/app";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "../components/ErrorBoundary";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <p>React Boilerplate 2022</p>
        <Component {...pageProps} />
      </RecoilRoot>
    </ErrorBoundary>
  );
}
