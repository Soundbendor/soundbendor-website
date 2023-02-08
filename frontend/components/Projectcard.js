import style from '../styles/Projectcard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <article className={style.card}>
      <iframe width="320" height="180"
src={project.projectLink}>
</iframe>
      <div className={style.bottom}>
        <h5><strong>{project.Name}</strong></h5>
        {/* <h6 className='beaverorange'>{project.}</h6> */}
        <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
      </div>
    </article>
  )
}

export { ProjectCard }
