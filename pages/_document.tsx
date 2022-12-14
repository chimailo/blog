import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Asap:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <div id="drawer" />
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
      return 'dark'
    }
    getColorMode() === 'dark' && document.documentElement.classList.add('dark')
  })()
`;
