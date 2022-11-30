import style from '../styles/Team.module.css'
import Papercard from '../components/Paperentry.js'

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
                <ul className={style.ul} >
                <div className='text-center'>
                  <li className={style.li}>
                    <input type='text' id='publication-search-input' placeholder='Search...'></input>
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
                    <table className={style.tablecontainer}>
                      <tr className={style.tablecol}>
                        <th>YEAR</th>
                        <th>PAPER</th>
                        <th>VENUE</th>
                      </tr>
                      <Papercard year='2022' paperURL='#' paperName='The' venue='ICFSP' />
                      <Papercard year='2022' paperURL='#' paperName='Quick' venue='ICFSP' />
                      <Papercard year='2022' paperURL='#' paperName='Brown' venue='IHIET-AI' />
                      <Papercard year='2022' paperURL='#' paperName='Fox' venue='IHIET-AI' />
                      <Papercard year='2022' paperURL='#' paperName='Jumped' venue='ICNLSP' />
                      <Papercard year='2022' paperURL='#' paperName='Over' venue='ICNLSP' />
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


