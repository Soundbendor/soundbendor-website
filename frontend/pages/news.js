const News = () => {
  return (
    <div>
      <div className='row py-4'>
        <div className='col'>
          <div className='container'>
            <div className='text-center'>
              <h1 class='fw-bolder'>News</h1>
            </div>
          </div>
        </div>
      </div>

      <div class='container'>
        <div class='row'>
          <div class='col-lg-8'>
            <div class='card bg-light mb-4'>
              <a href='#!'><img class='card-img-top' src='/example-news.jpeg' alt='...' /></a>
              <div class='card-body'>
                <div class='small text-muted'>October 18, 2022</div>
                <h2 style={{ color: '#D73F09' }} class='card-title'>Shaurya Gaur – Student Spotlight</h2>
                <p class='card-text'>The Honors College empowers students to pursue the intersection of their academic interests and how they wish to change the world — and Honors College fourth-year student Shaurya Gaur has become a shining example of that.</p>
                <a class='btn btn-dark' href='https://blogs.oregonstate.edu/honorslink/2022/10/18/shaurya-gaur-student-spotlight/'>Read more →</a>
              </div>
            </div>

            <div class='row'>
              <div class='col-lg-6'>
                <div class='card mb-4'>
                  <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div class='card-body'>
                    <div class='small text-muted'>March 3, 2022</div>
                    <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 3</h2>
                    <p class='card-text'>Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.</p>
                    <a class='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>

                <div class='card mb-4'>
                  <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div class='card-body'>
                    <div class='small text-muted'>April 4, 2022</div>
                    <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 4</h2>
                    <p class='card-text'>Lorem ipsum dolor adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    <a class='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>
              </div>

              <div class='col-lg-6'>
                <div class='card mb-4'>
                  <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div class='card-body'>
                    <div class='small text-muted'>June 6, 2022</div>
                    <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 6</h2>
                    <p class='card-text'>Lorem ipsum dolor sit amet aliquid atque, nulla.</p>
                    <a class='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>

                <div class='card mb-4'>
                  <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
                  <div class='card-body'>
                    <div class='small text-muted'>July 7, 2022</div>
                    <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 7</h2>
                    <p class='card-text'>Lorem ipsum dolor sit amet, reiciendis aliquid atque, nulla.</p>
                    <a class='btn btn-dark' href='#!'>Read more →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='col-lg-4'>
            <div class='card mb-4'>
              <div class='card-header text-center'>Filter</div>
              <div class='card-body'>
                <form>
                  <div class='row'>
                    <input class='form-control' type='text' placeholder='Keywords' />
                  </div>
                  <div class='row mt-3'>
                    <div class='col'>
                      <div class='form-group'>
                        <select class='form-control'>
                          <option>from date</option>
                          <option>2022</option>
                          <option>2021</option>
                          <option>2020</option>
                          <option>2019</option>
                          <option>2018</option>
                        </select>
                      </div>
                    </div>
                    <div class='col'>
                      <div class='form-group'>
                        <select class='form-control'>
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
                  <div class='row mt-3'>
                    <button class='btn btn-dark' type='submit'>Search</button>
                  </div>
                </form>
              </div>
            </div>

            <div class='card mb-4'>
              <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
              <div class='card-body'>
                <div class='small text-muted'>February 2, 2022</div>
                <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 2</h2>
                <p class='card-text'>Reiciendis aliquid atque, nulla.</p>
                <a class='btn btn-dark' href='#!'>Read more →</a>
              </div>
            </div>

            <div class='card mb-4'>
              <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
              <div class='card-body'>
                <div class='small text-muted'>May 5, 2022</div>
                <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 5</h2>
                <p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a class='btn btn-dark' href='#!'>Read more →</a>
              </div>
            </div>

            <div class='card mb-4'>
              <a href='#!'><img class='card-img-top' src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' alt='...' /></a>
              <div class='card-body'>
                <div class='small text-muted'>August 8, 2022</div>
                <h2 style={{ color: '#D73F09' }} class='card-title h4'>Post Title 8</h2>
                <p class='card-text'>Lorem ipsum dolor sit amet</p>
                <a class='btn btn-dark' href='#!'>Read more →</a>
              </div>
            </div>
          </div>

          <nav aria-label='Pagination'>
            <hr class='my-0' />
            <ul class='pagination justify-content-center my-4'>
              <li class='page-item disabled'><a class='page-link' href='#' tabindex='-1' aria-disabled='true'>Newer</a></li>
              <li class='page-item active' aria-current='page'><a class='page-link' href='#!'>1</a></li>
              <li class='page-item'><a class='page-link' href='#!'>2</a></li>
              <li class='page-item'><a class='page-link' href='#!'>3</a></li>
              <li class='page-item disabled'><a class='page-link' href='#!'>...</a></li>
              <li class='page-item'><a class='page-link' href='#!'>15</a></li>
              <li class='page-item'><a class='page-link' href='#!'>Older</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default News
