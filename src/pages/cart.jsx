import Head from "next/head";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";

import { getCartItems } from "@/store/entities/carts";

import CheckoutUI from "@/ui/Checkout";

export default function Cart({ user }) {
  const items = useSelector(getCartItems);

  const cartContent = () =>
    items.length > 0 ? `You have ${items.length} is your cart` : "You do not have anything on your cart.";

  return (
    <>
      <Head>
        <title>Check Out | {cartContent()}</title>

        <meta
          name="description"
          content={`${user.firstName} ${user.lastName} your cart items are here. You can check out now.`}
          key="desc"
        />

        <meta name="og:description" content="Buy what are on your cart. It is very simple and easy." />

        <meta name="og:image" content="./favicon.ico" />
      </Head>

      <CheckoutUI user={user} />
    </>
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
