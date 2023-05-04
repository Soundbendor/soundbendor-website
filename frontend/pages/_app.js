import '../styles/globals.css'
import PageService from '../models/pages'
import Page from '../components/PageParts'
import Layout from '../components/Layout'

function MyApp ({ Component, pageProps, router }) {
  const path = router.route
  console.log('BEFORE __APP pageCustomContent')
  const pageCustomContent = <Component {...pageProps} />
  console.log('BEFORE __APP PAGE')
  const page = PageService.getPage({ URLPath__eq: path })
  console.log('AFTER __APP PAGE')
  return <Layout><Page page={page} pageCustomContent={pageCustomContent} /></Layout>
}

export default MyApp
