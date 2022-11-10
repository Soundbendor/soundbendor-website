import '../styles/globals.css'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta name="viewport" contents="width=device-width, initial-scale=1" />
  </Head>
  <Navbar />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
