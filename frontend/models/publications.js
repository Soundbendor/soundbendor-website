import content from '../data/database.json'

// Takes in grouped data from an api and updates 
// the content in p (list of publications)
function Publication (rawData) {
  let p = {}
  // Copies the grouped data into p
  p = Object.assign(p, rawData)
  p.RawData = rawData
  return p
}

// Main service that holds several getters
const PublicationService = {
  getRawPublication: function (kwargs) {
    const publications = this.getRawPublications(kwargs)
    if (publications.length) {
        return publications[0]
      }
  },
  // gets list of publication data specified by the project api
  getRawPublications: function (kwargs) {
    return Object.values(content.data['api::project.project'])
  },
  getPublication: function (kwargs) {
    const rawpublication = this.getRawPublication(kwargs)
    let p
    if (rawpublication) {
      if (rawpublication.project_type == 2) {
        p = Publication(rawpublication)
      }
    } else {
      p = Publication({})
    }
    return p
  },
  getPublications: function (kwargs) {
    const publications = this.getRawPublications(kwargs)
    return publications.map(publication => Publication(publication))
  }
}

module.exports = PublicationService
