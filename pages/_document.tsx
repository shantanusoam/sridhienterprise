import { Head, Html, Main, NextScript } from 'next/document';

// Minimal custom Document.
// This repo primarily uses the App Router (`app/`), but some Next.js build checks
// still attempt to resolve `/_document`. Providing this file keeps `next build`
// stable on Windows environments.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

