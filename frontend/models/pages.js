import BaseService from './__base'

function Page (rawData) {
  let p = BaseService.defaultDataConstructor(rawData)
  p.pageparts = PagepartService.getPageparts({'id__in':p.PagePart}) 
  return p
}

const PageService = BaseService.constructDefaultService('api::page.page', 'page', 'pages', Page)
const PagepartService = BaseService.constructDefaultService('page-part.page-part', 'pagepart')

module.exports = PageService
