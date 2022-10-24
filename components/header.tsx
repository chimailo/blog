import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import Sidebar from "./drawer";
import NavItem from "./nav";
import { MoonIcon, RssIcon, SunIcon } from "./svg/icons";
import { NAVLINKS } from "../lib/constants";
import { useTheme } from "./theme";
import Portal from "./portal";
import styles from "./drawer/styles.module.css";

export default function Header() {
  const [open, setOpen] = useState<Boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme, onChange } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.removeAttribute("style");
    }
  }, [open]);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <header
        className={clsx(
          "flex flex-shrink-0 sticky top-0 justify-center items-center h-16 w-full",
          { "bg-inherit": !open }
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-14 flex items-center max-w-screen-xl w-full">
          {/* navlist */}
          <nav
            className={clsx("flex items-center flex-1", { "z-10": open })}
            aria-label="Main"
          >
            <Link href="/">
              <a className="mr-8 leading-[0]">
                <Image
                  src={`/assets/logo/logo-${theme}.svg`}
                  alt="logo"
                  width="40"
                  height="40"
                />
                {/* <Image
                src={`/assets/logo/logo-${theme}-2.png`}
                alt="logo"
                width="160"
                height="32"
              /> */}
              </a>
            </Link>
            <ul id="menu" role="menu" className="hidden md:flex items-center">
              {NAVLINKS.map((item, index) => (
                <NavItem classes="p-3" key={index} item={item} />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4 ">
            {!open && (
              <>
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
              </>
            )}
            {/* <button
              type="button"
              id="menubutton"
              onClick={toggleDrawer}
              className="m-0 leading-[0] border-none inline-flex  "
              aria-haspopup="true"
              aria-controls="menu"
            > */}
            <div
              className={clsx(
                "md:hidden p-2 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-full transition-colors",
                styles.navigation
              )}
            >
              <input
                id="mobile-nav"
                type="checkbox"
                aria-label="Toggle mobile navigation"
                checked={open}
                className={clsx(styles.input)}
                onChange={toggleDrawer}
              />
              <label
                htmlFor="mobile-nav"
                className={clsx("w-6 h-6 block relative", styles.label)}
              >
                {/* top: -rotate-45 top-50% w-full */}
                <span className="w-[120%] h-0.5 dark:bg-primary-400 bg-primary-800 absolute top-[10%] block right-0"></span>
                <span className="w-full h-0.5 dark:bg-primary-400 bg-primary-800 absolute top-[45%] block right-0"></span>
                {/* bottom: rotate-45 top-50% w-full */}
                <span className="w-[80%] h-0.5 dark:bg-primary-400 bg-primary-800 absolute bottom-[10%] block right-0"></span>
              </label>
              <Sidebar />
            </div>
            {/* </button> */}
          </div>
        </div>
      </header>
      {/* 
      <Portal selector="#drawer">
        <Sidebar close={toggleDrawer} open={open} ref={sidebarRef} />
      </Portal> */}
      {/* <CSSTransition
        in={open}
        nodeRef={sidebarRef}
        timeout={3000}
        classNames="fade"
        // unmountOnExit
      >
      </CSSTransition> */}
    </>
  );
}
