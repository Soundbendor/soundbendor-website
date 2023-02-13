import BaseService from './__base'
import ImageService from './images'
import PersonClassService from './person-classes'

function Person (rawData) {
  let p = BaseService.defaultDataConstructor(rawData)
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  p.personClass = PersonClassService.getPersonClass({ id__eq: p.person_class })
  return p
}

const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person)

module.exports = PersonService
