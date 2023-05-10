const PersonCard = ({ person }) => {
  const placeholder = ' '
  return (
    <div className='col'>
      <div className='card card-flip h-100'>
        <div className='card-front d-flex flex-column'>
          <div className='ratio ratio-1x1'>
            <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait' />
          </div>
          <div className='card-body d-flex flex-column'>
            <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
            <p className='card-subtitle mb-2 text-muted mt-auto'>{person.personClass.Name}</p>
          </div>
        </div>
        <div className='card-back d-flex flex-column'>
          <div className='card-body d-flex flex-column'>
            <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
            <p className='card-subtitle mb-2 text-muted mt-auto'>{placeholder}</p>
            <button className='btn btn-link mt-auto'>Projects</button>
            <button className='btn btn-link mt-1'>Publications</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PersonCard }
