import style from '../styles/Personcard.module.css'

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

const PersonCardPlaceholder = ({ name, title }) => {
  return (
		<article className={style.card}>
			<div className={style.image}>
				<svg
					className='bd-placeholder-img bd-placeholder-img-lg'
					width='240'
					height='240'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					preserveAspectRatio='xMidYMid slice'
					focusable='false'					
				>
					<title>Placeholder</title>
					<rect width='100%' height='100%' fill='grey' />
					<text x='50%' y='50%' fill='white' dy='.3em' dominantBaseline='middle' textAnchor='middle'>{name}</text>
				</svg>
			</div>
			<div>
				<h5><strong>{name}</strong></h5>
				<h6>{title}</h6>
			</div>
		</article>
  )
}

export { PersonCard, PersonCardPlaceholder }