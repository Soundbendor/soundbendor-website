import App from 'next/app'
import '../styles/globals.css'
import PageService from '../models/pages'
import Page from '../components/PageParts'
import Layout from '../components/Layout'
import FormLayout from '../components/Formlayout'

function MyApp ({ Component, pageProps, router }) {
  let path = router.query.path
  if (path === undefined && router.state !== undefined) path = router.state.route
  const pageCustomContent = <Component {...pageProps} />
  const page = PageService.getPage({ URLPath__eq: path })
  let out = ''
  if (path === '/contactform') {
    out = <FormLayout><Page page={page} pageCustomContent={pageCustomContent} /></FormLayout>
  } else {
    out = <Layout><Page page={page} pageCustomContent={pageCustomContent} /></Layout>
  }
  return out
}

MyApp.getInitialProps = async (context) => {
  return App.getInitialProps(context)
}

export default MyApp
