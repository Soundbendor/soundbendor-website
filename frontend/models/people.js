import BaseService from './__base'
import ImageService from './images'
import PersonClassService from './person-classes'
import GroupService from './groups'
import DegreeService from './degrees'

function Person (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  p.personClass = PersonClassService.getPersonClass({ id__eq: p.person_class })
  p.groups = GroupService.getGroups({ id__eq: p.groups })
  p.degrees = DegreeService.getDegrees({ id__eq: p.degrees })
  p.RawData.formattedPersonName = p.RawData.FirstName + ' ' + p.RawData.LastName
  p.RawData.personClass = p.personClass.Name

  return p
}

const peopleFilterFunctions = Object.assign({}, BaseService.filterFunctions)
peopleFilterFunctions.searchNameAndClass = (key, value, obj) => obj.formattedPersonName.includes(value) || obj.FirstName.includes(value) || obj.personClass.includes(value)

const PersonService = {
  getRawPeople: BaseService.getRawData('api::person.person', peopleFilterFunctions),
  getRawPerson: function (kwargs) {
    return BaseService.getRawDatum(PersonService.getRawPeople, kwargs)
  },
  getPerson: function (kwargs) {
    return BaseService.getDatum(PersonService.getRawPerson, Person, kwargs)
  },
  getPeople: function (kwargs) {
    return BaseService.getData(PersonService.getRawPeople, Person, kwargs)
  }
}

module.exports = PersonService
