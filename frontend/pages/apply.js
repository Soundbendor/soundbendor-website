
const Apply = () => {
  return (
    <div>
    <div className='container-fluid px-0'>
    <div style={{ backgroundColor: '#D73F09' }} className='row py-5'>
      <div className='col'>
        <div className='container'>
              <div className='text-center text-white'>
                <h1>Join Soundbendor!</h1>
                <p>Soundbendor lab is actively recruiting students with interdisciplinary backgrounds in music and computer science who wish to combine these interests through graduate studies in artificial intelligence at Oregon State University.</p>
                <h5><b>Applications Due</b></h5>
                <ul id="applyul" class="list-group">
                <li style={{ backgroundColor: '#D73F09' }} class="list-group-item border-0 text-white"><b>December 1, 2022 (Ph.D)</b></li>
                <li style={{ backgroundColor: '#D73F09' }} class="list-group-item border-0 text-white"><b>January 1, 2023 (M.S.)</b></li>
                <li style={{ backgroundColor: '#D73F09' }} class="list-group-item border-0 text-white"><b>February 1, 2023 (B.S.)</b></li>
                </ul>
                <a class="btn btn-dark mt-3" href="https://eecs.oregonstate.edu/graduate-programs-applying-for-admission" role="button">Apply Now</a>
              </div>
        </div>
      </div>
    </div>

    <div className='row justify-content-center py-5'>
    <div className='col-md-4'>
        <div className='container'>
      <div className="text-center">
      <h4>Request Information</h4>
<form>
<div class="form-group">
    <label for="exampleInputPassword1">Full Name</label>
    <input type="name" class="form-control" id="inputName" placeholder="Full Name"/>
  </div>
  <div class="form-group m-1">
    <label for="exampleInputEmail1">Email Address</label>
    <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>

  <button type="submit" class="btn btn-dark mt-3">Request Information</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Apply
