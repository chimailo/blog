import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  external?: boolean;
};

export default function ArrowLink(props: Props) {
  const { children, href, external } = props;

  return (
    <>
      {external ? (
        <a
          href={href}
          rel="noreferrer noopener"
          target="_blank"
          className="flex items-center gap-4 capitalize group text-main h-10 px-4 dark:text-slate-100"
        >
          <span className="after:transition motion-reduce:after:transition-none after:origin-left group-hover:after:scale-x-100 after:w-full after:h-0.5 after:relative after:bg-current leading-none after:scale-x-0 after:block after:-bottom-[1px] after:left-0 text-lg">
            {children}
          </span>
          <span className="text-inherit text-sm leading-none group-hover:-translate-x-1 transition-transform motion-reduce:transition-none motion-reduce:hover:transform-none">
            &rarr;
          </span>
        </a>
      ) : (
        <Link href={href}>
          <a className="flex items-center gap-4 capitalize group text-main h-10 px-4 dark:text-slate-100">
            <span className="after:transition motion-reduce:after:transition-none after:origin-left group-hover:after:scale-x-100 after:w-full after:h-0.5 after:relative after:bg-current leading-none after:scale-x-0 after:block after:-bottom-[1px] after:left-0 text-lg">
              {children}
            </span>
            <span className="text-inherit text-sm leading-none group-hover:-translate-x-1 transition-transform motion-reduce:transition-none motion-reduce:hover:transform-none">
              &rarr;
            </span>
          </a>
        </Link>
      )}
    </>
  );
}
