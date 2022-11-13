import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Spacer from "./spacer";
import { ThemeProvider } from "./theme";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <ThemeProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-main text-main transition dark:text-slate-300 z-[2]">
          <a href="#main" className="sr-only focus:not-sr-only focus:top-6 focus:left-6 focus:z-50 focus:absolute focus:outline-0 focus:p-4 border-solid border-main border-2 rounded dark:border-slate-50">
            Skip to content
          </a>
          <Header />
          <main id="main">
            {children}
          </main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};
