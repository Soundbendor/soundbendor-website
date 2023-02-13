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
  return p
}

const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person)

module.exports = PersonService
