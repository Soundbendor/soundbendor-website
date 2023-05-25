
const ProjectCard = ({ project }) => (
  <>
    <article className='col-12 col-sm-6 col-lg-4 col-xxl-3'>
      <div styles='margin:0 auto;'>
        <a className='project-link beaverorange' href={'./' + project.id + '/'}>
          <img src={project.FeaturedImg.url} className='img-fluid' alt='Featured Project Image' />
          <div>
            <h5 className='beaverorange'>{project.Name}</h5>
            <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
          </div>
        </a>
      </div>
    </article>
  </>
)

export { ProjectCard }
