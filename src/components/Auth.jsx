import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import React from "react";

export default function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (status === "unauthenticated") return router.back();

  return children;
}
