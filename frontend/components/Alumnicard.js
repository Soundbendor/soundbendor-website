const AlumniCard = ({ person }) => {
  return (
    <div className='col'>
      <div className='card h-100'>
        <div className='ratio ratio-1x1'>
          <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait' />
        </div>
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
          <p className='card-subtitle mt-0 mb-1'>{person.Degrees} {person.GraduationYear}</p>
          <p className='card-subtitle mb-2 text-muted mt-auto'>{person.CurrentJob}</p>
        </div>
      </div>
    </div>
  )
}

export { AlumniCard }