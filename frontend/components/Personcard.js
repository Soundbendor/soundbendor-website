const PersonCard = ({ person }) => {
  return (
    <div className='col'>
      <div className='card'>
        <div className='overflow-hidden' style={{maxHeight: 240 + 'px'}}>
          <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait' />
        </div>
        <div className='card-body'>
          <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
          <p className='card-subtitle mb-2 text-muted'>{person.personClass.Name}</p>
        </div>
      </div>
    </div>
  )
}

export { PersonCard }
