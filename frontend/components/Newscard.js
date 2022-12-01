const Newscard = ({ eventTitle, eventDate, eventURL, eventPhoto, eventFiller }) => {
  return (
    <div class='card mb-4'>
      <a href='#!'><img class='card-img-top' src={eventPhoto} alt='...' /></a>
      <div class='card-body'>
        <div class='small text-muted'>{eventDate}</div>
        <h2 style={{ color: '#D73F09' }} class='card-title h4'>{eventTitle}</h2>
        <p class='card-text'>{eventFiller}</p>
        <a class='btn btn-dark' href={eventURL}>Read more →</a>
      </div>
    </div>
  )
}

export default Newscard
