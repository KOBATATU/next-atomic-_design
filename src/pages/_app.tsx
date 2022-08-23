import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "pages/contexts/AuthContexts";
import { ApiContext } from "types/data";
import { SWRConfig } from "swr";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ shouldRetryOnError: false }}>
      <AuthContextProvider context={context}>
        <Component {...pageProps} />
      </AuthContextProvider>
    </SWRConfig>
  );
}

export default MyApp;
