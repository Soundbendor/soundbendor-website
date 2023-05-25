import $ from 'jquery'

const PROJ_MODAL_ID = 'project-modal'
const PROJ_MODAL_USER_CLASS = 'modal-user'
const PROJ_MODAL_BODY_CLASS = 'modal-body'
// SELECTORS
const PROJ_MODAL_ID_SEL = '#' + PROJ_MODAL_ID
const PROJ_MODAL_TITLE_SEL = PROJ_MODAL_ID_SEL + ' .' + PROJ_MODAL_USER_CLASS
const PROJ_MODAL_TEXT_SEL = PROJ_MODAL_ID_SEL + ' .' + PROJ_MODAL_BODY_CLASS

const PLACEHOLDER = ' '

// function to open modal when clicking on element relating to PROJ_MODAL_ID_SEL
const openModal = (person) => (event) => {
  const { Modal } = require('bootstrap')
  const myModal = Modal.getOrCreateInstance($(PROJ_MODAL_ID_SEL)[0])
  $(PROJ_MODAL_TITLE_SEL).text(person.formattedPersonName + "'s Projects")
  $(PROJ_MODAL_TEXT_SEL).html(
    '<ul>' +
    person.getProjects().map((p) => '<li><a href="/projects/' + p.id + '/">' + p.Name + '</a></li>').join('') +
    '</ul>'
  )
  myModal.show()
  event.preventDefault()
}

// if the person doesn't have projects, this will return the projects button
// with the "disabled" attribute
const CreateProjectButton = ({ person }) => {
  const myProps = {
    id: 'project-button-' + person.id,
    type: 'button',
    className: 'btn btn-link mt-auto',
    disabled: person.projects.length === 0,
    'data-bs-toggle': 'tooltip',
    'data-bs-placement': 'right',
    'data-bs-title': person.formattedPersonName + ' does not have any projects.'
  }
  if (person.projects.length > 0) {
    myProps['data-bs-title'] = 'Click to see a list of ' + person.formattedPersonName + '\'s  projects.'
    myProps.onClick = openModal(person)
  }
  return <button {...myProps}>Projects</button>
}

const CardFront = ({ person }) => (
  <>
    <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
    <p className='card-subtitle mb-2 text-muted mt-auto'>{person.isAlumni ? person.GraduationYear : person.personClass.Name}</p>
  </>
)

const CardBack = ({ person }) => (
  <>
    <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
    <p className='card-subtitle mb-2 text-muted mt-auto'>{person.isAlumni ? person.CurrentJob : PLACEHOLDER}</p>
    <CreateProjectButton person={person} />
    <button id='publications-button' className='btn btn-link mt-1'>Publications</button>
  </>
)

const PersonCard = ({ person }) => (
  <div className='col'>
    <div className='card card-flip h-100'>
      <div className='card-front d-flex flex-column'>
        <div className='ratio ratio-1x1'>
          <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait' />
        </div>
        <div className='card-body d-flex flex-column'>
          <CardFront person={person} />
        </div>
      </div>
      <div className='card-back d-flex flex-column'>
        <div className='card-body d-flex flex-column'>
          <CardBack person={person} />
        </div>
      </div>
    </div>
  </div>
)

const PersonModal = () => (
  <div id={PROJ_MODAL_ID} className='modal fade' tabIndex='-1'>
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <p className='modal-title'><strong className={PROJ_MODAL_USER_CLASS}>?</strong></p>
          <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
        </div>
        <div className={PROJ_MODAL_BODY_CLASS}>
          <p>?</p>
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
        </div>
      </div>
    </div>
  </div>
)

export { PersonCard, PersonModal }
