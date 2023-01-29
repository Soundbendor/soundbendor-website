// template publication entry
// args: publication obj data from Strapi API
const Publicationentry = ({ publication }) => {
  // we don't want the full date, so only keep the year
  let yearTrim = publication.publishedDate
  yearTrim = yearTrim.split('-')[0]
  return (
    <tr>
      <td>{yearTrim}</td>
      <td><a href={publication.url} className='beaverorange'>{publication.title}</a></td>
      <td>{publication.venue}</td>
    </tr>
  )
}

export default Publicationentry
