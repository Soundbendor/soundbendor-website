const PersonCard = ({ person }) => {
  return (
    <div className='col'>
      <div className='card'>
        <div className='ratio ratio-1x1'>
          <img src={person.photoImage.url} className='card-img-top' alt='Team member portrait' />
        </div>
        <div className='card-body'>
          <h5 className='card-title beaverorange'>{person.formattedPersonName}</h5>
          <p className='card-subtitle mb-2 text-muted'>{person.personClass.Name}</p>
          <div class='btn-group-vertical' role='group' aria-label='project link'>
            <button type='button' className='btn btn-dark dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
              [PH] Links
            </button>
            <ul className='dropdown-menu'>
              <li><a className='dropdown-item' id='item-projects' href='/projects/'>Projects</a></li>
              <li><a className='dropdown-item' id='item-publications' href='/publications/'>Publications</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PersonCard }
