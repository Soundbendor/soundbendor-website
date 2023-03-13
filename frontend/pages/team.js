import { useState } from 'react'
import { PersonCard } from '../components/Personcard'
import PersonService from '../models/people'

const createCurrentTeamListDisplay = (people) => {
  if (people.length === 0) {
    return (<p className='w-100 text-center fw-bold'>There are no team members matching that criteria.</p>)
  } else {
    people = sortPeople(people)
    return people.map((person) =>
      trimTeamMember(0, person)
    )
  }
}

const createAlumniListDisplay = (people) => {
  if (people.length === 0) {
    return (<p className='w-100 text-center fw-bold'>There are no Alumni matching that criteria.</p>)
  } else {
    people = sortPeople(people)
    return people.map((person) =>
      trimTeamMember(1, person)
    )
  }
}

function sortPeople (people) {
  people = people.sort(function (a, b) {
    return (a.LastName < b.LastName) ? -1 : (a.LastName > b.LastName) ? 1 : 0
  })
  people = people.sort(function (a, b) {
    return a.personClass.Name === 'Professor' ? -1 : b.personClass.Name === 'Professor' ? 1 : 0
  })
  return people
}

function trimTeamMember (filter, person) {
  const parse = person.personClass.Name.toLocaleLowerCase()

  if (!filter) {
    if (parse === 'alumni') { return }
  } else if (filter) {
    if (parse !== 'alumni') { return }
  }

  return <PersonCard key={person.id} person={person} />
}

const createClassListDisplay = (peopleClasses) => {
  return peopleClasses.map((className) =>
    <option key={className} value={className}>{className}</option>
  )
}

const Team = () => {
  const people = PersonService.getPeople()
  const [currentTeamListDisplay, setCurrentTeamListDisplay] = useState(createCurrentTeamListDisplay(people))
  const [alumniListDisplay, setAlumniListDisplay] = useState(createAlumniListDisplay(people))
  const classListDisplay = createClassListDisplay(PersonService.getClasses())

  const searchHandler = async (event) => {
    event.preventDefault()
    const searchField = document.getElementById('team-search')
    const classField = document.getElementById('class-select')
    const alumniSearchField = document.getElementById('alumni-search')
    const filters = {}
    filters.alumni = {}
    if (searchField.value) {
      filters.x__searchNameAndClass = searchField.value
    }
    if (classField.value) {
      filters.x__filterClass = classField.value
    }
    if (alumniSearchField.value) {
      filters.alumni.x__searchNameAndClass = alumniSearchField.value
    }
    setAlumniListDisplay(createAlumniListDisplay(PersonService.getPeople(filters.alumni)))
    setCurrentTeamListDisplay(createCurrentTeamListDisplay(PersonService.getPeople(filters)))
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
              <option defaultValue value='' />
              {classListDisplay}
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
    </>
  )
}

export default Team
