import { useState } from 'react'
import { ProjectCard } from '../components/Projectcard'
import ProjectService from '../models/projects'

const createProjectListDisplay = (projects) => {
  if (projects.length) {
    return projects.map((project) =>
      <ProjectCard key={project.id} project={project} />
    )
  } else {
    return (<p className='w-100 text-center fw-bold'>There are no projects matching that criteria.</p>)
  }
}

const createProjectYearListDisplay = (projectYears) => {
  projectYears.sort((a, b) => a - b);
  return projectYears.map((year) =>
    <option key={year} value={year}>{year}</option>
  )
}

const Projects = () => {
  const presortFilter = { presortBy: 'InitialPublishedDate', presortDirection: -1 }
  const projects = ProjectService.getProjects(presortFilter)
  const projectSearchPlaceholder = '(e.g., ' + projects[0].Name + ')'
  const [projectListDisplay, setProjectListDisplay] = useState(createProjectListDisplay(projects))
  const projectYearListDisplay = createProjectYearListDisplay(ProjectService.getProjectYears())

  const searchHandler = async (event) => {
    event.preventDefault()
    const searchField = document.getElementById('project-search')
    const yearField = document.getElementById('project-year')
    const filters = presortFilter
    if (searchField.value) {
      filters.x__searchNameAndDescription = searchField.value
    }
    if (yearField.value) {
      filters.InitialPublishedDate__sw = yearField.value
    }
    setProjectListDisplay(createProjectListDisplay(ProjectService.getProjects(filters)))
  }

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col'>
            <div className='text-center'>
              <h1>Student Projects</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-sm-8'>
            <label htmlFor='project-search' className='form-label'>Search by Name</label>
            <input type='search' className='form-control' id='project-search' onChange={searchHandler} placeholder={projectSearchPlaceholder} />
          </div>
          <div className='col-sm-4'>
            <label htmlFor='project-year' className='form-label'>Year Published</label>
            <select className='form-select' id='project-year' onChange={searchHandler}>
              <option defaultValue value=''>All Years</option>
              {projectYearListDisplay}
            </select>
          </div>
        </div>
      </div>
      <div className='container py-5'>
        <div className='row justify-content-start' id='projectListDisplay'>
          {projectListDisplay}
        </div>
      </div>
    </>
  )
}

export default Projects
