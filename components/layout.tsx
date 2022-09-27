import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
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
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
