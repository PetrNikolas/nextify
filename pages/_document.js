/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css
You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from 'next/document'
import Nav from '../components/nav'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/css/styles.chunk.css' />
        </Head>
        <body>
          <Nav />

          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}
