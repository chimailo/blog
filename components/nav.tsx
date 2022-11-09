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
          className={`capitalize block font-medium w-full truncate text-slate-600 hover:text-main dark:text-slate-300 transition-all dark:hover:text-slate-50 ${classes}`}
        >
          {item.name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
