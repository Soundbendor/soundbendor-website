import BaseService from './__base'
import ImageService from './images'

function Event (rawData) {
  let e = BaseService.defaultDataConstructor(rawData)
  e.FeaturedImgImage = ImageService.getImage({ id__eq: e.FeaturedImg })
  const myDate = new Date(e.EventTime)
  e.formattedEventTime = (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear()
  return e
}

const EventService = BaseService.constructDefaultService('api::event.event', 'event', 'events', Event)

module.exports = EventService
