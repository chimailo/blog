import React from "react";
import Link from "next/link";
import { Navlink } from "../lib/constants";

type Props = {
  key: number;
  classes: string;
  item: Navlink;
};

const NavItem = ({ classes, item }: Props) => {
  return (
    <li role="none" className="my-2">
      <Link href={item.link}>
        <a
          role="menuitem"
          className={`capitalize block font-medium w-full truncate text-primary-800 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-100 transition-colors ${classes}`}
        >
          {item.name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
