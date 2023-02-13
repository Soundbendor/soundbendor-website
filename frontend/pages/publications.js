import Publicationentry from '../components/Publicationentry'
import PublicationService from '../models/publications'
import Layout from '../components/Layout'

const Publications = () => {
  // call the getter function for publication objects
  const publications = PublicationService.getPublications()
  // put each publication obj into an array for displaying in the HTML
  const publicationsListDisplay = publications.map((publication) =>
    <Publicationentry key={publication.id} publication={publication} />
  )
  return (
    <>
      <div className='row py-5'>
        <div className='container'>
          <h1 className='text-center'>Publications</h1>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-sm-4'>
                <label htmlFor='pub-search' className='form-label'>Search for specific publications</label>
                <input type='search' className='form-control' id='pub-search' placeholder='Year, title, venue...' />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='Entries' className='form-label'>Entries shown per page</label>
                <select className='form-select' id='Entries'>
                  <option defaultValue>5</option>
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

Publications.getLayout = function getLayout (page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Publications
