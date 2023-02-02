import BaseService from './__base'
import ImageService from './images'

function Person (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  p.photoImage = ImageService.getImage({ id__eq: p.Photo })
  return p
}

const PersonService = BaseService.constructDefaultService('api::person.person', 'person', 'people', Person)

module.exports = PersonService
