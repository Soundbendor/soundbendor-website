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
            <div className='row justify-content-between'>
                <div className='col-sm-4'>
                <label for="pub-search" class='form-label'>Search for specific publications</label>
                  <input type='search' class='form-control' id='pub-search' placeholder='Year, title, venue...' />
                </div>
                <div className='col-sm-4'>
                  <label for="Entries" class='form-label'>Entries shown per page</label>
                  <select class='form-select' id='Entries'>
                    <option selected>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
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
