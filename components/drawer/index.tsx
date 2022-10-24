import React, { createRef, useState } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import clsx from "clsx";
import NavItem from "../nav";
import { MoonIcon, RssIcon, SunIcon } from "../svg/icons";
import { NAVLINKS } from "../../lib/constants";
import { useTheme } from "../theme";
import styles from "./styles.module.css";

type Props = {
  close: () => void;
  open: boolean;
};

const Drawer = React.forwardRef(
  ({ close, open }: Props, ref: HTMLDivElement) => {
    const { theme, onChange } = useTheme();

    // const navItems = NAVLINKS.map((item) => ({
    //   ...item,
    //   ref: createRef(null),
    // }));

    return (
      <>
        <div
          onClick={close}
          ref={ref}
          aria-hidden={!open}
          tab-index={1}
          className={clsx(
            "h-screen outline-0 fixed dark:bg-primary-800/10 focus:outline-0 bg-primary-100/10 backdrop-blur-sm z-[2] inset-0",
            styles.backdrop
          )}
        ></div>
        <aside
          className={clsx(
            "w-full sm:max-w-sm dark:bg-primary-900 bg-primary-50 h-screen fixed overflow-auto z-[3] top-0 right-0 block",
            styles.sidebar
          )}
        >
          <nav>
            <ul className="mt-32">
              {NAVLINKS.map((item, index) => (
                <NavItem
                  item={item}
                  key={index}
                  classes="text-xl p-4 sm:px-6 my-6 leading-none dark:hover:bg-primary-800 hover:bg-primary-100"
                />
              ))}
            </ul>
            <div className="flex items-center gap-8">
              {open && (
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
            </div>
          </nav>
        </aside>
      </>
    );
  }
);

export default Drawer;
