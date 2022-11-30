import '../styles/globals.css'
import Script from 'next/script'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js' />
      <Script 
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' 
        integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p' 
        crossorigin='anonymous' 
        />
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
