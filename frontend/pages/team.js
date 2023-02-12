import style from '../styles/Team.module.css'
import { PersonCard } from '../components/Personcard'
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
                    <li className={`${style.li} ${style.filtermenu}`}>
              <div className='row justify-content-between'>
                <div className='col-sm-4'>
                  <label htmlFor='team-search' className='form-label'>Search</label>
                  <input type='search' className='form-control' id='team-search' placeholder='Search by name, year, title, etc' />
                </div>
                <div className='col-sm-4'>
                <label htmlFor='team-filter-select' className='form-label'>Filter by</label>
                  <select className='form-select' id='team-filter-select'>
                  <option value='Default'>None</option>
                    <option value='Class'>Class</option>
                    <option value='Degree'>Degree</option>
                    <option value='Group'>Group</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                {personListDisplay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
