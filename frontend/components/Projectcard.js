import style from '../styles/Projectcard.module.css'

const ProjectCard = () => {
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

const ProjectCardPlaceholder = ({ projectName, projectAuthor, projectDate}) => {
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
          <text x='50%' y='50%' fill='white' dy='.3em' dominantBaseline='middle' textAnchor='middle'>{projectName}</text>
        </svg>
      </div>
      <div classname={style.bottom}>
        <h5><strong>{projectName}</strong></h5>
        <h6>{projectAuthor}</h6>
        <h7>{projectDate}</h7>
      </div>
    </article>
  )
}

export { ProjectCard, ProjectCardPlaceholder }