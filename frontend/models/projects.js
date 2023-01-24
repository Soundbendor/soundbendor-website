import content from '../data/database.json'

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
  // returns a single project object, else undefined
  getRawProject: function (kwargs) {
    const projects = this.getRawProjects(kwargs)
    if (projects.length) {
      return projects[0]
    }
  },
  // returns array of project objects
  getRawProjects: function (kwargs) {
    return Object.values(content.data['api::project.project'])
  },
  getProject: function (kwargs) {
    const rawproject = this.getRawProject(kwargs)
    let p
    if (rawproject) {
      p = Project(rawproject)
    } else {
      p = Project({})
    }
    return p
  },
  getProjects: function (kwargs) {
    const projects = this.getRawProjects(kwargs)
    return projects.map(project => Project(project))
  }
}

module.exports = ProjectService
