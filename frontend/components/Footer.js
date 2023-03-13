const Footer = () => {
  return (

    <footer className='text-center text-lg-start bg-dark text-muted'>
      <section className=''>
        <div className='container text-white text-center text-md-start pt-3 mt-4'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-3'>
              <img className='w-75' src='/footerlogo.png' />
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-3'>Address</h6>
              <p>
                1500 SW Chandler Avenue<br />
                Bend, Oregon 97702
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3'>
              <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
              <p>donnellp@oregonstate.edu</p>
              <p>(514) 706 2071</p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-3'>
              <h6 className='text-uppercase fw-bold mb-2'>Links</h6>
              <ul className='list-unstyled'>
                <li className='list-group-item bg-dark pb-0 border-0 beaverorange'><a href='https://oregonstate.edu/' className='text-reset'>Oregon State University</a></li>
                <li className='list-group-item bg-dark pb-0 border-0 beaverorange'><a href='https://eecs.oregonstate.edu/' className='text-reset'>Oregon State-Cascades</a></li>
                <li className='list-group-item bg-dark border-0 beaverorange'><a href='https://eecs.oregonstate.edu/' className='text-reset'>School of EECS</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <div className='text-center pt-2 pb-4'>
        © 2021 Copyright: 2020-2022 Soundbendor Lab - All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
