import { useState } from 'react'
import { PersonCard } from '../components/Personcard'
import PersonService from '../models/people'
import Layout from '../components/Layout'

const createPersonListDisplay = (people) => {
  return people.map((person) =>
    <PersonCard key={person.id} person={person} />
  )
}

const Team = () => {
  const people = PersonService.getPeople()
  const [personListDisplay, setPersonListDisplay] = useState(createPersonListDisplay(people))

  const searchHandler = async (event) => {
    event.preventDefault()
    const searchField = document.getElementById('team-search')
    const filterField = document.getElementById('team-filter-select')
    const filters = {}
    if (searchField.value) {
      filters.x__searchNameAndClass = searchField.value
    }
    // Currently unimplemented, this is supposed to handle "Filter by class, degree, group"
    if (filterField.value) {
      filters.selectedOption = filterField.value
    }
    setPersonListDisplay(createPersonListDisplay(PersonService.getPeople(filters)))

  }

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
              <div className='row justify-content-between'>
                <div className='col col-sm-4'>
                  <label htmlFor='team-search' className='form-label'>Search</label>
                  <input type='search' className='form-control' id='team-search' onChange={searchHandler} placeholder='Search by name, class, degree, group' />
                </div>
                <div className='col col-sm-4 col-md-3 col-lg-2'>
                <label htmlFor='team-filter-select' className='form-label'>Filter by</label>
                  <select className='form-select' id='team-filter-select' onChange={searchHandler}>
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
              <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4'>
                {personListDisplay}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Team.getLayout = function getLayout (page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Team
