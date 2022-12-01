import style from '../styles/Team.module.css'
import { ProjectCardPlaceholder } from '../components/Projectcard'

const Projects = () => {
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
              <div className='row'>
                <ul className={style.ul}>
                  <div className='text-center'>
                    <li className={style.li}>
                      <input type='text' id='project-search-input' placeholder='Search...' />
                    </li>
                    <li className={style.li}>
                      <i className='search-icon'>O</i>
                    </li>
                    <li className={`${style.li} ${style.filtermenu}`}>
                      <select className='filter-select'>
                        <option value='Default'>Year</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                      </select>
                    </li>
                  </div>
                </ul>
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
                    <ProjectCardPlaceholder projectName='The' projectAuthor='PHAuthor' projectDate='mm/dd/yy' />
                    <ProjectCardPlaceholder projectName='Quick' projectAuthor='PHAuthor' projectDate='mm/dd/yy' />
                    <ProjectCardPlaceholder projectName='Brown' projectAuthor='PHAuthor' projectDate='mm/dd/yy' />
                    <ProjectCardPlaceholder projectName='Fox' projectAuthor='PHAuthor' projectDate='mm/dd/yy' />
                    <ProjectCardPlaceholder projectName='Jumped' projectAuthor='PHAuthor' projectDate='mm/dd/yy' />
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
