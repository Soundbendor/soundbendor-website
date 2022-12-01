import Newscard from '../components/Newscard'

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
            <Newscard eventTitle='Shaurya Gaur – Student Spotlight' eventDate='October 18, 2022' eventURL='https://blogs.oregonstate.edu/honorslink/2022/10/18/shaurya-gaur-student-spotlight/' eventPhoto='/example-news.jpeg' eventFiller='The Honors College empowers students to pursue the intersection of their academic interests and how they wish to change the world — and Honors College fourth-year student Shaurya Gaur has become a shining example of that.' />
            <div className='row'>
              <div className='col-lg-6'>
                <Newscard eventTitle='Post Title 3' eventDate='March 3, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
                <Newscard eventTitle='Post Title 4' eventDate='April 4, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
              </div>
              <div className='col-lg-6'>
                <Newscard eventTitle='Post Title 6' eventDate='June 6, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
                <Newscard eventTitle='Post Title 7' eventDate='July 7 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
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
                        </select>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='form-group'>
                        <select className='form-control'>
                          <option>to date</option>
                          <option>2022</option>
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
            <Newscard eventTitle='Post Title 2' eventDate='March 3, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
            <Newscard eventTitle='Post Title 5' eventDate='May 5, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
            <Newscard eventTitle='Post Title 8' eventDate='August 8, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
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
