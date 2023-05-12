import Link from "next/link";
import React, { useId } from "react";

/**
 * NavItem to show the navigation item
 *
 * @param label - Is to display the text that you want to show with the link
 * @param href - It is the location where you want to navigate
 * @param subMenu - It is the array of the menu if you want show the dropdown items inside the application.
 * @link subMenu is array of { label, href }
 */

export default function NavItem({
  label,
  Icon,
  href,
  content,
  subMenu,
  onClick,
  children,
}) {
  const id = useId();

  return (
    <li className={`nav-item ${subMenu ? "dropdown" : ""}`}>
      <Link
        className={`nav-link d-flex align-items-center gap-2 ${
          subMenu ? "dropdown-toggle" : ""
        }`}
        id={id}
        href={subMenu ? "#" : href}
        {...(subMenu && {
          role: "button",
          ["data-bs-toggle"]: "dropdown",
          ["aria-expanded"]: "false",
        })}
        {...(onClick && {
          onClick: onClick,
        })}
      >
        {Icon && <Icon />}
        {label}
        {children}
        {content && content}
      </Link>

      {subMenu && (
        <ul className="dropdown-menu" aria-labelledby={id}>
          {subMenu.map((menu, index) => (
            <NavItem key={`_dropdown${href}${index}`} {...menu} />
          ))}
        </ul>
      )}
    </li>
  );
}
