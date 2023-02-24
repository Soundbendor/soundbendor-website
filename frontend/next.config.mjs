/** @type {import('next').NextConfig} */
import BaseService from './models/__base.js'

const buildPathMapQuery = (urlPath) => {
  return { __nextDefaultLocale: 'en-US', __nextLocale: 'en-US', path: urlPath }
}

const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  trailingSlash: true,
  reactStrictMode: true,
  headers: async function(){
    return [
      {
        source: "/apply",
        headers: [
          { key: 'Referrer-Policy', value: 'no-referrer'},
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
          { key: "Access-Control-Allow-Headers", value: "Access-Control-Allow-Origin, Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version X-Auth-Token" }
        ]
      },
      {
        source: "/apply/",
        headers: [
          { key: 'Referrer-Policy', value: 'no-referrer'},
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
          { key: "Access-Control-Allow-Headers", value: "Access-Control-Allow-Origin, Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version X-Auth-Token" },
        ]
      }
    ]

  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const PageService = BaseService.constructDefaultService('api::page.page', 'page')
    const pages = PageService.getPages()
    const pathMap = {}
    let suffix = ''
    if (dev) suffix = '/'
    for (const page of pages) {
      const pageType = page.PageType.toLowerCase()
      pathMap[page.URLPath] = { page: suffix + pageType, query: buildPathMapQuery(page.URLPath) }
    }
    return pathMap
  }
}

export default nextConfig


