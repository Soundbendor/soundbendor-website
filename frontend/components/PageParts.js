import Link from 'next/link'
import PageService from '../models/pages'
import { Carousel, CarouselItem } from '../components/Carousel'

const Page = ({ page, pageCustomContent }) => {
  return page.getRowsContent().map((row, i) =>
    <Row key={i} row={row} pageCustomContent={pageCustomContent} />
  )
}

const Row = ({ row, pageCustomContent }) => {
  console.log(row)
  let content = ''
  const topLevelClassArray = []
  if (row.HasVerticalPadding) {
    topLevelClassArray.push('py-5')
  }
  if (row.colorThemeClass !== undefined && row.colorThemeClass !== null) {
    topLevelClassArray.push('text-bg-' + row.colorThemeClass)
  }
  const topLevelClasses = topLevelClassArray.join(' ')
  switch (row[PageService.COMPONENT]) {
    case PageService.ROW_TYPES.SLIDESHOW:
      content = (
        <>
          <div className={topLevelClasses}>
            <Slideshow row={row} />
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
    case PageService.ROW_TYPES.ONE_COLUMN:
      content = (
        <>
          <div className={topLevelClasses}>
            <div className='container'>
              <div className='row'>
                <OneColumn row={row} />
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
            <div className='container'>
              <div className='row'>
                <TwoColumn row={row} />
              </div>
            </div>
          </div>
        </>
      )
      break
  }
  return content
}

const OneColumn = ({ row }) => {
  return <Column column={row.getColumn1Content()} />
}

const TwoColumn = function ({ row }) {
  const columns = row.getColumnsContent()
  return [
    <Column key='0' column={columns[0]} />,
    <Column key='1' column={columns[1]} />
  ]
}

const Column = ({ column }) => {
  const className = column.colClass + ' text-' + column.textAlignClass
  const imageStyles = {}
  console.log(column)
  if (column.PagePartImageMaxHeight !== undefined && column.PagePartImageMaxHeight !== null && column.PagePartImageMaxHeight !== 0) {
    imageStyles.maxHeight = column.PagePartImageMaxHeight + 'px'
  }
  if (column.PagePartImageMaxWidth !== undefined && column.PagePartImageMaxWidth !== null && column.PagePartImageMaxWidth !== 0) {
    imageStyles.maxWidth = column.PagePartImageMaxWidth + 'px'
  }
  return (
    <div className={className}>
      {column.PagePartTitle && <h2>{column.PagePartTitle}</h2>}
      {column.PagePartSubtitle && <h3>{column.PagePartSubtitle}</h3>}
      {column.PagePartImage && <div className='mx-auto' style={imageStyles}><img className='w-100' src={column.getImage().url} /></div>}
      {column.content && column.PagePartContent.trim().length > 0 && <div dangerouslySetInnerHTML={{ __html: column.content }} />}
      {
        column.PagePartButtonLink && column.PagePartButtonText &&
          <Link className='btn btn-dark' href={column.PagePartButtonLink}>{column.PagePartButtonText}</Link>
      }
    </div>
  )
}

const Slideshow = ({ row }) => {
  const carouselId = 'Carousel' + row.id
  const slides = row.slides.map((slide, index) => {
    const slideName = 'slide' + (index + 1)
    const isActive = (index === 0) ? '1' : '0'
    const imageData = slide.getImageData()
    return (
      <CarouselItem
        key={index} isActive={isActive} name={slideName} bg='#777' color='#000' height='300px'
        title={slide.Title} imgSrc={imageData.url} description={slide.BriefContent} props={slide}
      />
    )
  })
  return <Carousel id={carouselId}>{slides}</Carousel>
}

const Display = ({ pageCustomContent }) => {
  return pageCustomContent
}

export default Page
