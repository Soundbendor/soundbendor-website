import style from '../styles/Team.module.css'
import Papercard from '../components/Paperentry.js'

const Publications = () => {
  return (
    <>
      <div className='row py-5'>
        <div className='text-center'>
          <h1>Recent Publications</h1>
        </div>
        <div className='row py-4'>
          <ul className={style.ul} >
            <div className='text-center'>
              <li className={style.li}>
                <input type='text' id='publications-search-input' placeholder='Search...'></input>
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
                <label>entries per page</label>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className='row'>
        <table>
          <tr>
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
    </>
  )
}

export default Publications
