import { useEffect, useState } from "react";

import NavItem from "./NavItem";

import useCategories from "@/hooks/api/useCategories";
import { capitalize } from "@/utils/text-helper";

const navs = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Categories",
    href: "/",
    subMenu: [
      {
        id: "category1",
        label: "Smart Phone",
        href: "/smart-phone",
      },
      {
        id: "category1",
        label: "Laptops",
        href: "/laptops",
      },
    ],
  },
  {
    id: 3,
    label: "Deals",
    href: "/deals",
  },
  {
    id: 4,
    label: "What's New",
    href: "/what-new",
  },
  {
    id: 5,
    label: "Delivery",
    href: "/delivery",
  },
];

export default function Navigation() {
  const [navigations, setNavigations] = useState(navs);
  const { data, error, isLoading } = useCategories();

  const updateCategories = (items) => {
    const temp = [...navigations];

    temp[1].subMenu = items.map((category, index) => ({
      id: index + 1,
      label: capitalize(category),
      href: `/products?category=${category}`,
    }));

    setNavigations(temp);
  };

  useEffect(() => {
    if (data) updateCategories(data);
  }, [data]);

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ms-md-4 gap-2">
      {navigations.map((nav) => (
        <NavItem key={`_navItem${nav.id}`} {...nav} />
      ))}
    </ul>
  );
}
