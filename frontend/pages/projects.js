import { useState } from 'react'
import style from '../styles/Team.module.css'
import { ProjectCard } from '../components/Projectcard'
import ProjectService from '../models/projects'

const createProjectListDisplay = (projects) => {
  return projects.map((project) =>
    <ProjectCard key={project.id} project={project} />
  )
}

const createProjectYearListDisplay = (projectYears) => {
  return projectYears.map((year) =>
    <option key={year} value={year}>{year}</option>
  )
}

const Projects = () => {
  const projects = ProjectService.getProjects()
  const projectSearchPlaceholder = '(e.g., ' + projects[0].Name + ')'
  const [projectListDisplay, setProjectListDisplay] = useState(createProjectListDisplay(projects))
  const projectYearListDisplay = createProjectYearListDisplay(ProjectService.getProjectYears())

  const searchHandler = async (event) => {
    event.preventDefault()
    const searchField = document.getElementById('project-search')
    const yearField = document.getElementById('project-year')
    const filters = {}
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
      <div className='container-fluid px-0'>
        <div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='text-center'>
                    <h1>Student Projects</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='container'>
              <div className='row justify-content-between'>
                <div className='col-sm-8'>
                  <label htmlFor='project-search' className='form-label'>Search by Name</label>
                  <input type='search' className='form-control' id='project-search' onChange={searchHandler} placeholder={projectSearchPlaceholder} />
                </div>
                <div className='col-sm-4'>
                  <label htmlFor='project-year' className='form-label'>Search By Year</label>
                  <select className='form-select' id='project-year' onChange={searchHandler}>
                    <option defaultValue value='' />
                    {projectYearListDisplay}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className={style.personcontainer} id='projectListDisplay'>
                    {projectListDisplay}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
