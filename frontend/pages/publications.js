import { PublicationCard } from '../components/Publicationcard'
import PublicationService from '../models/publications'
import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCopy } from '@fortawesome/free-solid-svg-icons'

const Publications = () => {
  const presortFilter = { presortBy: 'publishedDate', presortDirection: -1 }
  const publications = PublicationService.getPublications(presortFilter)
  let currentYear = null
  const [showModal, setShowModal] = useState(false)
  const [selectedPublication, setSelectedPublication] = useState(null)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const openModal = (publication, event) => {
    event.preventDefault()
    setSelectedPublication(publication)
    toggleModal()
  }

  const saveBibtex = () => {
    const fileTitle = selectedPublication.title.replace(/[^\w\s]/gi, '').replace(/\W/gi, '-').substring(0, 50)
    const myContent = new Blob([selectedPublication.bibtext])
    saveAs(myContent, fileTitle + '.bib')
  }

  function renderPublications(publications, isThesis, currentYear, openModal) {
    return (
      <div className='container pt-4 pb-5'>
        {publications
          .filter((publication) => publication.thesis === isThesis)
          .map((publication) => {
            const publicationYear = new Date(publication.publishedDate).getFullYear()
            const yearLabel =
              publicationYear !== currentYear ? (
                <h2 className='beaverorange mt-3'>{publicationYear}</h2>
              ) : null
            currentYear = publicationYear

            return (
              <div key={publication.id}>
                {yearLabel}
                <PublicationCard
                  publication={publication}
                  onOpenModal={(event) => openModal(publication, event)}
                />
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <>
      <div>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col text-center'>
              <h1>
                <span style={{ borderBottom: '3px solid #d73f09', fontWeight: 'bold' }}>
                  Publications
                </span>
              </h1>
            </div>
          </div>
        </div>
        {renderPublications(publications, false, currentYear, openModal)}
        <div className='container pt-5'>
          <div className='row'>
            <div className='col text-center'>
              <h1>
                <span style={{ borderBottom: '3px solid #d73f09', fontWeight: 'bold' }}>
                  Theses
                </span>
              </h1>
            </div>
          </div>
        </div>
        {renderPublications(publications, true, currentYear, openModal)}
      </div>
      {showModal && (
        <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ zIndex: 1040 }}></div>
      )}

      {showModal && selectedPublication && (
        <div className='modal show' tabIndex='-1' style={{ display: 'block', zIndex: 1050 }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{selectedPublication.title}</h5>
                <button type='button' className='btn-close' onClick={toggleModal}></button>
              </div>
              <div className='modal-body'>
                <pre>{selectedPublication.bibtext}</pre>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={toggleModal}>Close</button>
                <button type='button' className='btn btn-orange' onClick={saveBibtex}>
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  type='button'
                  className='btn btn-orange'
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(selectedPublication.bibtext)
                    } catch (error) {
                      console.error('Failed to copy BibTeX: ', error)
                    }
                  }}>
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Publications