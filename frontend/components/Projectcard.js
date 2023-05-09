import style from '../styles/Projectcard.module.css'
import $ from 'jquery'

const PRO_MODAL_ID = '#project-modal'
//const PRO_MODAL_TITLE = PRO_MODAL_ID + ' .projectTitle'
//const PRO_MODAL_LINK = PRO_MODAL_ID + '.projectLink'

const ProjectCard = ({ project }) => {
  return (
    <article className={style.card}>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={project.projectLink} allowFullScreen> </iframe>
      </div>
      <div className={style.bottom}>
        <h5 className='beaverorange'><strong>{project.Name}</strong></h5>
        <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
      </div>
    </article>
  )
}

const ProjectEntry = ({ project }) => {
  const openProModal = async () => {
    const myModal = bootstrap.Modal.getOrCreateInstance($(PRO_MODAL_ID)[0])
    myModal.show()
  }

  const modalLink = <a href='#' className='beaverorange' onClick={openProModal}><strong>{project.Name}</strong></a>

  return (
    <>
    <article className={style.card}>
      <div className={style.bottom}>
        <h5 className='beaverorange'>{modalLink}</h5>
        <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
      </div>
    </article>
    {ProjectModal(project.Name, project.projectLink, project.Description)}
      </>
  )
}

const ProjectModal = (Name, projectLink, Description) => {
  const modalTitle = <h5 class="modal-title">{Name}</h5>
  const modalProjectLink = <iframe className='embed-responsive-item' src={projectLink} allowFullScreen> </iframe>
  return (
    <div class="modal" id="project-modal" data-bs-backdrop="static" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          {modalTitle}
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div className='embed-responsive embed-responsive-16by9'>
          {modalProjectLink}
        </div>
        <div>
          <p>
            {Description}
          </p>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export { ProjectCard, ProjectEntry, ProjectModal }
