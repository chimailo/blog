import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import NavItem from "./nav";
import Sidebar from "./Sidebar";
import Portal from "./portal";
import { NAVLINKS } from "../lib/constants";
import { useTheme } from "./theme";
import { MoonIcon, RssIcon, SunIcon } from "./svg/icons";

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
        className={clsx(
          "flex flex-shrink-0 z-[4] sticky top-0 justify-center items-center h-16 w-full transition-colors", { "bg-inherit delay-700": !open }
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-14 flex items-center max-w-screen-xl w-full">
          <Link href="/">
            <a className="mr-8 leading-[0]">
              <Image
                src={`/assets/logo/logo-${theme}.svg`}
                alt="logo"
                width="40"
                height="40"
              />
            </a>
          </Link>
          <nav
            className="flex items-center flex-1 justify-end"
            aria-label="Main"
          >
            <ul id="menu" role="menu" className="hidden md:flex items-center">
              {NAVLINKS.map((item, index) => (
                <NavItem classes="py-2 px-4" key={index} item={item} />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4 ml-4 md:ml-12">
            <button
              type="button"
              onClick={onChange}
              className="m-0 leading-[0] border-none inline-flex p-2 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-full transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon svgClass="dark:text-primary-400" />
              ) : (
                <MoonIcon svgClass="text-primary-700" />
              )}
            </button>
            <button
              type="button"
              onClick={onChange}
              className="m-0 leading-[0] border-none inline-flex p-2 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-full transition-colors"
            >
              <RssIcon svgClass="text-primary-700 dark:text-primary-400" />
            </button>
            <button
              type="button"
              id="menubutton"
              onClick={() => setOpen(!open)}
              className="m-0 leading-[0] border-none inline-flex md:hidden p-2 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-full transition-colors"
              aria-haspopup="true"
              aria-controls="menu"
            >
              <div className="w-6 h-6 relative">
                <span className={clsx("h-0.5 dark:bg-primary-400 bg-primary-800 absolute block right-0 w-[120%] top-[10%] transition-opacity", open ? "opacity-0" : "opacity-1")}></span>
                <span className={clsx("w-full h-0.5 dark:bg-primary-400 bg-primary-800 absolute block right-0 transition-transform duration-500", open ? "-rotate-[225deg] top-1/2" : "top-[45%]")}></span>
                <span className={clsx("h-0.5 dark:bg-primary-400 bg-primary-800 absolute block right-0 transition-transform duration-500", open ? "rotate-[225deg] top-1/2 w-full" : "w-[80%] bottom-[10%]")}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <Portal selector="#drawer">
        <Sidebar close={() => setOpen(false)} open={open} />
      </Portal>
    </>
  );
}
