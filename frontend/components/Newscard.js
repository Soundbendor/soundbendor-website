const Newscard = ({ event }) => {
  return (
    <div className='card mb-4'>
      <a href='#!'><img className='card-img-top' src={event.FeaturedImgImage.url} alt='...' /></a>
      <div className='card-body'>
        <div className='small text-muted'>{event.EventTime}</div>
        <h2 style={{ color: '#D73F09' }} className='card-title h4'>{event.Name}</h2>
        <p className='card-text'>{event.Content}</p>
        <a className='btn btn-dark' href={event.EventURL}>Read more →</a>
      </div>
    </div>
  )
}

export default Newscard
