import BaseService from './__base'
import ImageService from './images'
import PersonClassService from './person-classes'
import GroupService from './groups'
import DegreeService from './degrees'

function Person (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  p.personClass = PersonClassService.getPersonClass({ id__eq: p.person_class })
  p.groups = GroupService.getGroups({ id__eq: p.groups })
  p.degrees = DegreeService.getDegrees({ id__eq: p.degrees })
  p.formattedPersonName = p.RawData.FirstName + ' ' + p.RawData.LastName
  return p
}

const peopleFilterFunctions = {
  searchNameAndClass: (key, value, obj) => {
    const lValue = value.toLowerCase()
    const fullName = (obj.FirstName + ' ' + obj.LastName).toLowerCase()
    const className = PersonClassService.getPersonClass({ id__eq: obj.person_class }).Name.toLowerCase()
    return (fullName.includes(lValue) ||
    className.includes(lValue))
  },

  filterClass: (key, value, obj) => {
    const lValue = value.toLowerCase()
    const className = PersonClassService.getPersonClass({ id__eq: obj.person_class }).Name.toLowerCase()
    return (className.includes(lValue))
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
