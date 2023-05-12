import { BiUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useSession, signOut } from "next-auth/react";

import NavItem from "./NavItem";
import Counter from "./Counter";

const navs = [
  {
    id: "account_1",
    label: "Account",
    href: "/",
    Icon: BiUser,
    subMenu: [
      {
        id: "_account_submenu_1",
        label: "My Profile",
        href: "/account",
      },
      {
        id: "_account_submenu_2",
        label: "Favorites",
        href: "/favorites",
      },
    ],
  },
  {
    id: "cart_1",
    label: "Cart",
    href: "/cart",
    Icon: BsCart3,
    content: <Counter />,
  },
  // {
  //   id: "sign_out_1",
  //   label: "Sign Out",
  //   href: "/",
  //   Icon: FiLogOut,
  //   onClick: signOut,
  // },
];

export default function Account() {
  const { data: user } = useSession();

  return (
    <div className="d-flex gap-0 ms-lg-2 ms-md-2">
      <ul className="navbar-nav gap-3">
        {!user ? (
          <NavItem Icon={FiLogIn} href="/login" label="Login" />
        ) : (
          navs.map((nav) => <NavItem key={`_navItem${nav.id}`} {...nav} />)
        )}
      </ul>
    </div>
  );
}
