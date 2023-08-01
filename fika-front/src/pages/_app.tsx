import "tailwind.css";
import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DefaultSeo } from "next-seo";
import type { ReactNode } from "react";
import { useState } from "react";
import queryClientConfig from "utils/queryClientConfig";
import { CustomAppProps } from "src/types";
import { RecoilRoot } from "recoil";

const noop = (page: ReactNode) => page;

const App = ({ Component, pageProps, router }: CustomAppProps) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));
  const getLayout = Component.getLayout || noop;

  if (process.env.NEXT_PUBLIC_ENV === "LOCAL") {
    require("../mocks");
  }

  return (
    <RecoilRoot>
      <DefaultSeo defaultTitle="" titleTemplate="" />
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />, { pageProps, router })}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
