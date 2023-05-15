import React from "react";
import Head from "next/head";

import LoginUI from "@/ui/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login to continue with Shop Karo</title>
        <meta
          name="description"
          content="Welcome to Shop Karo. Please login with your registerd account to continue shoping."
          key="desc"
        />
        <meta
          property="og:description"
          content="Welcome to Shop Karo. Please login with your registerd account to continue shoping."
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>

      <LoginUI />
    </>
  );
}
