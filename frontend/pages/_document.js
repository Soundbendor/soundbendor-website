import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
            crossOrigin='anonymous'
          />
          <NextScript />
          <style jsx global>{`
            /* This fixes the footer to the bottom of the page when the content is less than the height of the browser window */
            #__next {
              display: grid;
              grid-template-rows: auto 1fr auto;
              min-height: 100vh;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument
