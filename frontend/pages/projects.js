import { useState } from 'react'
import { ProjectCard } from '../components/Projectcard'
import ProjectService from '../models/projects'
import ProjectTypeService from '../models/project-types'

const createProjectListDisplay = (projects) => {
  if (projects.length) {
    return projects.map((project) =>
      <ProjectCard key={project.id} project={project} />
    )
  } else {
    return (<p className='w-100 text-center fw-bold'>There are no projects matching that criteria.</p>)
  }
}

const createProjectYearListDisplay = (projectYears, selectedYear, searchHandler) => {
  projectYears.sort((a, b) => b - a)
  return projectYears.map((year) => (
    <button
      key={year}
      className={`btn year-btn me-1 mb-1 rounded-pill ${selectedYear === year ? 'selected-year-btn' : ''
        }`}
      onClick={(event) => searchHandler(event, year)}
    >
      {year}
    </button>
  ))
}

const createProjectTypeListDisplay = (projectTypes) => {
  return projectTypes.map((type) =>
    <option key={type.Name} value={type.id}>{type.Name}</option>
  )
}

const Projects = () => {
  const [selectedYear, setSelectedYear] = useState("All")
  const searchHandler = async (event, year) => {
    if (event) {
      event.preventDefault()
    }

    if (!year) {
      year = selectedYear
    } else {
      setSelectedYear(year)
    }
    const searchField = document.getElementById('project-search')
    const typeField = document.getElementById('project-type')
    const newFilters = { ...presortFilter }

    if (searchField.value) {
      newFilters.x__searchNameAndDescription = searchField.value
    }
    if (typeField.value) {
      newFilters.project_target_type__eq = parseInt(typeField.value)
    }
    newFilters.InitialPublishedDate__sw = year === "All" ? '' : year

    setProjectListDisplay(createProjectListDisplay(ProjectService.getProjects(newFilters)))
  }

  const presortFilter = { presortBy: 'InitialPublishedDate', presortDirection: -1 }
  const projects = ProjectService.getProjects(presortFilter)
  const projectSearchPlaceholder = '(e.g., ' + projects[0].Name + ')'
  const [projectListDisplay, setProjectListDisplay] = useState(createProjectListDisplay(projects))
  const projectYearListDisplay = createProjectYearListDisplay(
    ProjectService.getProjectYears(),
    selectedYear,
    searchHandler
  )
  const projectTypeListDisplay = createProjectTypeListDisplay(ProjectTypeService.getProjectTypes())

  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          <div className='col'>
            <div className='text-center'>
            <h1><span style={{borderBottom: '3px solid #d73f09', fontWeight: 'bold'}}>Student Projects</span></h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-sm-6 d-flex align-items-end'>
            <div className='d-flex flex-wrap'>
              <button key='All' className={
                `btn year-btn me-1 mb-1 rounded-pill
                ${selectedYear === "All" ? 'selected-year-btn' : ''}`}
                onClick={(event) => searchHandler(event, "All")}>All
              </button>
              {projectYearListDisplay}
            </div>
          </div>
          <div className='col-sm-3'>
            <label htmlFor='project-search' className='form-label'>Search by Name</label>
            <input type='search' className='form-control' id='project-search' onChange={searchHandler} placeholder={projectSearchPlaceholder} />
          </div>
          <div className='col-sm-3'>
            <label htmlFor='project-type' className='form-label'>Project Type</label>
            <select className='form-select' id='project-type' onChange={searchHandler}>
              <option defaultValue value=''>All Types</option>
              {projectTypeListDisplay}
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
