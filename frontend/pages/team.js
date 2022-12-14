import style from '../styles/Team.module.css'
import { PersonCardPlaceholder } from '../components/Personcard'

const Team = () => {
  return (
    <>
      <div className='container-fluid px-0'>
        <div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='text-center'>
                    <h1>Team Members</h1>
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
                      <input type='text' id='person-search-input' placeholder='Search...' />
                    </li>
                    <li className={style.li}>
                      <i className='search-icon'>O</i>
                    </li>
                    <li className={`${style.li} ${style.filtermenu}`}>
                      <select className='filter-select'>
                        <option value='Default'>Filter</option>
                        <option value='Class'>Class</option>
                        <option value='Degree'>Degree</option>
                        <option value='Group'>Group</option>
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
                    <PersonCardPlaceholder name='PHName' title='PHTitle' />
                    <PersonCardPlaceholder name='PHName' title='PHTitle' />
                    <PersonCardPlaceholder name='PHName' title='PHTitle' />
                    <PersonCardPlaceholder name='PHName' title='PHTitle' />
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

export default Team
