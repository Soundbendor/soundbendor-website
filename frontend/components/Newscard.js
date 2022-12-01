const Newscard = ({ eventTitle, eventDate, eventURL, eventPhoto, eventFiller }) => {
  return (
    <div className='card mb-4'>
      <a href='#!'><img className='card-img-top' src={eventPhoto} alt='...' /></a>
      <div className='card-body'>
        <div className='small text-muted'>{eventDate}</div>
        <h2 style={{ color: '#D73F09' }} className='card-title h4'>{eventTitle}</h2>
        <p className='card-text'>{eventFiller}</p>
        <a className='btn btn-dark' href={eventURL}>Read more →</a>
      </div>
    </div>
  )
}

export default Newscard
