import type { AppProps /*, AppContext */ } from "next/app";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <p>React Boilerplate 2022</p>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
