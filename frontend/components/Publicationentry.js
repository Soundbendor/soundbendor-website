const Publicationentry = ({ year, pubURL, pubName, venue }) => {
  return (
    <tr>
      <td>{year}</td>
      <td><a href={pubURL} className='beaverorange'>{pubName}</a></td>
      <td>{venue}</td>
    </tr>
  )
}

export default Publicationentry
