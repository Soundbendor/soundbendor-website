import style from '../styles/Projectcard.module.css'
import $ from 'jquery'
import { PersonCard } from '../components/Personcard'

const PROJ_MODAL_ID = '#project-modal'

const ProjectCard = ({ project }) => {

  const openModal = async (event) => {
    const { Modal } = require('bootstrap')
    const myModal = Modal.getOrCreateInstance($(PROJ_MODAL_ID)[0])
    myModal.show()
  }

  const modalButton = <button type='button' className='btn btn-primary' onClick={openModal}>Project members</button>

  return (
    <article className={style.card}>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={project.projectLink} allowFullScreen> </iframe>
      </div>
      <div className={style.bottom}>
        <h5 className='beaverorange'><strong>{project.Name}</strong></h5>
        <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
      </div>
      {modalButton}
    </article>
    
  )
}

const ProjectModal = () => {
  return (
    <div id='project-modal' className='modal fade' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title'><strong>Associated team members</strong></p>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-body'>
            <p>among</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProjectCard, ProjectModal }
