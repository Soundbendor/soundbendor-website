import Newscard from '../components/Newscard'
import EventService from '../models/events'

const News = () => {
  const events = EventService.getEvents()
  const eventListDisplay = events.map((event) =>
    <Newscard key={event.id} event={event} />
  )
  return (
    <div>
      <div className='row py-4'>
        <div className='col'>
          <div className='container'>
            <div className='text-center'>
              <h1 className='fw-bolder'>News</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-10'>
            {eventListDisplay}
          </div>
          <nav aria-label='Pagination'>
            <hr className='my-0' />
            <ul className='pagination justify-content-center my-4'>
              <li className='page-item disabled'><a className='page-link' href='#' tabIndex='-1' aria-disabled='true'>Newer</a></li>
              <li className='page-item active' aria-current='page'><a className='page-link' href='#!'>1</a></li>
              <li className='page-item disabled'><a className='page-link' href='#!'>Older</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News
