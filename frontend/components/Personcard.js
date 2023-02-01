import style from '../styles/Personcard.module.css'

const PersonCard = ({ person, image }) => {
  const imageId = person.Photo
  return (
    <article className={style.card}>
      <div className={style.container}>
        <img
          src={image.url}
          width='240'
          height='240'
          preserveAspectRatio='xMidYMid slice' />
      </div>
      <div className={style.bottom}>
        <h5><strong>{person.FirstName} {person.LastName}</strong></h5>
        <hr className={style.horizontalbar} />
        <h6 className='beaverorange'>{person.person_class} | {person.Photo}</h6>
      </div>
    </article>
  )
}

const PersonCardPlaceholder = ({ person, image }) => {
  return (
    <article className={style.card}>
      <div className={style.image}>
        <svg
          className='bd-placeholder-img bd-placeholder-img-lg'
          width='240'
          height='240'
          xmlns={person.Photo}
          role='img'
          preserveAspectRatio='xMidYMid slice'
          focusable='false'
        >
          <title>Placeholder</title>
          <rect width='100%' height='100%' fill='grey' />
          <text x='50%' y='50%' fill='white' dy='.3em' dominantBaseline='middle' textAnchor='middle'>{person.LastName}</text>
        </svg>
      </div>
      <div className={style.bottom}>
        <h5><strong>{person.FirstName} {person.LastName}</strong></h5>
        <hr className={style.horizontalbar} />
        <h6 className='beaverorange'>{person.person_class}</h6>
      </div>
    </article>
  )
}

export { PersonCard, PersonCardPlaceholder }
