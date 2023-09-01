import { useEffect } from "react";
import { Asap, Playfair_Display } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import { ThemeProvider } from "./theme";
import Container from "./container";

type Props = {
  children: React.ReactNode;
};

const asap = Asap({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-asap",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const Layout = ({ children }: Props) => {
  useEffect(() => {
    const body = document.getElementById("body");
    body.classList.add(asap.variable);
    body.classList.add(playfair.variable);
  }, []);

  return (
    <>
      <Meta />
      <ThemeProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:top-6 focus:left-6 focus:z-50 focus:absolute focus:outline-0 focus:p-4 border-solid border-primary-400 border-2 rounded dark:border-slate-50"
        >
          Skip to content
        </a>
        <Header />
        <Container>{children}</Container>
        <Footer />
        <div id="drawer" />
      </ThemeProvider>
    </>
  );
};

export default Layout;
