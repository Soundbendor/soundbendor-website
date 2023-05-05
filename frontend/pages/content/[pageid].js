import PageService from '../../models/pages'
import Page from '../../components/PageParts'

export default function Content ({ pageid }) {
  const page = PageService.getPage(pageid)
  const pageCustomContent = ''
  return <Page page={page} pageCustomContent={pageCustomContent} />
}

export async function getStaticPaths () {
  const pages = PageService.getPages()
  const paths = []
  for (const i in pages) {
    const page = pages[i]
    if (page.PageType === 'Content') paths.push({ params: { pageid: page.id.toString() } })
  }
  return {
    paths,
    fallback: false
  }
}

// This also gets called at build time
export async function getStaticProps (context) {
  console.log(context)

  return { props: { pageid: context.params.pageid } }
}
