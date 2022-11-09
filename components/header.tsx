import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NavItem from "./nav";
import Sidebar from "./Sidebar";
import Portal from "./portal";
import { NAVLINKS } from "../lib/constants";
import { useTheme } from "./theme";
import { MoonIcon, SunIcon } from "./svg/icons";
import CircledButton from "./CircledButton";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, onChange } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.removeAttribute("style");
    }
  }, [open]);

  return (
    <>
      <header
        role="banner"
        className={clsx(
          "flex flex-shrink-0 z-[4] sticky top-0 justify-center items-center h-14 sm:h-16 w-full transition-colors", theme === "dark" ? "bg-main" : "bg-slate-50"
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-14 flex items-center max-w-screen-xl w-full">
          <Link href="/">
            <a className="mr-8 leading-[0] capitalize font-serif text-3xl sm:text-5xl dark:text-slate-50 text-main font-semibold">
              Chima Ilo
            </a>
          </Link>
          <nav
            className="flex items-center flex-1 justify-end"
            aria-label="Main"
          >
            <ul id="menu" role="menu" className="hidden md:flex items-center">
              {NAVLINKS.map((item, index) => (
                <NavItem key={index} item={item} classes="tracking-wide py-2 relative px-4 after:transition after:origin-left hover:after:scale-x-100 after:w-full after:h-0.5 after:relative after:bg-current after:scale-x-0 after:block after:-bottom-1 after:left-0" />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 md:ml-12">
            <CircledButton type="button" onChange={onChange}>
              {theme === "dark" ? (
                <SunIcon svgClass="dark:text-slate-300 w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <MoonIcon svgClass="text-slate-700 w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </CircledButton>
            <CircledButton
              type="button"
              id="menubutton"
              onClick={() => setOpen(!open)}
              classes="md:hidden"
              aria-haspopup="true"
              aria-controls="menu"
            >
              <div className="w-5 h-5 relative">
                <span className={clsx("h-0.5 dark:bg-slate-300 bg-slate-700 absolute block right-0 w-[120%] top-0 transition-opacity", open ? "opacity-0" : "opacity-1")}></span>
                <span className={clsx("w-full h-0.5 dark:bg-slate-300 bg-slate-700 absolute block top-1/2 right-0 transition-transform duration-500", open ? "-rotate-[225deg]" : "")}></span>
                <span className={clsx("h-0.5 dark:bg-slate-300 bg-slate-700 absolute block right-0 transition-transform bottom-0 duration-500", open ? "rotate-[225deg] w-full" : "w-[80%]")}></span>
              </div>
            </CircledButton>
          </div>
        </div>
      </header>
      <Portal selector="#drawer">
        <Sidebar close={() => setOpen(false)} open={open} />
      </Portal>
    </>
  );
}
