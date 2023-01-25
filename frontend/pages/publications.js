import Publicationentry from '../components/Publicationentry'

const Publications = () => {
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
                  <select class='form-select'>
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
                <Publicationentry year='2022' pubURL='#' pubName='The quick brown fox jumps over the lazy dog' venue='ICFSP' />
                <Publicationentry year='2022' pubURL='#' pubName='Jived fox nymph grabs quick waltz' venue='ICFSP' />
                <Publicationentry year='2022' pubURL='#' pubName='Pack my box with five dozen liquor jugs' venue='ICFSP' />
                <Publicationentry year='2022' pubURL='#' pubName='The five boxing wizards jump quickly' venue='ICFSP' />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Publications
