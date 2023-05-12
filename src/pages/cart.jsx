import { getSession } from "next-auth/react";

import CheckoutUI from "@/ui/Checkout";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function Cart({ loading, user }) {
  if (loading)
    return (
      <>
        <Header />
        <p>Loading.....</p>;
      </>
    );

  return (
    <Suspense fallback={<div>Loading from suspense</div>}>
      <CheckoutUI user={user} />
    </Suspense>
  );
}

Cart.Auth = true;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) return { redirect: { parmanent: false, destination: "/login" } };

  const res = await fetch(`https://dummyjson.com/users/${session.account.id}`);
  const user = await res.json();

  return { props: { loading: false, user } };
}
