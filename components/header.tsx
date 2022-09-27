import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "./theme";

interface Props {
  changeTheme: () => void;
}

const Header = () => {
  const { theme, onChange } = useTheme();
  const NAVLINKS = [
    {
      name: "about me",
      link: "/me",
    },
    {
      name: "articles",
      link: "/articles",
    },
    {
      name: "projects",
      link: "/projects",
    },
    {
      name: "contact",
      link: "/#contact",
    },
  ];

  function getLogo() {}

  return (
    <header className="flex flex-shrink-0 sticky top-0 justify-center items-center h-16 z-5 w-full">
      <nav className="px-4 sm:px-6 lg:px-8 h-14 flex items-center max-w-screen-xl w-full">
        {/* logo */}
        <Link href="/">
          <a className="flex items-center gap-3">
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
        {/* navlist */}
        <div className="flex items-center mx-8 gap-2 flex-grow justify-end">
          <ul className="flex items-center gap-2">
            {NAVLINKS.map((item, index) => (
              <li key={index} className="">
                <Link href={item.link}>
                  <a className="capitalize p-4 relative text-primary-600 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-200 hover:after:w-full hover:after:h-0.5 after:absolute hover:after:bg-primary-500 after:bottom-0 after:left-0 transition-color">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" onClick={onChange} className="">
            {theme === "dark" ? "light" : "dark"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
