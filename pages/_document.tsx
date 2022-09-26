import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
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
      const colorPreference = window.localStorage.getItem('ci-color-mode')
      const hasColorPreference = typeof colorPreference === 'string'

      if (hasColorPreference) return colorPreference
      
      const mqPreference = window.matchMedia("(prefers-color-scheme: dark)")
      const hasMQPreference = typeof mqPreference.matches === 'boolean'

      if (hasMQPreference) {
        return mqPreference.matches ? 'dark' : 'light'
      }
      return 'light'
    }

    getColorMode() === 'dark' && document.documentElement.classList.add('dark')
  })()
`;
