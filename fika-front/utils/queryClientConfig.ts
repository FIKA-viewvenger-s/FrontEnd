import type { QueryClientConfig } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import message from "src/ui/message";

const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    message.error(error.response?.data?.message || error.message);
  } else if (error instanceof Error) {
    message.error(error.message);
  } else {
    message.error(JSON.stringify(error));
  }
};

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: handleError,
    },
    queries: {
      onError: handleError,
      retry: 1,
      staleTime: 1200,
    },
  },
};

export default queryClientConfig;
