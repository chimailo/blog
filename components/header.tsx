import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NavItem from "./nav";
import Sidebar from "./sidebar";
import Portal from "./portal";
import { NAVLINKS } from "../lib/constants";
import { useTheme } from "./theme";
import { MoonIcon, SunIcon } from "./svg/icons";
import IconButton from "./button/icon-button";

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
          "flex flex-shrink-0 z-[4] sticky top-0 justify-center items-center h-14 sm:h-16 md:h-20 w-full transition-colors", theme === "dark" ? "bg-main" : "bg-slate-50"
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-14 flex items-center max-w-screen-xl w-full">
          <Link href="/">
            <a className="mr-8 leading-[0] capitalize font-serif text-xl sm:text-2xl md:text-4xl dark:text-slate-50 text-main font-semibold">
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
            <IconButton handleClick={onChange}>
              {theme === "dark" ? (
                <SunIcon svgClass="dark:text-slate-400 dark:group-hover:text-slate-100 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-700" />
              ) : (
                <MoonIcon svgClass="text-slate-600 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-main transition-colors duration-700" />
              )}
            </IconButton>
            <IconButton
              id="menubutton"
              handleClick={() => setOpen(!open)}
              classes="md:hidden"
              aria-haspopup="true"
              aria-controls="menu"
            >
              <div className="w-5 h-5 relative">
                <span className={clsx("h-0.5 dark:bg-slate-400 dark:group-hover:bg-slate-100 bg-slate-600 group-hover:bg-main absolute block right-0 w-[120%] top-0 transition duration-700", open ? "opacity-0" : "opacity-1")}></span>
                <span className={clsx("w-full h-0.5 dark:bg-slate-400 dark:group-hover:bg-slate-100 bg-slate-600 group-hover:bg-main absolute block top-1/2 right-0 transition duration-700", open ? "-rotate-[225deg]" : "")}></span>
                <span className={clsx("h-0.5 dark:bg-slate-400 dark:group-hover:bg-slate-100 bg-slate-600 group-hover:bg-main absolute block right-0 transition duration-700", open ? "rotate-[225deg] w-full top-1/2" : "w-[80%] bottom-0")}></span>
              </div>
            </IconButton>
          </div>
        </div>
      </header>
      <Portal selector="#drawer">
        <Sidebar close={() => setOpen(false)} open={open} />
      </Portal>
    </>
  );
}
