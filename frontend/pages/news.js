import Newscard from '../components/Newscard'

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
            <Newscard eventTitle='Shaurya Gaur – Student Spotlight' eventDate='October 18, 2022' eventURL='https://blogs.oregonstate.edu/honorslink/2022/10/18/shaurya-gaur-student-spotlight/' eventPhoto='/example-news.jpeg' eventFiller='The Honors College empowers students to pursue the intersection of their academic interests and how they wish to change the world — and Honors College fourth-year student Shaurya Gaur has become a shining example of that.' />
            <div class='row'>
              <div class='col-lg-6'>
                <Newscard eventTitle='Post Title 3' eventDate='March 3, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
                <Newscard eventTitle='Post Title 4' eventDate='April 4, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
              </div>
              <div class='col-lg-6'>
                <Newscard eventTitle='Post Title 6' eventDate='June 6, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
                <Newscard eventTitle='Post Title 7' eventDate='July 7 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
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
                        </select>
                      </div>
                    </div>
                    <div class='col'>
                      <div class='form-group'>
                        <select class='form-control'>
                          <option>to date</option>
                          <option>2022</option>
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
            <Newscard eventTitle='Post Title 2' eventDate='March 3, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
            <Newscard eventTitle='Post Title 5' eventDate='May 5, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
            <Newscard eventTitle='Post Title 8' eventDate='August 8, 2022' eventURL='#!' eventPhoto='https://dummyimage.com/700x350/dee2e6/6c757d.jpg' eventFiller='Lorem ipsum dolor sit consectetur adipisicing elit. Reiciendis atque, nulla.' />
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
