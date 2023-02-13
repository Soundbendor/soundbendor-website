/** @type {import('next').NextConfig} */
import BaseService from './models/__base.js'

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function(defaultPathMap, {dev, dir, outDir, distDir, buildId}){
    const PageService = BaseService.constructDefaultService('api::page.page', 'page')
    const pages = PageService.getPages()
    let pathMap = {}
    for(let page of pages){
      let pageType = page.PageType.toLowerCase()
      if(pageType == 'home') pageType='index'
      if(pageType == 'content'){
        pathMap[page.URLPath] = {'page': pageType, query: {'path': page.URLPath}}
      } else {
        pathMap[page.URLPath] = {'page': pageType}
      }
    }
    console.log(pathMap)
    return pathMap
  }
}

export default nextConfig
