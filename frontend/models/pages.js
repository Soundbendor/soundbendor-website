import BaseService from './__base'
import ImageService from './images'

/* Constants */
const ROW_TYPES = {
  PAGE_CUSTOM_CONTENT: 'page-custom-content',
  SLIDE: 'slide',
  SLIDESHOW: 'slideshow',
  ONE_COLUMN: 'one-column',
  TWO_COLUMN: 'two-column'
}
const COMPONENT = '__component'

/* Page Object */
function Page (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  if (p.Rows === undefined) p.Rows = []
  // START HACK
  // there seems to be a bug with the export module in the backend, wherein dynamic zones (page components are duplicated exactly twice)
  if (p.Rows.length) {
    const halfLength = p.Rows.length / 2
    const half1 = p.Rows.slice(0, halfLength)
    const half2 = p.Rows.slice(halfLength, p.Rows.length)
    if (JSON.stringify(half1) === JSON.stringify(half2)) p.Rows = half1
  } else {
    p.Rows[0] = {}
    p.Rows[0][COMPONENT] = 'Layout.' + ROW_TYPES.PAGE_CUSTOM_CONTENT
  }
  // END HACK
  // Generate easy to display json (rather than references to ids)
  p.RowsContent = p.Rows.map((row) => {
    const componentType = row[COMPONENT].split('.')[1]
    let value = {}
    if (componentType !== ROW_TYPES.PAGE_CUSTOM_CONTENT) {
      value = LayoutServices[componentType].getRow({ id__eq: row.id })
    }
    value[COMPONENT] = componentType
    return value
  })
  // combine slides to make slideshows
  let slideshowCounter = 1
  for (let i = 0; i < p.RowsContent.length; i++) {
    const row1 = p.RowsContent[i]
    if (row1[COMPONENT] === ROW_TYPES.SLIDE) {
      let j = i + 1
      for (j; j < p.RowsContent.length; j++) {
        const row2 = p.RowsContent[j]
        if (row2[COMPONENT] !== ROW_TYPES.SLIDE) break
      }
      const slides = p.RowsContent.splice(i, j - i)
      p.RowsContent.splice(i, 0, SlideShow(slides, slideshowCounter))
      slideshowCounter++
    }
  }
  return p
}

/* PagePart Object (Column) */
function PagePart (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  p.image = ImageService.getImage({ id__eq: p.PagePartImage })
  p.textAlignClass = 'left'
  if (p.PagePartTextAlign !== undefined && p.PagePartTextAlign) p.textAlignClass = p.PagePartTextAlign.toLowerCase()
  if (p.textAlignClass === 'left') p.textAlignClass = 'start'
  if (p.textAlignClass === 'right') p.textAlignClass = 'end'
  if (p.PagePartContent === undefined || !p.PagePartContent) p.PagePartContent = ''
  p.content = '<p>' + p.PagePartContent.replace(/\n\n/g, '</p><p>') + '</p>'

  return p
}

/* LAYOUT OBJECTS */
function Row (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  p.colorThemeClass = (p.ColorTheme === undefined || p.ColorTheme === null || !p.ColorTheme) ? 'white' : p.ColorTheme.toLowerCase()
  p.HasVerticalPadding = (p.HasVerticalPadding === undefined || p.HasVerticalPadding === null) ? 'true': p.HasVerticalPadding
  return p
}

function OneColumn (rawData) {
  const p = Row(rawData)
  p.Column1Content = PagepartService.getPagepart({ id__eq: p.Column1 })
  p.Column1Content.colClass = 'col'
  p.ColumnsContent = [p.Column1Content]
  return p
}

function TwoColumn (rawData) {
  const p = OneColumn(rawData)
  p.Column2Content = PagepartService.getPagepart({ id__eq: p.Column2 })
  if (p.ColumnRatio) {
    let class1 = 'col-6'
    let class2 = 'col-6'
    const ratio = p.ColumnRatio.substr(6)
    if (ratio === '1:2') {
      class1 = 'col-4'
      class2 = 'col-8'
    } else if (ratio === '2:1') {
      class2 = 'col-4'
      class1 = 'col-8'
    } else if (ratio === '1:3') {
      class1 = 'col-3'
      class2 = 'col-9'
    } else if (ratio === '3:1') {
      class2 = 'col-3'
      class1 = 'col-9'
    } else if (ratio === '1:5') {
      class1 = 'col-2'
      class2 = 'col-10'
    } else if (ratio === '5:1') {
      class2 = 'col-2'
      class1 = 'col-10'
    }
    p.Column1Content.colClass = class1
    p.Column2Content.colClass = class2
  }
  p.ColumnsContent.push(p.Column2Content)
  return p
}

function Slide (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  return p
}

function SlideShow (slides, id) {
  const p = { id }
  p[COMPONENT] = ROW_TYPES.SLIDESHOW
  p[ROW_TYPES.SLIDE + 's'] = slides
  return p
}

/* LAYOUT SERVICES */
const LayoutServices = {}
LayoutServices[ROW_TYPES.ONE_COLUMN] = BaseService.constructDefaultService('layout.' + ROW_TYPES.ONE_COLUMN, 'row', 'rows', OneColumn)
LayoutServices[ROW_TYPES.TWO_COLUMN] = BaseService.constructDefaultService('layout.' + ROW_TYPES.TWO_COLUMN, 'row', 'rows', TwoColumn)
LayoutServices[ROW_TYPES.SLIDE] = BaseService.constructDefaultService('layout.' + ROW_TYPES.SLIDE, 'row', 'rows', Slide)

/* PAGE PART SERVICE */
const PagepartService = BaseService.constructDefaultService('page-part.page-part', 'pagepart', 'pageparts', PagePart)

/* PAGE SERVICE */
const PageService = BaseService.constructDefaultService('api::page.page', 'page', 'pages', Page)
PageService.ROW_TYPES = ROW_TYPES
PageService.COMPONENT = COMPONENT

const NavigationService = BaseService.constructDefaultService('navigation.navigation-page', 'navItem')
PageService.getNavigationPages = () => {
  const pageIds = NavigationService.getNavItems().map((navItem) => navItem.page)
  return PageService.getPages({ id__in: pageIds, URLPath__neq: '/' })
}

module.exports = PageService
