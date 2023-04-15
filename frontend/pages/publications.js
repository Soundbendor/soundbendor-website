import { Publicationentry, PublicationHeader, PublicationModal } from '../components/Publicationentry'
import PublicationService from '../models/publications'
import Pagination from '../components/Pagination'
import { useState, useEffect } from 'react'
import $ from 'jquery'

const generatePaginationDisplay = (data, onClick) => {
  return <Pagination data={data} pagesShown='5' className='justify-content-center my-4' onClick={onClick} />
}

const createPublicationYearListDisplay = (publicationYears) => {
  return publicationYears.map((year) =>
    <option key={year} value={year}>{year}</option>
  )
}

const getPublicationListDisplay = (publications) => {
  let publicationsListDisplay = <tr><td colSpan='4' className='col text-center'>There are no publications matching that criteria</td></tr>
  if (publications.length) {
    // put each publication obj into an array for displaying in the HTML
    publicationsListDisplay = publications.map((publication) =>
      <Publicationentry key={publication.id} publication={publication} />
    )
  }
  return publicationsListDisplay
}

const Publications = () => {
  const getSearchFilters = () => {
    const filters = { pageSize: 5, presortBy: 'publishedDate', presortDirection: -1 }

    if (typeof jQuery !== 'undefined') {
      const searchField = $('#pub-search')
      const yearField = $('#pub-year')
      const pageSizeField = $('#pageSize')
      if (searchField.val()) {
        filters.title__likelow = searchField.val()
      }
      if (yearField.val()) {
        filters.publishedDate__sw = yearField.val()
      }
      if (pageSizeField.val()) {
        filters.pageSize = pageSizeField.val()
      }
    }
    return filters
  }

  /*const setBody = async (filters) => {
    const currentPublications = PublicationService.getPublications(filters)
    setPublicationListDisplay(getPublicationListDisplay(currentPublications))
    setPaginationDisplay(generatePaginationDisplay(currentPublications, paginationHandler))
  }*/

  const searchHandler = (event) => {
    event.preventDefault()
    console.log('wat1')
    const filters = getSearchFilters()
    filters.page = 1
    /*await setBody(filters)*/
    setSearchFilters(filters)
  }

  const paginationHandler = (event) => {
    event.preventDefault()
    console.log('wat2')
    const filters = getSearchFilters()
    if (event.target.innerText === 'Next' || event.target.innerText === 'Previous') {
      filters.page = parseInt($(event.target).attr('value'))
    } else {
      filters.page = parseInt(event.target.innerText)
    }
    setSearchFilters(filters)
    /*await setBody(filters)*/
  }



  // call the getter function for publication objects
  const [searchFilters, setSearchFilters] = useState(getSearchFilters())
  const [publications, setPublications] = useState(PublicationService.getPublications(searchFilters))
  const [publicationsListDisplay, setPublicationListDisplay] = useState(getPublicationListDisplay(publications))
  const [paginationDisplay, setPaginationDisplay] = useState(generatePaginationDisplay(publications, paginationHandler))
  const publicationYears = PublicationService.getPublicationYears({ presortBy: 'publishedDate', presortDirection: -1 })
  const publicationYearListDisplay = createPublicationYearListDisplay(publicationYears)

  useEffect(() => {
    let myPublications = PublicationService.getPublications(searchFilters)
    setPublications(myPublications)
    setPublicationListDisplay(getPublicationListDisplay(myPublications))
    setPaginationDisplay(generatePaginationDisplay(myPublications, paginationHandler))
  }, [searchFilters])

  return (
    <>

      <div className='container'>
        <div className='row py-5'>
          <div className='col'>
            <h1 className='text-center'>Publications</h1>
          </div>
        </div>

        <div className='row justify-content-between'>
          <div className='col-sm-6'>
            <label htmlFor='pub-search' className='form-label'>Search By Title</label>
            <input type='search' onChange={searchHandler} className='form-control' id='pub-search' placeholder='Title...' />
          </div>
          <div className='col-sm-3'>
            <label htmlFor='Entries' className='form-label'>Year Published</label>
            <select className='form-select' id='pub-year' onChange={searchHandler}>
              <option defaultValue value=''>All Years</option>
              {publicationYearListDisplay}
            </select>
          </div>
          <div className='col-sm-3'>
            <label htmlFor='Entries' className='form-label'>Entries shown per page</label>
            <select className='form-select' id='pageSize' onChange={searchHandler}>
              <option value='5' defaultValue>5</option>
              <option value='2'>2</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
            </select>
          </div>
        </div>
      </div>
      <div className='container'>
        <table className='table table-striped table-hover'>
          <thead>
            {PublicationHeader()}
          </thead>
          <tbody>
            {publicationsListDisplay}
          </tbody>
        </table>
        <nav aria-label='Pagination'>
          <hr className='my-0' />
          {paginationDisplay}
        </nav>
      </div>

      {PublicationModal()}
    </>
  )
}

export default Publications
