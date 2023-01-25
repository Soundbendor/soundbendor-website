import style from '../styles/Team.module.css'
import Publicationentry from '../components/Publicationentry'

const Publications = () => {
  return (
    <>
      <div className='container-fluid px-0'>
        <div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='text-center'>
                    <h1>Publications</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <ul className={style.ul}>
                  <div className='text-center'>
                    <li className={style.li}>
                      <input type='text' id='publication-search-input' placeholder='Search...' />
                    </li>
                    <li className={style.li}>
                      <i className='search-icon'>O</i>
                    </li>
                    <li className={`${style.li} ${style.filtermenu}`}>
                      <select className='filter-select'>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                        <option value='25'>25</option>
                      </select>
                    </li>
                    <label>
                      entries per page
                    </label>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className={style.personcontainer}>
                    <table className='table'>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Publications
