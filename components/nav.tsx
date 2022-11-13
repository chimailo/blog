import React from "react";
import Link from "next/link";
import { Navlink } from "../lib/constants";
import { ExternalLinkIcon } from "./svg/icons";

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
          className={`capitalize font-medium w-full whitespace-nowrap leading-none text-slate-600 hover:text-main dark:text-slate-300 block transition-all dark:hover:text-slate-50 ${classes}`}
        >
          {item.name}
          {item.external && <ExternalLinkIcon svgClass="text-inherit w-3 h-3 ml-1" />}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
