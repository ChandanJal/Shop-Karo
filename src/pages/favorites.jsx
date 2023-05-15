import Head from "next/head";
import { useSelector } from "react-redux";

import FavoritesUI from "@/ui/Favorites";

import { getFavorites } from "@/store/entities/favorites";

export default function Favorites() {
  const favorites = useSelector(getFavorites);

  const getContent = () =>
    favorites.length > 0
      ? `You have ${favorites.length} favorites items in your list`
      : "That's a same you don't have any favorite item";

  return (
    <>
      <Head>
        <title>Favorites | {getContent()}</title>

        <meta
          title="description"
          content="Your favorites items are listed here. Take a look and add them to your cart. "
          key="desc"
        />

        <meta
          name="og:description"
          content="Your favorites items are listed here. Take a look and add them to your cart."
        />

        <meta name="og:image" content="/favicon.ico" />
      </Head>

      <FavoritesUI />
    </>
  );
}
