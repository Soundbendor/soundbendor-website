const Carousel = ({ id, props, children, maxHeight }) => {
  const carouselIdTarget = '#' + id
  return (
    <div id={id} className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        {children}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target={carouselIdTarget} data-bs-slide='prev'>
        &larr;
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target={carouselIdTarget} data-bs-slide='next'>
        &rarr;
        <span className='visually-hidden'>Next</span>
      </button>
    </div>

  )
}

const CarouselItem = ({ isActive, name, bg, title, description, imgSrc, height, props }) => {
  let ciclassname = 'carousel-item w-100 text-bg-special ' + (isActive === '1' ? 'active' : '')
  let containerClassNames = 'mx-auto d-flex carousel-text-container h-100'
  const myStyles = { width: 'auto', height }
  if ('TextColor' in props && props.TextColor !== undefined && props.TextColor !== null) {
    ciclassname += ' text-' + props.TextColor.toLowerCase()
  }
  if (imgSrc !== undefined && imgSrc !== null & imgSrc !== '') {
    myStyles.background = `no-repeat center url(${imgSrc})`
  }

  if ('TextLocation' in props && props.TextLocation !== undefined && props.TextLocation !== null) {
    if (props.TextLocation.includes('Top')) {
      containerClassNames += ' align-items-start'
    }
    if (props.TextLocation.includes('Bottom')) {
      containerClassNames += ' align-items-end'
    }
    if (props.TextLocation.includes('Left')) {
      containerClassNames += ' justify-content-start'
    }
    if (props.TextLocation.includes('Center')) {
      containerClassNames += ' justify-content-center text-center'
    }
    if (props.TextLocation.includes('Right')) {
      containerClassNames += ' justify-content-end text-right'
    }
  }
  return (
    <div className={ciclassname} style={myStyles}>
      <div className={containerClassNames}>
        <div className='col-8 col-sm-6 col-md-3 p-1'>
          {title !== undefined && title !== null && title !== '' && <h2>{title}</h2>}
          {description !== undefined && description !== null && description !== '' && <p>{description}</p>}
        </div>
      </div>
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
