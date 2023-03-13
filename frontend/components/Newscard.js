const Newscard = ({ event }) => {
  return (
    <div className='card mb-4'>
      <div className='card-body'>
        <div className='row align-items-center'>
          <div class='newscardcol' className='col-6 newscard'>
            <img className='img-fluid' src={event.FeaturedImgImage.url} alt='...' width='400px' />
          </div>
          <div class='newscardcol' className='col-6 newscard align-items-center'>
            <div className='small text-muted'>{event.formattedEventTime}</div>
            <h2 className='card-title h4 beaverorange'>{event.Name}</h2>
            <p className='card-text'>{event.Content}</p>
            <a className='btn btn-dark' href={event.EventURL}>Read more →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newscard
