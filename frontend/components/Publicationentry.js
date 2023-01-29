// template publication entry
// args: publication obj data from Strapi API 
const Publicationentry = ({ publication }) => {
  // we don't want the full date, so only keep the year
  let year_trim = publication.publishedDate
  year_trim = year_trim.split('-')[0]
  return (
    <tr>
      <td>{year_trim}</td>
      <td><a href={publication.url} className='beaverorange'>{publication.title}</a></td>
      <td>{publication.venue}</td>
    </tr>
  )
}

export default Publicationentry
