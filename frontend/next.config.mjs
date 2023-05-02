/** @type {import('next').NextConfig} */
import BaseService from './models/__base.js'

async function getRewrites () {
  const PageService = BaseService.constructDefaultService('api::page.page', 'page')
  const pages = PageService.getPages()
  const rewrites = []
  let pageType = ''
  for (const page of pages) {
    pageType = page.PageType.toLowerCase()
    if (pageType === 'content') {
      rewrites.push({ source: page.URLPath, destination: '/content/'+page.id.toString() })
    }
  }
  return rewrites
}

const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  rewrites: getRewrites,
  trailingSlash: true,
  reactStrictMode: true
}

export default nextConfig
