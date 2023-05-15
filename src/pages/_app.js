import Script from "next/script";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

import configureStore from "@/store/configureStore";

import "@/styles/global.css";
import "@/styles/fonts.css";
import "@/styles/styles.scss";

import Auth from "@/components/Auth";
import Layout from "@/components/Layout";

const store = configureStore();

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Shop Karo</title>
        <meta name="theme-color" content="#3a6600" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />

      <Provider store={store}>
        <SessionProvider session={session}>
          {Component.Auth ? (
            <Auth>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Auth>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </SessionProvider>
      </Provider>
    </>
  );
}
