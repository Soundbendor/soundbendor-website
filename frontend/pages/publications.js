import Publicationentry from '../components/Publicationentry'
import PublicationService from '../models/publications'

const Publications = () => {
  const publications = PublicationService.getPublications()
  console.log(publications)
  const publicationsListDisplay = publications.map((publication) =>
    <Publicationentry key={publication.id} publication={publication} />
  )
  return (
    <>
      <div className='row py-5'>
        <div className='col'>
          <div className='container'>
            <div className='text-center'>
              <h1>Publications</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='container'>
            <div className='row'>
              <div className='text-center'>
                <div className='col'>
                  <input type='search' class='form-control' id='publication-search-input' placeholder='Search...' />
                </div>
                <div className='col'>
                  <select className='form-select'>
                    <option selected>Entries shown per page</option>
                    <option value='5'>5</option>
                    <option value='5'>15</option>
                    <option value='5'>20</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row py-5'>
        <div className='col'>
          <div className='container'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th scope='col'>YEAR</th>
                  <th scope='col'>PAPER</th>
                  <th scope='col'>VENUE</th>
                </tr>
              </thead>
              <tbody>
                {publicationsListDisplay}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Publications
