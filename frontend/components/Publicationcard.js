import PersonService from '../models/people';

function Authors({ p }) {
  if ('authors' in p && Array.isArray(p.authors) && p.authors.length > 0) {
    const authors = PersonService.getPeople({ id__in: p.authors });

    return (
      <div>
        {authors.map((person, index) => (
          <span key={'author-' + person.id}>
            {index !== 0 && <span>, </span>}
            {person.formattedPersonName}
          </span>
        ))}
      </div>
    );
  }
  return <p><em>Currently No Authors Listed</em></p>;
}

const PublicationCard = ({ publication }) => {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <p className='fw-bold'>{publication.title}</p>
        <Authors p={publication} />
      </div>
    </div>
  );
}

export { PublicationCard };






