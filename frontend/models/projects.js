import BaseService from './__base'

// Constructor -- decorates the data
function Project (rawData) {
  const p = BaseService.defaultDataConstructor(rawData)
  const myDate = new Date(p.InitialPublishedDate)
  p.formattedInitialPublishedDate = (myDate.getMonth() + 1) + '/' + myDate.getDate() + '/' + myDate.getFullYear()
  return p
}

const projectFilterFunctions = {
  searchNameAndDescription: (key, value, obj) => {
    const lValue = value.toLowerCase()
    return obj.Name.toLowerCase().includes(lValue) || obj.Description.toLowerCase().includes(lValue)
  }
}

const ProjectService = BaseService.constructDefaultService('api::project.project', 'project', 'projects', Project, projectFilterFunctions)

// Custom function to get the total number of years for a project
ProjectService.getProjectYears = (kwargs) => {
  const projects = ProjectService.getRawProjects(kwargs)
  const years = projects.map(project => (new Date(project.InitialPublishedDate)).getFullYear())
  return years.filter((item, index, arrRef) => arrRef.indexOf(item) === index)
}


module.exports = ProjectService
