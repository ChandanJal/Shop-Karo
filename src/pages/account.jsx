import React from "react";
import Head from "next/head";
import { getSession } from "next-auth/react";

import AccountUI from "@/ui/Account";

export default function Account({ user, data }) {
  return (
    <>
      <Head>
        <title>
          {user.firstName} {user.lastName}, Welcome to your account
        </title>

        <meta name="description" content={`${user.firstName} ${user.lastName} welcome to your account`} key="desc" />

        <meta name="og:description" content="Account is created with shop karo" />

        <meta name="og:image" content="/favicon.ico" />
      </Head>

      <AccountUI user={user} data={data} />
    </>
  );
}

Account.Auth = true;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    const res = await fetch(`https://dummyjson.com/users/${session.account.id}`);
    const user = await res.json();

    return { props: { user, data: session } };
  }

  return { redirect: { permanent: false, destination: "/login" }, props: {} };
}
