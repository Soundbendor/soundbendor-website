import BaseService from './__base'
import ImageService from './images'
import PersonClassService from './person-classes'
import PersonRoleService from './person-roles'
import GroupService from './groups'
import DegreeService from './degrees'
import ProjectService from './projects'
import PublicationService from './publications'

function Person (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  p.personClass = PersonClassService.getPersonClass({ id__eq: p.person_class })
  p.groups = GroupService.getGroups({ id__eq: p.groups })
  p.formattedPersonName = p.RawData.FirstName + ' ' + p.RawData.LastName
  p.getProjects = function () {
    return ProjectService.getProjects({ id__in: p.projects })
  }
  p.getPublications = function () {
    return PublicationService.getPublications({ id__in: p.publications })
  }
  p.getDegrees = function () {
    return DegreeService.getDegrees({ id__in: p.degrees })
  }
  p.getRoles = function () {
    return PersonRoleService.getPersonRoles({ id__in: p.person_roles })
  }
  p.isAlumni = p.personClass?.Name?.toLocaleLowerCase() === 'alumni';
  p.isProfessor = p.personClass?.Name?.toLocaleLowerCase() === 'professor';
  return p
}

const peopleFilterFunctions = {
  searchNameAndClass: (key, value, obj) => {
    const lValue = value.toLowerCase()
    const fullName = (obj.FirstName + ' ' + obj.LastName).toLowerCase()
    const className = PersonClassService.getPersonClass({ id__eq: obj.person_class })?.Name?.toLowerCase()
    return (fullName?.includes(lValue) ||
    className?.includes(lValue))
  },

  filterClass: (key, value, obj) => {
    const lValue = value.toLowerCase()
    const className = PersonClassService.getPersonClass({ id__eq: obj.person_class })?.Name?.toLowerCase()
    return (className?.includes(lValue))
  }
}

const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person, peopleFilterFunctions)

// Custom function to get the list of class name
PersonService.getClasses = (kwargs) => {
  const people = PersonService.getRawPeople(kwargs)
  const classes = people.map(person => (PersonClassService.getPersonClass({ id__eq: person.person_class }).Name))
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'Alumni') {
      classes.splice(i, 1)
    }
  }
  return classes.filter((item, index, arrRef) => arrRef.indexOf(item) === index)
}

module.exports = PersonService
