const Carousel = ({ id, props, children }) => {
  let carouselIdTarget = '#'+id
  return (

    <div id={id} className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        {children}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target={carouselIdTarget} data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target={carouselIdTarget} data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>

  )
}

const CarouselItem = ({ isActive, props }) => {
  return (
    <div className='carousel-item active'>
      <img src='{props.src}' className='d-block w-100' alt='{props.alt}' />
    </div>
  )
}
const CarouselItemPlaceholder = ({ isActive, name, bg, color, title, description, imgSrc, props }) => {
  const ciclassname = 'carousel-item ' + (isActive === '1' ? 'active' : '')
  const arialabel = 'Placeholder: ' + name
  return (
    <div className={ciclassname}>
      <svg
        className='bd-placeholder-img bd-placeholder-img-lg d-block w-100'
        width='800'
        height='400'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label={arialabel}
        preserveAspectRatio='xMidYMid slice'
        focusable='false'
      >
        <title>Placeholder</title>
        <rect width='100%' height='100%' fill={bg} />
        <text x='50%' y='50%' fill={color} dy='.3em' dominantBaseline='middle' textAnchor='middle'>{name}</text>
        <text x='20%' y='80%' fill={color} dy='.3em' fontSize='2em'>{title}</text>
        <text x='20%' y='90%' fill={color} dy='.3em' fontSize='1em'>{description}</text>
      </svg>
    </div>
  )
}

export { Carousel, CarouselItem, CarouselItemPlaceholder }
