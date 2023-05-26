
import Script from 'next/script'
import Header from '../components/Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js' />
      <Script
        id='bs-script'
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
        crossOrigin='anonymous'
      />
      <Header />
      <Navbar />
      <div id='app-body-content'>
        <div className='container-fluid px-0'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
