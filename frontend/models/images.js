import content from '../data/database.json'

function Image (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  return p
}

const ImageService = {
  getRawImage: function (kwargs) {
    const images = this.getRawImages(kwargs)
    if (images.length) {
      return images[0]
    }
  },
  getRawImages: function (kwargs) {
    return Object.values(content.data['plugin::upload.file'])
  },
  getImage: function (kwargs) {
    const rawimage = this.getRawImage(kwargs)
    let p
    if (rawimage) {
      p = Image(rawimage)
    } else {
      p = Image({})
    }
    return p
  },
  getImages: function (kwargs) {
    const images = this.getRawImages(kwargs)
    return images.map(image => Image(image))
  }
}

module.exports = ImageService