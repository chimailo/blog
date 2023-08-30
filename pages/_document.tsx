import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        id="body"
        className="min-h-screen bg-slate-50 dark:bg-main-700 text-main-600 transition dark:text-main-100 font-sans"
      >
        <Main />
        <NextScript />
        <Script
          id="color-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: injectColorMode }}
        ></Script>
      </body>
    </Html>
  );
}

const injectColorMode = `
  (function() {
    function getColorMode() {
      const colorPreference = window.localStorage.getItem('ci-theme')
      const hasColorPreference = typeof colorPreference === 'string'

      if (hasColorPreference) return colorPreference
      
      const mqPreference = window.matchMedia("(prefers-color-scheme: dark)")
      const hasMQPreference = typeof mqPreference.matches === 'boolean'

      if (hasMQPreference) {
        return mqPreference.matches ? 'dark' : 'light'
      }
      return 'dark'
    }
    getColorMode() === 'dark' && document.documentElement.classList.add('dark')
  })()
`;
