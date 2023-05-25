import { useState } from 'react'
import { PersonCard, PersonModal } from '../components/Personcard'
import PersonService from '../models/people'

const createTeamListDisplay = (people, isAlumni) => {
  if (people.length === 0) {
    return (<p className='w-100 text-center fw-bold'>There are no {isAlumni ? 'Alumni' : 'team members'} matching that criteria.</p>)
  } else {
    people = sortProfessor(people)
    return people.map((person) =>
      trimTeamMember((isAlumni ? 1 : 0), person)
    )
  }
}

const sortProfessor = (people) => {
  people = people.sort(function (a, b) {
    return a.isProfessor ? -1 : b.isProfessor ? 1 : 0
  })
  return people
}

const trimTeamMember = (filter, person) => {
  if ((!filter && person.isAlumni) || (filter && !person.isAlumni)) return
  return <PersonCard key={person.id} person={person} />
}

const ClassListDisplay = ({ peopleClasses }) => peopleClasses.map(
  (className) => <option key={className} value={className}>{className}</option>
)

const Team = () => {
  const presortFilter = { presortBy: 'LastName' }
  const people = PersonService.getPeople(presortFilter)
  const [currentTeamListDisplay, setCurrentTeamListDisplay] = useState(createTeamListDisplay(people, false))
  const [alumniListDisplay, setAlumniListDisplay] = useState(createTeamListDisplay(people, true))

  const searchHandler = async (event) => {
    event.preventDefault()
    const searchField = document.getElementById('team-search')
    const classField = document.getElementById('class-select')
    const alumniSearchField = document.getElementById('alumni-search')
    const filters = presortFilter
    const filtersAlumni = presortFilter
    if (searchField.value) {
      filters.x__searchNameAndClass = searchField.value
    }
    if (classField.value) {
      filters.x__filterClass = classField.value
    }
    if (alumniSearchField.value) {
      filtersAlumni.x__searchNameAndClass = alumniSearchField.value
    }
    setCurrentTeamListDisplay(createTeamListDisplay(PersonService.getPeople(filters), false))
    setAlumniListDisplay(createTeamListDisplay(PersonService.getPeople(filtersAlumni), true))
  }

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col text-center'>
            <h1>Team Members</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row '>
          <div className='col-sm-4'>
            <label htmlFor='team-search' className='form-label'>Search</label>
            <input type='search' className='form-control' id='team-search' onChange={searchHandler} placeholder='Search by name' />
          </div>
          <div className='col-sm-4'>
            <label htmlFor='class-select' className='form-label'>Sort by Class</label>
            <select className='form-select' id='class-select' onChange={searchHandler}>
              <option defaultValue value=''>All Classes</option>
              <ClassListDisplay peopleClasses={PersonService.getClasses()} />
            </select>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 g-4' id='personListDisplay'>
          {currentTeamListDisplay}
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <h1>Alumni</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-sm-4'>
            <label htmlFor='alumni-search' className='form-label'>Search</label>
            <input type='search' className='form-control' id='alumni-search' onChange={searchHandler} placeholder='Search by name' />
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4' id='alumniListDisplay'>
          {alumniListDisplay}
        </div>
      </div>
      <PersonModal />
    </>
  )
}

export default Team
