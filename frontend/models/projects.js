import BaseService from './__base'

// Constructor -- decorates the data
function Project (rawData) {
  let p = {}
  p = Object.assign(p, rawData)
  p.RawData = rawData
  const myDate = new Date(p.InitialPublishedDate)
  p.formattedInitialPublishedDate = (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear()
  return p
}

const ProjectService = {
  getRawProjects: BaseService.getRawData('api::project.project'),
  getRawProject: function (kwargs) {
    return BaseService.getRawDatum(ProjectService.getRawProjects, kwargs)
  },
  getProject: function (kwargs) {
    return BaseService.getDatum(ProjectService.getRawProject, Project, kwargs)
  },
  getProjects: function (kwargs) {
    return BaseService.getData(ProjectService.getRawProjects, Project, kwargs)
  },
  // Custom function to get the total number of years for a project
  getProjectYears: function (kwargs) {
    const projects = this.getRawProjects(kwargs)
    const years = projects.map(project => (new Date(project.InitialPublishedDate)).getFullYear())
    return years.filter((item, index, arrRef) => arrRef.indexOf(item) === index)
  }
}

module.exports = ProjectService
