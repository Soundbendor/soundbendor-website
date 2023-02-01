import style from '../styles/Team.module.css'
import { ProjectCardPlaceholder } from '../components/Projectcard'
import ProjectService from '../models/projects'

const Projects = () => {
  const projects = ProjectService.getProjects()
  const projectYears = ProjectService.getProjectYears()
  const projectSearchPlaceholder = '(e.g., ' + projects[0].Name + ')'
  const projectListDisplay = projects.map((project) =>
    <ProjectCardPlaceholder key={project.id} project={project} />
  )
  const projectYearListDisplay = projectYears.map((year) =>
    <option key={year} value={year}>{year}</option>
  )
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
                  <input type='search' className='form-control' id='project-search' placeholder={projectSearchPlaceholder} />
                </div>
                <div className='col-sm-4'>
                  <label htmlFor='project-year' className='form-label'>Search By Year</label>
                  <select className='form-select' id='project-year'>
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
                  <div className={style.personcontainer}>
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
