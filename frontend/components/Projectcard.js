import style from '../styles/Projectcard.module.css'
import $ from 'jquery'

const PRO_MODAL_ID = '#project-modal'

const ProjectCard = ({ project }) => {
  const openProModal = (modalId) => {
    return () => {
      // linter says bootstrap is undefined, but if I import it the page crashes
      const myModal = bootstrap.Modal.getOrCreateInstance($(modalId)[0]) // eslint-disable-line
      myModal.show()
    }
  }

  const modalLink = <a href='#' className='beaverorange' onClick={openProModal(PRO_MODAL_ID + '-' + project.id)}><strong>{project.Name}</strong></a>

  return (
    <>
      <article className={style.card}>
        <div className={style.bottom}>
          <h5 className='beaverorange'>{modalLink}</h5>
          <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
        </div>
      </article>
      {ProjectModal(project.Name, project.projectLink, project.Description, project.id)}
    </>
  )
}

const ProjectModal = (Name, projectLink, Description, id) => {
  // refreshes src when modal is closed so video starts over (and stops playing)
  // known bug: causes video to be one onClick behind
  const stopVideo = () => {
    $('iframe').attr('src', projectLink)
  }

  const modalIdName = 'project-modal-' + id
  const modalTitle = <h5 class='modal-title beaverorange'>{Name}</h5>
  const modalProjectLink = <iframe className='embed-responsive-item' src={projectLink} allowFullScreen> </iframe>
  return (
    <div className='modal' id={modalIdName} data-bs-backdrop='static' tabindex='-1'>
      <div className='modal-dialog modal-dialog-centered modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            {modalTitle}
            <button type='button' className='btn-close' data-bs-dismiss='modal' onClick={stopVideo} aria-label='Close' />
          </div>
          <div className='modal-body'>
            <div className='embed-responsive embed-responsive-16by9'>
              {modalProjectLink}
            </div>
            <div>
              <p>
                {Description}
              </p>
            </div>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={stopVideo}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProjectCard }

