import { useState } from 'react'
import { PersonCard, PersonModal } from '../components/Personcard'
import PersonService from '../models/people'

const createTeamListDisplay = (people, isAlumni) => {
  const filteredPeople = people.filter((person) => {
    const roles = person.getRoles()
    const isLab = roles.some((role) => role.Title === "Lab")
    return person.isAlumni === isAlumni && isLab
  })
  if (filteredPeople.length === 0) {
    return (
      <p className='w-100 text-center fw-bold'>
        There are no {isAlumni ? 'alumni' : 'team members'} matching that criteria.
      </p>
    )
  } else {
    const sortedPeople = sortProfessor(filteredPeople)
    return sortedPeople.map((person) => <PersonCard key={person.id} person={person} />)
  }
}

const sortProfessor = (people) => {
  people = people.sort(function (a, b) {
    return a.isProfessor ? -1 : b.isProfessor ? 1 : 0
  })
  return people
}

const ClassListDisplay = ({ peopleClasses }) => peopleClasses.map(
  (className) => <option key={className} value={className}>{className}</option>
)

const Team = () => {
  const presortFilter = { presortBy: 'LastName' }
  const people = PersonService.getPeople(presortFilter)
  const [currentTeamListDisplay, setCurrentTeamListDisplay] = useState(createTeamListDisplay(people, false))
  const [alumniListDisplay, setAlumniListDisplay] = useState(createTeamListDisplay(people, true))

  const searchHandler = async (event, isAlumni) => {
    event.preventDefault()
    const searchField = document.getElementById(isAlumni ? 'alumni-search' : 'team-search')
    const classField = document.getElementById('class-select')
    const filters = { ...presortFilter }
    if (searchField.value) {
      filters.x__searchNameAndClass = searchField.value
    }
    if (classField.value) {
      filters.x__filterClass = classField.value
    }
    
    if (isAlumni) {
      setAlumniListDisplay(createTeamListDisplay(PersonService.getPeople(filters), true))
    } else {
      setCurrentTeamListDisplay(createTeamListDisplay(PersonService.getPeople(filters), false))
    }
  }

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col text-center'>
            <h1><span style={{borderBottom: '3px solid #d73f09', fontWeight: 'bold'}}>Team Members</span></h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row '>
          <div className='col-sm-4'>
            <label htmlFor='team-search' className='form-label'>Search</label>
            <input type='search' className='form-control' id='team-search' onChange={(event) => searchHandler(event, false)} placeholder='Search by name' />
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
            <h1><span style={{borderBottom: '3px solid #d73f09', fontWeight: 'bold'}}>Alumni</span></h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-sm-4'>
            <label htmlFor='alumni-search' className='form-label'>Search</label>
            <input type='search' className='form-control' id='alumni-search' onChange={(event) => searchHandler(event, true)} placeholder='Search by name' />
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
