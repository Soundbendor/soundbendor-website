import BaseService from './__base'
import ImageService from './images'

function Page (rawData) {
  let p = BaseService.defaultDataConstructor(rawData)
  p.pageparts = PagepartService.getPageparts({'id__in':p.PagePart, 'postsortBy':'id', 'postsortDirection':p.PagePart}) 
  return p
}

function PagePart (rawData) {
  let p = BaseService.defaultDataConstructor(rawData)
  p.image = ImageService.getImage({ 'id__eq': p.PagePartImage })
  return p
}



const PageService = BaseService.constructDefaultService('api::page.page', 'page', 'pages', Page)
const PagepartService = BaseService.constructDefaultService('page-part.page-part', 'pagepart', 'pageparts', PagePart)

module.exports = PageService
