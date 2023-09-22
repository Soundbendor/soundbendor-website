import PersonService from '../models/people'
import ImageService from '../models/images'
import React from 'react'

function Authors({ p }) {
  if ('authors' in p && Array.isArray(p.authors) && p.authors.length > 0) {
    const authors = PersonService.getPeople({ id__in: p.authors })

    return (
      <div>
        {authors.map((person, index) => (
          <span key={'author-' + person.id} className='text-muted'>
            {index !== 0 && <span>, </span>}
            {person.formattedPersonName}
          </span>
        ))}
      </div>
    )
  }
  return <p><em>Currently No Authors Listed</em></p>
}

const PublicationCard = ({ publication, onOpenModal }) => {

  let media = null
  if ('file' in publication && Array.isArray(publication.file) && publication.file.length > 0) {
    media = ImageService.getImages({ id__in: publication.file })[0]
  }
  let slides = null
  if ('slides' in publication && Array.isArray(publication.slides) && publication.slides.length > 0) {
    slides = ImageService.getImages({ id__in: publication.slides })[0]
  }
  return (
    <div className='card pub-card my-2 ms-2'>
      <div className='card-body'>
        <a href={publication.url} target='_blank' className='enlarge-on-hover'>
          <p className='fw-bold mb-2'>{publication.title}</p>
        </a>
        <Authors p={publication} />
        <div className='mt-2'>
          <span className='me-2'>{publication.conferenceName} {new Date(publication.publishedDate).getFullYear()}</span>
          {media && (<span className='me-1'>(<a href={media.url} className='beaverorange' target='_blank' rel='noopener noreferrer'>Paper</a>)</span>)}
          {slides && (<span className='me-1'>(<a href={slides.url} className='beaverorange' target='_blank' rel='noopener noreferrer'>Slides</a>)</span>)}
          {publication.demoLink && (<span className='me-1'>(<a href={publication.demoLink} className='beaverorange' target='_blank' rel='noopener noreferrer'>Demo</a>)</span>)}
          {publication.bibtext && (<span>(<a href='#' className='beaverorange' onClick={(event) => onOpenModal(event)}>Cite</a>)</span>)}
        </div>
      </div>
    </div>
  )
}

export { PublicationCard }



