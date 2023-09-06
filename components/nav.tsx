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
      <Link
        role="menuitem"
        href={item.link}
        className={`capitalize font-medium w-full whitespace-nowrap leading-none text-slate-500 hover:text-secondary-300 dark:text-secondary-100 block transition-all motion-reduce:transition-none motion-reduce:hover:text-secondary-300 motion-reduce:dark:hover:text-slate-50 dark:hover:text-slate-50 ${classes}`}
      >
        {item.name}
        {item.external && (
          <ExternalLinkIcon svgClass="text-inherit w-3 h-3 ml-1" />
        )}
      </Link>
    </li>
  );
};

export default NavItem;
