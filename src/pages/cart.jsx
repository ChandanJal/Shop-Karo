import { getSession } from "next-auth/react";

import CheckoutUI from "@/ui/Checkout";

export default function Cart({ user }) {
  return <CheckoutUI user={user} />;
}

Cart.Auth = true;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) return { redirect: { parmanent: false, destination: "/login" } };

  const res = await fetch(`https://dummyjson.com/users/${session.account.id}`);
  const user = await res.json();

  return { props: { loading: false, user } };
}
