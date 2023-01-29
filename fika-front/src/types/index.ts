import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { Router } from "next/router";
import type { ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (
    page: ReactNode,
    context: { pageProps: P; router: Router }
  ) => ReactNode;
};

export type CustomAppProps = Omit<AppProps, "pageProps"> & {
  Component: NextPageWithLayout;
  pageProps: object;
};
