import BaseService from './__base'
import ImageService from './images'
import PersonClassService from './person-classes'

function Person (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  p.personClass = PersonClassService.getPersonClass({ id__eq: p.person_class })
  p.RawData.formattedPersonName = p.RawData.FirstName + " " + p.RawData.LastName
  p.RawData.personClass = p.personClass.Name

  return p
}

const peopleFilterFunctions = Object.assign({}, BaseService.filterFunctions)
peopleFilterFunctions.searchNameAndClass = (key, value, obj) => obj.formattedPersonName.includes(value) || obj.FirstName.includes(value) ||obj.personClass.includes(value)

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
//const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person)

module.exports = PersonService
