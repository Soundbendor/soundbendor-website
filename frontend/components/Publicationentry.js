import { saveAs } from 'file-saver'
import Blob from 'cross-blob'

// template publication entry
// args: publication obj data from Strapi API
const Publicationentry = ({ publication }) => {
  // we don't want the full date, so only keep the year
  let yearTrim = publication.publishedDate
  yearTrim = yearTrim.split('-')[0]
  const fileTitle = publication.title.replace(/[^\w\s]/gi, '').replace(/\W/gi, '-').substring(0, 50)

  async function saveBibtex (fileName, content, event) {
    const wat = new Blob([content])
    saveAs(wat, fileName + '.bib')
    event.preventDefault()
  }

  const bibTex = <a href='#' className='beaverorange' onClick={saveBibtex.bind(null, 'soundbendor-' + fileTitle, publication.bibtext)}>Cite</a>

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
export { Publicationentry, PublicationHeader }
