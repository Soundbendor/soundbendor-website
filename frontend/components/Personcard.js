const PersonCard = ({ person }) => {
  return (
    <div className='col '>
      <div className='card'>
        <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait'></img>
        <div className='card-body'>
          <h5 className='card-title'>{person.FirstName} {person.LastName}</h5>
          <h6 className='card-subtitle mb-2 beaverorange'>{person.personClass.Name}</h6>
        </div>
      </div>
    </div>
  )
}

export { PersonCard }
