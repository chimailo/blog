import cn from "classnames";
import NavItem from "./nav";
import { NAVLINKS } from "../lib/constants";

type Props = {
  close: () => void;
  open: boolean;
};

export default function Sidebar({ close, open }: Props) {
  return (
    <div
      onClick={close}
      aria-hidden={!open}
      className={cn(
        "h-screen outline-0 fixed dark:bg-primary-400/20 focus:outline-0 bg-slate-200/20 backdrop-blur-sm inset-0 transition-all motion-reduce:transition-none",
        open ? "opacity-1 z-[3]" : "opacity-0 delay-[400ms] invisible"
      )}
    >
      <aside
        tab-index={1}
        className={cn(
          "w-[min(75vw,_320px)] dark:bg-primary-300 bg-slate-100 h-screen fixed overflow-auto z-[4] top-0 right-0 block transition-transform ease-in-out duration-500 shadow-lg motion-reduce:transition-none motion-reduce:transform-none",
          open ? "translate-x-0 delay-50" : "translate-x-full"
        )}
      >
        <nav>
          <ul className="mt-32">
            {NAVLINKS.map((item, index) => (
              <NavItem
                item={item}
                key={index}
                classes="text-xl p-4 sm:px-6 my-4 leading-none transition-colors dark:hover:bg-primary-400 hover:bg-slate-200 motion-reduce:transition-none motion-reduce:dark:hover:bg-primary-400 motion-reduce:hover:bg-slate-200"
              />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
