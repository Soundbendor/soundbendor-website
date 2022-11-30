import style from '../styles/person-card.module.css'

const PersonCard = () => {
	return (
		<div className={style.card}>
			<div className={style.container}>
				<img></img>
			</div>
			<div>
				<h5><strong>Name</strong></h5>
				<h6>Title</h6>
			</div>
		</div>
	)
}

const PersonCardPlaceholder = ({ name, title, image }) => {
  return (
		<article className={style.card}>
			<div className={style.container}>
				<img></img>
			</div>
			<div>
				<h5><strong>{name}</strong></h5>
				<h6>{title}</h6>
			</div>
		</article>
  )
}

export { PersonCard, PersonCardPlaceholder }