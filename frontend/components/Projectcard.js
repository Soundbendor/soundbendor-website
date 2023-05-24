import style from '../styles/Projectcard.module.css'
import $ from 'jquery'
import { Modal } from 'bootstrap' // import modal library, we don't need anything else from Bootstrap

const PRO_MODAL_ID = '#project-modal'

const ProjectCard = ({ project }) => {
  const openProModal = (modalId) => {
    return () => {
      // linter says bootstrap is undefined, but if I import it the page crashes
      // Can be fixed by only importing the modal library from Bootstrap (line 3)
      const myModal = Modal.getOrCreateInstance($(modalId)[0]) // eslint-disable-line
      $('iframe').attr('src', project.projectLink) // set up the embed on modal open
      myModal.show()
    }
  }

  const modalLink = <a href='#' className='project-link beaverorange' onClick={openProModal(PRO_MODAL_ID + '-' + project.id)}><strong>{project.Name}</strong></a>

  return (
    <>
      <article className={style.card}>
        <div>
          <img src={project.FeaturedImg.url} className='img-fluid' alt='Featured Project Image' />
          <div className={style.bottom} />
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
  // Setting the embed source to none on close, and project.projectlink when
  //  reopening the modal fixes this
  const stopVideo = () => {
    $('iframe').attr('src', '')
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
          </div>
          <div className='modal-footer justify-content-between'>
            <div className='mt-2'>
              {Description}
            </div>
          </div>
        </div>
      </div>
    </div>
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
            ...
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
