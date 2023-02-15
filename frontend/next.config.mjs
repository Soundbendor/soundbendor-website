/** @type {import('next').NextConfig} */
import BaseService from './models/__base.js'

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const PageService = BaseService.constructDefaultService('api::page.page', 'page')
    const pages = PageService.getPages()
    const pathMap = {}
    let suffix = ''
    if (dev) suffix = '/'
    for (const page of pages) {
      const pageType = page.PageType.toLowerCase()
      pathMap[page.URLPath] = { page: suffix + pageType, query: { path: page.URLPath } }
    }
    return pathMap
  }
}

export default nextConfig
