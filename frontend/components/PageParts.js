import Link from 'next/link'
import PageService from '../models/pages'
import { Carousel, CarouselItemPlaceholder } from '../components/Carousel'

const Page = ({ page, pageCustomContent }) => {
  return page.RowsContent.map((row, i) =>
    <Row key={i} row={row} pageCustomContent={pageCustomContent} />
  )
}

const Row = ({ row, pageCustomContent }) => {
  let content = ''
  const topLevelClasses = 'row py-5 text-bg-' + row.colorThemeClass
  switch (row[PageService.COMPONENT]) {
    case PageService.ROW_TYPES.ONE_COLUMN:
      content = (
        <>
          <div className={topLevelClasses}>
            <div className='col'>
              <div className='container'>
                <div className='row'>
                  <OneColumn row={row} />
                </div>
              </div>
            </div>
          </div>
        </>
      )
      break
    case PageService.ROW_TYPES.TWO_COLUMN:
      content = (
        <>
          <div className={topLevelClasses}>
            <div className='col'>
              <div className='container'>
                <div className='row'>
                  <TwoColumn row={row} />
                </div>
              </div>
            </div>
          </div>
        </>
      )
      break
    case PageService.ROW_TYPES.SLIDESHOW:
      content = (
        <>
          <div className={topLevelClasses}>
            <div className='col'>
              <Slideshow row={row} />
            </div>
          </div>
        </>
      )
      break
    case PageService.ROW_TYPES.PAGE_CUSTOM_CONTENT:
      content = (
        <>
          <Display pageCustomContent={pageCustomContent} />
        </>
      )
      break
  }
  return content
}

const OneColumn = ({ row }) => {
  return <Column column={row.Column1Content} />
}

const TwoColumn = function ({ row }) {
  return [
    <Column key='0' column={row.Column1Content} />,
    <Column key='1' column={row.Column2Content} />
  ]
}

const Column = ({ column }) => {
  const className = column.colClass + ' text-' + column.textAlignClass
  return (
    <div className={className}>
      {column.PagePartTitle && <h2>{column.PagePartTitle}</h2>}
      {column.PagePartSubtitle && <h3>{column.PagePartSubtitle}</h3>}
      {column.PagePartImage && <img className='w-100' src={column.image.url} />}
      {column.content && <div dangerouslySetInnerHTML={{ __html: column.content }} />}
      {
        column.PagePartButtonLink && column.PagePartButtonText &&
          <Link className='btn btn-primary' href={column.PagePartButtonLink}>{column.PagePartButtonText}</Link>
      }
    </div>
  )
}

const Slideshow = ({ row }) => {
  const carouselId = 'Carousel' + row.id
  const slides = row.slides.map((slide, index) => {
    const slideName = 'slide' + (index + 1)
    const isActive = (index === 0) ? '1' : '0'
    return (
      <CarouselItemPlaceholder
        key={index} isActive={isActive} name={slideName} bg='#777' color='#000'
        title={slide.Title} imgSrc={slide} description={slide.BriefContent}
      />
    )
  })
  return <Carousel id={carouselId}>{slides}</Carousel>
}

const Display = ({ pageCustomContent }) => {
  return pageCustomContent
}

export default Page
