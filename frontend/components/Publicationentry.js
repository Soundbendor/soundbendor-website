import { saveAs } from 'file-saver'
import Blob from 'cross-blob'
import $ from 'jquery'

const PUBNAMESPACE = 'publication'
const PUB_MODAL_ID = '#publication-modal'
const PUB_MODAL_SAVE_CLASS = PUB_MODAL_ID + ' .saveBibtex'
const PUB_MODAL_TITLE = PUB_MODAL_ID + ' .publicationTitle'

// template publication entry
// args: publication obj data from Strapi API
const Publicationentry = ({ publication }) => {
  // we don't want the full date, so only keep the year
  let yearTrim = publication.publishedDate
  yearTrim = yearTrim.split('-')[0]
  const fileTitle = publication.title.replace(/[^\w\s]/gi, '').replace(/\W/gi, '-').substring(0, 50)

  const saveBibtex = async (fileName, content, event) => {
    const myContent = new Blob([content])
    $(PUB_MODAL_SAVE_CLASS).off('click.' + PUBNAMESPACE)
    saveAs(myContent, fileName + '.bib')
    event.preventDefault()
  }

  const askToSaveBibtex = async (fileName, title, content, event) => {
    const { Modal } = require('bootstrap')
    const myModal = Modal.getOrCreateInstance($(PUB_MODAL_ID)[0])
    $(PUB_MODAL_SAVE_CLASS).on('click.' + PUBNAMESPACE, saveBibtex.bind(fileName, content, event))
    $(PUB_MODAL_TITLE).text(title)
    myModal.show()
    event.preventDefault()
  }

  const bibTex = <a href='#' className='beaverorange' onClick={askToSaveBibtex.bind(null, publication.bibtext, publication.title, 'soundbendor-' + fileTitle)}>Cite</a>

  return (
    <tr>
      <td>{yearTrim}</td>
      <td>{publication.bibtext && bibTex}</td>
      <td><a href={publication.url} className='beaverorange'>{publication.title}</a></td>
      <td>{publication.venue}</td>
    </tr>
  )
}

const PublicationHeader = () => {
  return (
    <tr>
      <th className='col-sm-1'>YEAR</th>
      <th className='col-sm-1'>BibTeX</th>
      <th className='col'>PAPER</th>
      <th className='col-sm-2'>VENUE</th>
    </tr>
  )
}

const PublicationModal = () => {
  return (
    <div id='publication-modal' className='modal' tabIndex='-1'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title'><strong>Download BibTeX Citation?</strong></p>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-body'>
            <p>Are you sure you want to download the BibTex citation for:<br /> <strong className='publicationTitle' />?</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-primary saveBibtex'>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Publicationentry, PublicationHeader, PublicationModal }
