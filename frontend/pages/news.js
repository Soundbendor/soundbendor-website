const News = () => {
  return (
    <div>
      <div className='row py-4'>
        <div className='col'>
          <div className='container'>
            <div className='text-center'>
              <h1 className='fw-bolder'>News</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card bg-light mb-4'>
              <a href='#!'><img className='card-img-top' src='/example-news.jpeg' alt='...' /></a>
              <div className='card-body'>
                <div className='small text-muted'>October 18, 2022</div>
                <h2 style={{ color: '#D73F09' }} className='card-title'>Shaurya Gaur – Student Spotlight</h2>
                <p className='card-text'>The Honors College empowers students to pursue the intersection of their academic interests and how they wish to change the world — and Honors College fourth-year student Shaurya Gaur has become a shining example of that.</p>
                <a className='btn btn-dark' href='https://blogs.oregonstate.edu/honorslink/2022/10/18/shaurya-gaur-student-spotlight/'>Read more →</a>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='card mb-4'>
                  <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div className='card-body'>
                    <div className='small text-muted'>March 3, 2022</div>
                    <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 3</h2>
                    <p className='card-text'>Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.</p>
                    <a className='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>

                <div className='card mb-4'>
                  <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div className='card-body'>
                    <div className='small text-muted'>April 4, 2022</div>
                    <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 4</h2>
                    <p className='card-text'>Lorem ipsum dolor adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <a className='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='card mb-4'>
                  <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div className='card-body'>
                    <div className='small text-muted'>June 6, 2022</div>
                    <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 6</h2>
                    <p className='card-text'>Lorem ipsum dolor sit amet aliquid atque, nulla.</p>
                    <a className='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>

                <div className='card mb-4'>
                  <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div className='card-body'>
                    <div className='small text-muted'>July 7, 2022</div>
                    <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 7</h2>
                    <p className='card-text'>Lorem ipsum dolor sit amet, reiciendis aliquid atque, nulla.</p>
                    <a className='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className='card-header text-center'>Filter</div>
              <div className='card-body'>
                <form>
                  <div className='row'>
                    <input className='form-control' type='text' placeholder='Keywords' />
                  </div>
                  <div className='row mt-3'>
                    <div className='col'>
                      <div className='form-group'>
                        <select className='form-control'>
                          <option>from date</option>
                          <option>2022</option>
                          <option>2021</option>
                          <option>2020</option>
                          <option>2019</option>
                          <option>2018</option>
                        </select>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='form-group'>
                        <select className='form-control'>
                          <option>to date</option>
                          <option>2022</option>
                          <option>2021</option>
                          <option>2020</option>
                          <option>2019</option>
                          <option>2018</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <button className='btn btn-dark' type='submit'>Search</button>
                  </div>
                </form>
              </div>
            </div>

            <div className='card mb-4'>
              <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
              <div className='card-body'>
                <div className='small text-muted'>February 2, 2022</div>
                <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 2</h2>
                <p className='card-text'>Reiciendis aliquid atque, nulla.</p>
                <a className='btn btn-dark' href='#!'>Read more →</a>
              </div>
            </div>

            <div className='card mb-4'>
              <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
              <div className='card-body'>
                <div className='small text-muted'>May 5, 2022</div>
                <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 5</h2>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a className='btn btn-dark' href='#!'>Read more →</a>
              </div>
            </div>

            <div className='card mb-4'>
              <a href='#!'><img className='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
              <div className='card-body'>
                <div className='small text-muted'>August 8, 2022</div>
                <h2 style={{ color: '#D73F09' }} className='card-title h4'>Post Title 8</h2>
                <p className='card-text'>Lorem ipsum dolor sit amet</p>
                <a className='btn btn-dark' href='#!'>Read more →</a>
              </div>
            </div>
          </div>

          <nav aria-label='Pagination'>
            <hr className='my-0' />
            <ul className='pagination justify-content-center my-4'>
              <li className='page-item disabled'><a className='page-link' href='#' tabIndex='-1' aria-disabled='true'>Newer</a></li>
              <li className='page-item active' aria-current='page'><a className='page-link' href='#!'>1</a></li>
              <li className='page-item'><a className='page-link' href='#!'>2</a></li>
              <li className='page-item'><a className='page-link' href='#!'>3</a></li>
              <li className='page-item disabled'><a className='page-link' href='#!'>...</a></li>
              <li className='page-item'><a className='page-link' href='#!'>15</a></li>
              <li className='page-item'><a className='page-link' href='#!'>Older</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News
