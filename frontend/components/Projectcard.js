import style from '../styles/Projectcard.module.css'

const ProjectCard = () => {
  return (
    <div className={style.card}>
      <div className={style.container}>
        <img />
      </div>
      <div>
        <h5><strong>Name</strong></h5>
        <h6>Title</h6>
      </div>
    </div>
  )
}

const ProjectCardPlaceholder = ({ project }) => {
  return (
    <article className={style.card}>
      <div className={style.image}>
        <svg
          className='bd-placeholder-img bd-placeholder-img-lg'
          width='320'
          height='180'
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          preserveAspectRatio='xMidYMid slice'
          focusable='false'
        >
          <title>Placeholder</title>
          <rect width='100%' height='100%' fill='grey' />
          <text x='50%' y='50%' fill='white' dy='.3em' dominantBaseline='middle' textAnchor='middle'>{project.Name}</text>
        </svg>
      </div>
      <div className={style.bottom}>
        <p>{project.Name}</p>
        {/* <h6 className='beaverorange'>{project.}</h6> */}
        <p>{project.formattedInitialPublishedDate}</p>
      </div>
    </article>
  )
}

export { ProjectCard, ProjectCardPlaceholder }
