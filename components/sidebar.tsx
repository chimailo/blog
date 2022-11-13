import clsx from "clsx";
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
      className={clsx(
        "h-screen outline-0 fixed dark:bg-slate-700/20 focus:outline-0 bg-slate-200/20 backdrop-blur-sm inset-0 transition-all", open ? 'opacity-1 z-[3]' : 'opacity-0 delay-[400ms] invisible'
      )}
    >
      <aside
        tab-index={1}
        className={clsx(
          "w-[min(75vw,_384px)] dark:bg-main bg-slate-50 h-screen fixed overflow-auto z-[4] top-0 left-0 block transition-transform ease-in-out duration-500", open ? "translate-x-0 delay-50" : "-translate-x-full"
        )}
      >
        <nav>
          <ul className="mt-32">
            {NAVLINKS.map((item, index) => (
              <NavItem
                item={item}
                key={index}
                classes="text-xl p-4 sm:px-6 my-4 leading-none dark:hover:bg-slate-700 hover:bg-slate-100"
              />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
