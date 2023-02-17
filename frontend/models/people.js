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
  searchNameAndClass : (key, value, obj) => {
    let lValue = value.toLowerCase()
    return ( obj.formattedPersonName.toLowerCase().includes(lValue) ||
    obj.FirstName.toLowerCase().includes(lValue) || 
    obj.personClass.toLowerCase().includes(lValue))
  }
}

const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person, peopleFilterFunctions)

module.exports = PersonService
