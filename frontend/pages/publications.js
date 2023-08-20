import { PublicationCard } from '../components/Publicationcard';
import PublicationService from '../models/publications'

const Publications = () => {
  const presortFilter = { presortBy: 'publishedDate', presortDirection: -1 }
  const publications = PublicationService.getPublications(presortFilter)
  let currentYear = null;

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col text-center'>
            <h1>Publications</h1>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        {publications.map((publication) => {

          const publicationYear = new Date(publication.publishedDate).getFullYear()
          const yearLabel = publicationYear !== currentYear ? (
            <h2 className='beaverorange mt-3'>{publicationYear}</h2>
          ) : null
          currentYear = publicationYear

          return (
            <div key={publication.id}>
              {yearLabel}
              <PublicationCard publication={publication}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Publications