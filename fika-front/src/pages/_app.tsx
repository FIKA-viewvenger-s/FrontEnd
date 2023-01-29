import "tailwind.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DefaultSeo } from "next-seo";
import type { ReactNode } from "react";
import { useState } from "react";
import queryClientConfig from "utils/queryClientConfig";
import { CustomAppProps } from "src/types";
import Button from "src/ui/Button";

const noop = (page: ReactNode) => page;

const App = ({ Component, pageProps, router }: CustomAppProps) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));
  const getLayout = Component.getLayout || noop;

  return (
    <>
      <DefaultSeo defaultTitle="" titleTemplate="" />
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />, { pageProps, router })}
        <Button>할로</Button>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
