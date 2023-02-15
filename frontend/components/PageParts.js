import Link from 'next/link'
import PageService from '../models/pages'
import { Carousel, CarouselItemPlaceholder } from '../components/Carousel'

const Page = ({page, pageCustomContent}) => {
  return page.RowsContent.map((row, i) => 
    <Row key={i} row={row} pageCustomContent={pageCustomContent} />
  )
}

const Row = ({row, pageCustomContent}) => {
  let content = ""
  let topLevelClasses = 'row py-5 text-bg-'+row.colorThemeClass
  switch (row[PageService.COMPONENT]) {
    case PageService.ROW_TYPES.ONE_COLUMN:
      content = (
        <>
        <div className={topLevelClasses}>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <OneColumn row={row}/>
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
                <TwoColumn row={row}/>
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
            <Slideshow row={row}/>
          </div>
        </div>
        </>
      )
      break
    case PageService.ROW_TYPES.PAGE_CUSTOM_CONTENT:
      content = (
        <>
          <Display pageCustomContent={row}/>
        </>
      )
      break
  }
  return content
}

const OneColumn = ({row}) => {
  return <Column column={row.Column1Content}/>
}

const TwoColumn = function({row}){
  
  return [
    <Column key="0" column={row.Column1Content} />, 
    <Column key="1" column={row.Column2Content} />
  ]
}

const Column = ({column}) => {
  let className = column.colClass+' text-'+column.textAlignClass
  return (
    <div className={className}>
      {column.PagePartTitle && <h2>{column.PagePartTitle}</h2>}
      {column.PagePartSubtitle && <h3>{column.PagePartSubtitle}</h3>}
      {column.PagePartImage && <img className='w-100' src={column.image.url} />}
      {column.content && <div dangerouslySetInnerHTML={{__html: column.content}}></div>}
      {
        column.PagePartButtonLink && column.PagePartButtonText && 
        <Link className='btn btn-primary' href={column.PagePartButtonLink}>{column.PagePartButtonText }</Link>
      }
    </div>
  )
}

const Slideshow = ({row}) => {
  let carouselId = 'Carousel'+row.id
  const slides = row.slides.map((slide, index) => {
    let slideName = 'slide'+(index+1)
    let isActive = (index === 0)?'1':'0'
    return <CarouselItemPlaceholder
          key={index} isActive={isActive} name={slideName} bg='#777' color='#000'
          title={slide.Title} imgSrc={slide} description={slide.BriefContent}
        />
  })
  return <Carousel id={carouselId}>{slides}</Carousel>
}

const Display = ({row}) => {
  return PageService.ROW_TYPES.PAGE_CUSTOM_CONTENT
}


{/*<div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='text-center'>
                    <h1>About Soundbendor Labs</h1>
                    <img className='w-100' src='http://www.soundbendor.org/assets/images/neural-net-animation.gif' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row bg-dark py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col-4'>
                  <CarouselItemPlaceholder isActive='1' name='Placeholder' bg='#777' color='#000' />
                </div>
                <div className='col-8 text-light'>
                  <h3>topic 1</h3>
                  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas senectus urna turpis dapibus penatibus cras molestie. Vestibulum quisque felis interdum in malesuada magnis class natoque. Ante natoque tristique bibendum at sapien senectus eros magnis. Eleifend eu class ante a interdum leo. Nascetur molestie eleifend nostra vehicula imperdiet felis non. Rhoncus tristique platea; mauris blandit tempus curae.</p><p>Integer netus luctus suspendisse litora interdum quis. Tristique litora egestas; enim fames viverra eget adipiscing. Sem nullam justo conubia quisque pharetra luctus. Sed dictumst condimentum placerat mauris ornare vel. Lacus leo natoque massa semper; est justo vehicula. Ridiculus ridiculus ante senectus in torquent. Felis nisi amet imperdiet; curabitur dapibus ipsum nascetur. Quis tincidunt platea vitae laoreet fringilla. Vel id rhoncus duis eu fringilla.</p><p>Porta bibendum egestas sapien curae neque? Hendrerit hendrerit velit; tellus ipsum senectus a feugiat. Maximus nec tempus enim, inceptos sapien at tellus hendrerit. Felis montes cubilia netus quisque mattis, habitasse maecenas? Velit magna eu aenean nam torquent tellus magna etiam. Enim luctus elementum erat ornare euismod imperdiet vehicula pellentesque. Felis curae nunc morbi efficitur vestibulum felis. Sit ornare nascetur, donec rhoncus consectetur taciti volutpat parturient eros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row bg-light py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col-8 text-dark'>
                  <h3>topic 2</h3>
                  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas senectus urna turpis dapibus penatibus cras molestie. Vestibulum quisque felis interdum in malesuada magnis class natoque. Ante natoque tristique bibendum at sapien senectus eros magnis. Eleifend eu class ante a interdum leo. Nascetur molestie eleifend nostra vehicula imperdiet felis non. Rhoncus tristique platea; mauris blandit tempus curae.</p><p>Integer netus luctus suspendisse litora interdum quis. Tristique litora egestas; enim fames viverra eget adipiscing. Sem nullam justo conubia quisque pharetra luctus. Sed dictumst condimentum placerat mauris ornare vel. Lacus leo natoque massa semper; est justo vehicula. Ridiculus ridiculus ante senectus in torquent. Felis nisi amet imperdiet; curabitur dapibus ipsum nascetur. Quis tincidunt platea vitae laoreet fringilla. Vel id rhoncus duis eu fringilla.</p><p>Porta bibendum egestas sapien curae neque? Hendrerit hendrerit velit; tellus ipsum senectus a feugiat. Maximus nec tempus enim, inceptos sapien at tellus hendrerit. Felis montes cubilia netus quisque mattis, habitasse maecenas? Velit magna eu aenean nam torquent tellus magna etiam. Enim luctus elementum erat ornare euismod imperdiet vehicula pellentesque. Felis curae nunc morbi efficitur vestibulum felis. Sit ornare nascetur, donec rhoncus consectetur taciti volutpat parturient eros.</p>
                </div>
                <div className='col-4'>
                  <CarouselItemPlaceholder isActive='1' name='Placeholder' bg='#777' color='#000' />
                </div>
              </div>
            </div>
          </div>
        </div>*/}


//text-center

export default Page