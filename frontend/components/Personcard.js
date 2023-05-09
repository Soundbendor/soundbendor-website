import $ from 'jquery'

const PROJ_MODAL_ID = '#project-modal'
const PROJ_MODAL_TITLE = PROJ_MODAL_ID + ' .modal-user'
const PROJ_MODAL_TEXT = PROJ_MODAL_ID + ' .modal-body'

const PersonCard = ({ person }) => {
  // returns an array of project titles of projects the team member
  // has participated in
  const listProjects = () => {
    const rawList = person.getProjects()
    const formattedList = []

    rawList.forEach(obj => {
      formattedList.push(obj.Name)
    })
    return formattedList
  }

  // function to open modal when clicking on element relating to PROJ_MODAL_ID
  const openModal = (event) => {
    const { Modal } = require('bootstrap')
    const myModal = Modal.getOrCreateInstance($(PROJ_MODAL_ID)[0])
    $(PROJ_MODAL_TITLE).text(person.formattedPersonName + "'s Projects")
    $(PROJ_MODAL_TEXT).text(listProjects().join(''))
    myModal.show()
    event.preventDefault()
  }

  // if the person doesn't have projects, this will return the projects button
  // with the "disabled" attribute
  const createProjectButton = (person) => {
    if (person.projects.length == 0) {
      return (<button disabled id='project-button' type='button' className='btn btn-link mt-auto' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title='This person does not have any projects.'>Projects</button>)
    } else {
      return (<button id='project-button' type='button' className='btn btn-link mt-auto' onClick={openModal}>Projects</button>)
    }
  }

  const projectModalButton = createProjectButton(person)

  return (
    <div className='col'>
      <div className='card card-flip h-100'>
        <div className='card-front d-flex flex-column'>
          <div className='ratio ratio-1x1'>
            <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait' />
          </div>
          <div className='card-body d-flex flex-column'>
            <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
            <p className='card-subtitle mb-2 text-muted mt-auto'>{person.personClass.Name}</p>
          </div>
        </div>
        <div className='card-back d-flex flex-column'>
          <div className='card-body d-flex flex-column'>
            <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
            <p className='card-subtitle mb-2 text-muted mt-auto'>About Me?</p>
            {projectModalButton}
            <button id='publications-button' className='btn btn-link mt-1'>Publications</button>
          </div>
        </div>
      </div>
    </div>

  )
}

const PersonModal = () => {
  return (
    <div id='project-modal' className='modal fade' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title'><strong className='modal-user'>?</strong></p>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-body'>
            <p>?</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PersonCard, PersonModal }
