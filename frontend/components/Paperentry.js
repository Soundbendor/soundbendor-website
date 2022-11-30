import style from '../styles/Paperentry.module.css'

const Papercard = ({ year, paperURL, paperName, venue}) => {
  return (
		<tr>
			<td>{year}</td>
			<td><a href={paperURL}>{paperName}</a></td>
			<td>{venue}</td>
		</tr>
  )
}

export default Papercard