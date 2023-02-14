import style from '../styles/Projectcard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <article className={style.card}>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={project.projectLink} allowFullScreen> </iframe>
      </div>
      <div className={style.bottom}>
        <h5 className='beaverorange'><strong>{project.Name}</strong></h5>
        <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
      </div>
    </article>
  )
}

export { ProjectCard }
