import Head from "next/head";

import Start from "@/ui/Start";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Shop Karo | Shop what you love</title>
        <meta
          name="description"
          content="Welcome to shop karo. Your can browse what you like. Any kind of product that you want to buy. All products are in a resionable price range."
          key="desc"
        />
        <meta property="og:title" content="Welcome to shop karo." />
        <meta property="og:image" content="/favicon.ico" />
      </Head>

      <Start />
    </>
  );
}
