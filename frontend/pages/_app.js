import App from 'next/app'
import '../styles/globals.css'
import PageService from '../models/pages'
import Page from '../components/PageParts'
import Layout from '../components/Layout'
import FormLayout from '../components/Formlayout'

function MyApp ({ Component, pageProps, router }) {
  let path = router.route
  /*if (path === undefined && router.state !== undefined) path = router.state.route*/
  const pageCustomContent = <Component {...pageProps} />
  const page = PageService.getPage({ URLPath__eq: path })
  return <Layout><Page page={page} pageCustomContent={pageCustomContent} /></Layout>
}



export default MyApp
