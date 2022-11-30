import style from '../styles/Team.module.css'
import { PersonCardPlaceholder } from '../components/Personcard'

const Team = () => {
  return (
    <>
      <div className='row py-5'>
        <div className='text-center'>
          <h1>Team Members</h1>
        </div>
        <div>
          <ul className={style.ul} >
            <div className='text-center'>
              <li className={style.li}>
                <input type='text' id='person-search-input' placeholder='Search...'></input>
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


      <div className='row bg-light py-5'>
        <div className={style.personcontainer}>
          <PersonCardPlaceholder name='PHName' title='PHTitle' />
          <PersonCardPlaceholder name='PHName' title='PHTitle' />
          <PersonCardPlaceholder name='PHName' title='PHTitle' />
          <PersonCardPlaceholder name='PHName' title='PHTitle' />
        </div>
      </div>
    </>
  )
}

export default Team
