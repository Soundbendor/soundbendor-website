/** @type {import('next').NextConfig} */
import PageService from 'models/pages'

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function(defaultPathMap, {dev, dir, outDir, distDir, buildId}){
    const pages = PageService.getPages()
    console.log(pages)
    console.log(defaultPathMap)
    console.log({dev, dir, outDir, distDir, buildId})
    return defaultPathMap
  }
}

export default nextConfig
