import PersonService from '../models/people'
import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import Blob from 'cross-blob'

function Authors({ p }) {
  if ('authors' in p && Array.isArray(p.authors) && p.authors.length > 0) {
    const authors = PersonService.getPeople({ id__in: p.authors })

    return (
      <div>
        {authors.map((person, index) => (
          <span key={'author-' + person.id}>
            {index !== 0 && <span>, </span>}
            {person.formattedPersonName}
          </span>
        ))}
      </div>
    )
  }
  return <p><em>Currently No Authors Listed</em></p>
}

const PublicationCard = ({ publication }) => {
  const [showModal, setShowModal] = useState(false)

  const fileTitle = publication.title.replace(/[^\w\s]/gi, '').replace(/\W/gi, '-').substring(0, 50)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const saveBibtex = () => {
    const myContent = new Blob([publication.bibtext])
    saveAs(myContent, fileTitle + '.bib')
    toggleModal()
  }

  return (
    <div className='card my-2 ms-2'>
      <div className='card-body'>
        <p className='fw-bold'>{publication.title}</p>
        <Authors p={publication} />
        <div className='mt-2'>
          <a href='#'className='beaverorange me-1'>Paper</a>
          <a href='#'className='beaverorange me-1'>Slides</a>
          <a href='publication.demoLink'className='beaverorange me-1'>Demo</a>
          <a href='#' className='beaverorange me-1' onClick={toggleModal}>Cite</a>
        </div>
        {showModal && (
          <>
            <div className='modal show' tabIndex='-1' style={{ display: 'block' }}>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'>{publication.title}</h5>
                    <button type='button' className='btn-close' onClick={toggleModal}></button>
                  </div>
                  <div className='modal-body'>
                    <pre>{publication.bibtext}</pre>
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary' onClick={toggleModal}>Close</button>
                    <button type='button' className='btn btn-orange' onClick={saveBibtex}>Save BibTeX</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-backdrop show'></div>
          </>
        )}
      </div>
    </div>
  )
}

export { PublicationCard }





