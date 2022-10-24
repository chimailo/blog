import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Spacer from "./spacer";
import { ThemeProvider } from "./theme";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <ThemeProvider>
        <div className="min-h-screen bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-200">
      <a href="#main" className="sr-only focus:not-sr-only focus:top-6 focus:left-6 focus:z-50 focus:absolute focus:outline-0 focus:p-4 border-solid border-primary-700 border-2 rounded dark:border-primary-200">
        Skip to content
      </a>
          <Spacer size="small" />
          <Header />
          <main id="main">
            <Spacer size="large" />
            {children}
          </main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
