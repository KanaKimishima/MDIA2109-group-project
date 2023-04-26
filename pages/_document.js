import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div>
          This is replaced by top nav bar
        </div>
        <Main />
        <div>
          This is replaced by bottom nav bar
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
