import BaseService from './__base'

const PublicationService = BaseService.constructDefaultService('api::publication.publication', 'publication')

PublicationService.getPublicationYears = (kwargs) => {
  const publications = PublicationService.getRawPublications(kwargs)
  const years = publications.map(p => (new Date(p.publishedDate)).getFullYear())
  return years.filter((item, index, arrRef) => arrRef.indexOf(item) === index)
}

module.exports = PublicationService
