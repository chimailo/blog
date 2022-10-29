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
        "h-screen outline-0 fixed dark:bg-primary-800/10 focus:outline-0 bg-primary-100/10 backdrop-blur-md inset-0 transition-opacity", open ? 'opacity-1 z-[2]' : 'opacity-0 delay-[400ms] -z-10'
      )}
    >
      <aside
        tab-index={1}
        className={clsx(
          "w-[min(75vw,_384px)] dark:bg-primary-900 bg-primary-50 h-screen fixed overflow-auto z-[3] top-0 right-0 block transition-transform ease-in-out duration-500", open ? "translate-x-0 delay-50" : "translate-x-full"
        )}
      >
        <nav>
          <ul className="mt-32">
            {NAVLINKS.map((item, index) => (
              <NavItem
                item={item}
                key={index}
                classes="text-xl p-4 sm:px-6 my-6 leading-none text-center dark:hover:bg-primary-800 hover:bg-primary-100"
              />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
