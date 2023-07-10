import $ from 'jquery'
import { Publicationentry, PublicationHeader } from './Publicationentry'
import { renderToStaticMarkup } from 'react-dom/server'
import Script from 'next/script'

const PROJ_MODAL_ID = 'project-modal'
const PROJ_MODAL_USER_CLASS = 'modal-user'
const PROJ_MODAL_BODY_CLASS = 'modal-body'
// SELECTORS
const PROJ_MODAL_ID_SEL = '#' + PROJ_MODAL_ID
const PROJ_MODAL_TITLE_SEL = PROJ_MODAL_ID_SEL + ' .' + PROJ_MODAL_USER_CLASS
const PROJ_MODAL_TEXT_SEL = PROJ_MODAL_ID_SEL + ' .' + PROJ_MODAL_BODY_CLASS

const PUB_MODAL_ID = 'publication-modal'
const PUB_MODAL_USER_CLASS = 'modal-user'
const PUB_MODAL_BODY_CLASS = 'modal-body'
// SELECTORS
const PUB_MODAL_ID_SEL = '#' + PUB_MODAL_ID
const PUB_MODAL_TITLE_SEL = PUB_MODAL_ID_SEL + ' .' + PUB_MODAL_USER_CLASS
const PUB_MODAL_TEXT_SEL = PUB_MODAL_ID_SEL + ' .' + PUB_MODAL_BODY_CLASS

const PLACEHOLDER = ' '

// if the person doesn't have projects, this will return the projects button
// with the "disabled" attribute
const CreateProjectButton = ({ person }) => {
  const isDisabled = person.projects.length === 0
  const myProps = {
    id: 'project-button-' + person.id,
    type: 'button',
    className: 'btn btn-link mt-auto',
    disabled: isDisabled
  }
  if (person.projects.length > 0) {
    myProps['data-bs-title'] = 'Click to see a list of ' + person.formattedPersonName + '\'s  projects.'
    myProps.onClick = (event) => {
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
  }

  if (isDisabled) {
    return <div data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title={person.formattedPersonName + ' does not have any projects.'}><button {...myProps}>Projects</button></div>
  }
  return <div><button {...myProps}>Projects</button></div>
}

// if the person doesn't have publications, this will return the projects button
// with the "disabled" attribute
const CreatePublicationButton = ({ person }) => {
  const pubs = person.getPublications()
  const isDisabled = pubs.length === 0
  const myProps = {
    id: 'publication-button-' + person.id,
    type: 'button',
    className: 'btn btn-link mt-1',
    disabled: isDisabled
  }
  if (pubs.length > 0) {
    myProps['data-bs-title'] = 'Click to see a list of ' + person.formattedPersonName + '\'s  publications.'
    myProps.onClick = (event) => {
      const { Modal } = require('bootstrap')
      const myModal = Modal.getOrCreateInstance($(PUB_MODAL_ID_SEL)[0])
      $(PUB_MODAL_TITLE_SEL).text(person.formattedPersonName + "'s Publications")
      $(PUB_MODAL_TEXT_SEL).html(
        '<table class="table table-striped table-hover"><thead>' + renderToStaticMarkup(<PublicationHeader simpleView />) + '</thead><tbody>' +
        renderToStaticMarkup(pubs.map((p) => <Publicationentry key={'publication-' + p.id} publication={p} simpleView />)) +
        '</tbody></table'
      )
      myModal.show()
      event.preventDefault()
    }
  }
  if (isDisabled) {
    return <div data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title={person.formattedPersonName + ' does not have any publications.'}><button {...myProps}>Publications</button></div>
  }
  return <div><button {...myProps}>Publications</button></div>
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
    {person.isAlumni && person.matchingDegrees.length > 0 ? (
      person.matchingDegrees.map((degree, index) => (
        <p className='card-subtitle mb-2 text-muted mt-auto' key={index}>
          {degree.Suffix} {degree.Name}
        </p>
      ))
    ) : (
      <p className='card-subtitle mb-2 text-muted mt-auto'>{PLACEHOLDER}</p>
    )}
    <p className='card-subtitle mb-2 text-muted mt-auto'>{person.isAlumni ? person.CurrentJob : PLACEHOLDER}</p>
    <CreateProjectButton person={person} />
    <CreatePublicationButton person={person} />
    {/* <button id='publications-button' className='btn btn-link mt-1'>Publications</button> */}
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

const ModalBase = ({ modalId, userClass, bodyClass, size }) => (
  <>
    <div id={modalId} className='modal fade' tabIndex='-1'>
      <div className={'modal-dialog ' + size}>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title'><strong className={userClass}>?</strong></p>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className={bodyClass}>
            <p>?</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  </>
)

const PersonModal = () => (
  <>
    <ModalBase modalId={PROJ_MODAL_ID} userClass={PROJ_MODAL_USER_CLASS} bodyClass={PROJ_MODAL_BODY_CLASS} />
    <ModalBase modalId={PUB_MODAL_ID} userClass={PUB_MODAL_USER_CLASS} bodyClass={PUB_MODAL_BODY_CLASS} size='modal-xl' />
    <Script src='/sb.js' />
  </>
)

export { PersonCard, PersonModal }
