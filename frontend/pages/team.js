import { useState } from 'react'
import { PersonCard } from '../components/Personcard'
import PersonService from '../models/people'

const createCurrentTeamListDisplay = (people) => {
  return people.map((person) => 
    trimTeamMember(0, person)
  )
}

const createAlumniListDisplay = (people) => {
  return people.map((person) => 
  trimTeamMember(1, person)
  )
}

function trimTeamMember(filter, person) {
  let parse = person.personClass.Name.toLocaleLowerCase()

  if (!filter) {
    if (parse === 'alumni') { return }
  } else if (filter) {
    if (parse != 'alumni') { return }
  }
  
  return <PersonCard key={person.id} person={person} />
}

const Team = () => {
  const people = PersonService.getPeople()
  const [currentTeamListDisplay, setCurrentTeamListDisplay] = useState(createCurrentTeamListDisplay(people))
  const [alumniListDisplay] = useState(createAlumniListDisplay(people))

  const searchHandler = async (event) => {
    event.preventDefault()
    const searchField = document.getElementById('team-search')
    // const filterField = document.getElementById('team-filter-select')
    const filters = {}
    if (searchField.value) {
      filters.x__searchNameAndClass = searchField.value
    }
    setCurrentTeamListDisplay(createCurrentTeamListDisplay(PersonService.getPeople(filters)))
  }

  return (
    <>
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
              <div className='col'>
                <label htmlFor='team-search' className='form-label'>Search</label>
                <input type='search' className='form-control' id='team-search' onChange={searchHandler} placeholder='Search by name' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row py-5'>
        <div className='col'>
          <div className='container'>
            <div className='row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 g-4' id='personListDisplay'>
              {currentTeamListDisplay}
            </div>
          </div>
        </div>
      </div>

      <div className='row py-5'>
        <div className='col'>
          <div className='text-center'>
            <h1>Alumni</h1>
          </div>
        </div>
      </div>      

      <div className='row'>
        <div className='col'>
          <div className='container'>
            <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4' id='CurrentTeamListDisplay'>
              {alumniListDisplay}
            </div>
          </div>
        </div>
      </div>
      <div className='row py-5' />
    </>
  )
}

export default Team
