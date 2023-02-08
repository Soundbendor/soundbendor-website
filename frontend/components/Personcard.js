import style from '../styles/Personcard.module.css'

const PersonCard = ({ person }) => {
  return (
    <article className={style.card}>
      <div className={style.container}>
        <img
          src={person.photoImage.url}
          width='240'
          height='240'
          preserveAspectRatio='xMidYMid slice'
        />
      </div>
      <div className={style.bottom}>
        <h5><strong>{person.FirstName} {person.LastName}</strong></h5>
        <hr className={style.horizontalbar} />
        <h6 className='beaverorange'>{person.personClass.name}</h6>
      </div>
    </article>
  )
}

export { PersonCard }
