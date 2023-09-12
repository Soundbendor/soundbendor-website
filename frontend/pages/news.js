import { useState } from 'react'
import Newscard from '../components/Newscard'
import Pagination from '../components/Pagination'
import EventService from '../models/events'
import $ from 'jquery'

const generatePaginationDisplay = (data, onClick) => {
  return <Pagination data={data} pagesShown='5' className='justify-content-center my-4' onClick={onClick} />
}

const generateEventListDisplay = (events) => {
  return events.map((event) => <Newscard key={event.id} event={event} />)
}

const News = () => {
  const pageSize = 5
  const paginationHandler = async (event) => {
    event.preventDefault()
    const filters = { pageSize, presortBy: 'EventTime', presortDirection: -1 }
    if (event.target.innerText === 'Next' || event.target.innerText === 'Previous') {
      filters.page = parseInt($(event.target).attr('value'))
    } else {
      filters.page = parseInt(event.target.innerText)
    }
    const currentEvents = EventService.getEvents(filters)
    setEventListDisplay(generateEventListDisplay(currentEvents))
    setPaginationDisplay(generatePaginationDisplay(currentEvents, paginationHandler))
  }
  const events = EventService.getEvents({ page: 1, pageSize, presortBy: 'EventTime', presortDirection: -1 })
  const [eventListDisplay, setEventListDisplay] = useState(generateEventListDisplay(events))
  const [paginationDisplay, setPaginationDisplay] = useState(generatePaginationDisplay(events, paginationHandler))

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col'>
            <div className='text-center'>
              <h1><span style={{borderBottom: '3px solid #d73f09', fontWeight: 'bold'}}>News</span></h1>
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
            {paginationDisplay}
          </nav>
        </div>
      </div>
    </>
  )
}

export default News
