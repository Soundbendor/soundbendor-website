import '../styles/globals.css'
import PageService from '../models/pages'
import Page from '../components/PageParts'
import Layout from '../components/Layout'

function MyApp ({ Component, pageProps, router }) {
  const path = router.route
  const pageCustomContent = <Component {...pageProps} />
  const page = PageService.getPage({ URLPath__eq: path })
  return <Layout><Page page={page} pageCustomContent={pageCustomContent} /></Layout>
}

export default MyApp
