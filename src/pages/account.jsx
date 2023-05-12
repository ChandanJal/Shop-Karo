import React from "react";
import { getSession } from "next-auth/react";

import AccountUI from "@/ui/Account";

export default function Account({ user, data }) {
  return <AccountUI user={user} data={data} />;
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
