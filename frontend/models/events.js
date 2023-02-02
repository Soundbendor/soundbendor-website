import BaseService from './__base'

import ImageService from './images'

function Event (rawData) {
  let e = {}
  e = Object.assign(e, rawData)
  e.RawData = rawData
  e.FeaturedImgImage = ImageService.getImage({ id__eq: e.FeaturedImg })
  return e
}

const EventService = BaseService.constructDefaultService('api::event.event', 'event', 'events', Event)

module.exports = EventService
