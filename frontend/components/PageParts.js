const Simple = ({ pagepart }) => {
  
  return (
    <div className='row py-5 text-center'>
      <div className='col'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h3>{pagepart.PagePartTitle}</h3>
              <img className='w-100' src={pagepart.image.url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//text-center

export { Simple }