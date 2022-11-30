const Footer = () => {
  return (

<footer class="text-center text-lg-start bg-dark text-muted">
  <section class="">
    <div class="container text-white text-center text-md-start pt-3 mt-4">
      <div class="row mt-3">
        <div class="col-md-1 col-lg-3 col-xl-3 mx-auto mb-3">
        <img className='w-75' src='/footerlogo.png' />
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-3">Address</h6>
          <p>
          1500 SW Chandler Avenue<br></br>
          Bend, Oregon 97702
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
          <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
          <p>donnellp@oregonstate.edu</p>
          <p>(514) 706 2071</p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-3">
          <h6 class="text-uppercase fw-bold mb-2">Links</h6>
          <ul class="list-group">
            <li class="list-group-item bg-dark text-white pb-0 border-0"><a href="#!" class="text-reset">Oregon State University</a></li>
            <li class="list-group-item bg-dark text-white pb-0 border-0"><a href="#!" class="text-reset">Oregon State-Cascades</a></li>
            <li class="list-group-item bg-dark text-white border-0"><a href="#!" class="text-reset">School of EECS</a></li>
          </ul>
        </div>
      </div>

    </div>
  </section>

  <div class="text-center pt-2 pb-4">
    © 2021 Copyright: 2020-2022 Soundbendor Lab - All Rights Reserved
  </div>

</footer>
  )
}

export default Footer
