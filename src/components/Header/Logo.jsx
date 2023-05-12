import Image from "next/image";
import Link from "next/link";
import { Limelight } from "next/font/google";

import React from "react";

const limelight = Limelight({ subsets: ["latin"], weight: "400", display: "fallback" });

export default function Logo() {
  return (
    <Link className="navbar-brand" href="/">
      <Image src="/assets/logo.png" height={50} width={50} className="logo" alt="Logo" />
      <span className={limelight.className}>
        <span>Shop</span> Karo
      </span>
    </Link>
  );
}
