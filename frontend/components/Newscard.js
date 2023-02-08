const Newscard = ({ event }) => {
  return (
    <div className='card mb-4'>
      <div className='card-body'>
        <div className='row align-items-center'>
          <div className='col-6'>
            <img className='' src={event.FeaturedImgImage.url} alt='...' width='400px' />
          </div>
          <div className='col-6 align-items-center'>
            <div className='small text-muted'>{event.formattedEventTime}</div>
            <h2 style={{ color: '#D73F09' }} className='card-title h4'>{event.Name}</h2>
            <p className='card-text'>{event.Content}</p>
            <a className='btn btn-dark' href={event.EventURL}>Read more →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newscard
