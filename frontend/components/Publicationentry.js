const Publicationentry = ({ publication }) => {
  return (
    <tr>
      <td>{publication.createdAt}</td>
      <td><a href='#' className='beaverorange'>{publication.Name}</a></td>
      <td>{publication.Name}</td>
    </tr>
  )
}

export default Publicationentry
