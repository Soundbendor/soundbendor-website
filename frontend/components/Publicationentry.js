const Papercard = ({ year, paperURL, paperName, venue }) => {
  return (
    <tr>
      <td>{year}</td>
      <td><a href={paperURL} className='beaverorange'>{paperName}</a></td>
      <td>{venue}</td>
    </tr>
  )
}

export default Publicationentry
