import style from '../styles/Team.module.css'
import { PersonCard } from '../components/Personcard_bak'
import PersonService from '../models/people'

const Team = () => {
  const people = PersonService.getPeople()
  const personListDisplay = people.map((person) =>
    <PersonCard key={person.id} person={person} />
  )
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
                    {personListDisplay}
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
