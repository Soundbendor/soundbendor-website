const ProjectCard = ({ project }) => (
  <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 my-2'>
    <div className='project-card-container'>
      <a className='beaverorange' href={'./' + project.id + '/'}>
        <div className='img-container'>
          <img
            src={project.FeaturedImg.url}
            alt='Featured Project Image'
            className='project-card-img'
          />
        </div>
        <div className='project-card-content'>
          <h5 className='beaverorange'>{project.Name}</h5>
          <p className='text-muted'>{project.formattedInitialPublishedDate}</p>
        </div>
      </a>
    </div>
  </div>
);

export { ProjectCard }
