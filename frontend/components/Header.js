import Head from 'next/head'
const Header = () => {
  return (
    <Head>
      <meta name='viewport' contents='width=device-width, initial-scale=1' />
      <style>{
        /* This fixes the footer to the bottom of the page when the content is less than the height of the browser window */
        `#__next {
          display: grid;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
        }`
      }
      </style>
    </Head>
  )
}

export default Header
