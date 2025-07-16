

'use client';

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        // cacheTime: 5 * 60 * 1000,
        retry: 3,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        // suspense: false,
        // useErrorBoundary: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left"/> */}
    </QueryClientProvider>
  );
}
