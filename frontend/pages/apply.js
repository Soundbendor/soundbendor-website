
const Apply = (data) => {
  const ContactFormSubmit = async (event) => {
    event.preventDefault()
    jQuery('#requestInfoSubmit').prop('disabled', true).addClass('disabled');
    let jqxhr = jQuery.ajax({
      url: data.get_info_url,
      data: jQuery(event.target).serialize(), 
      xhrFields: {
        withCredentials: true
      },
      crossOrigin:true,
      type: 'POST',
      dataType: 'json'
    }).always((response) => {
      jQuery('#requestInfoSubmit').prop('disabled', false).removeClass('disabled');
    })
  }

  return (
    <>
      {/* Temporarily removed due to the page content being auto generated now */}
      {/* <div style={{ backgroundColor: '#D73F09' }} className='row py-5'>
        <div className='col'>
          <div className='container'>
            <div className='text-center text-white'>
              <h1 className='fw-bolder'>Join Soundbendor!</h1>
              <p>Soundbendor lab is actively recruiting students with interdisciplinary backgrounds in music and computer science who wish to combine these interests through graduate studies in artificial intelligence at Oregon State University.</p>
              <h5><b>Applications Due</b></h5>
              <ul className='list-group'>
                <li style={{ backgroundColor: '#D73F09' }} className='list-group-item border-0 text-white'><b>December 1, 2022 (Ph.D)</b></li>
                <li style={{ backgroundColor: '#D73F09' }} className='list-group-item border-0 text-white'><b>January 1, 2023 (M.S.)</b></li>
                <li style={{ backgroundColor: '#D73F09' }} className='list-group-item border-0 text-white'><b>February 1, 2023 (B.S.)</b></li>
              </ul>
              <a className='btn btn-dark mt-3' href='https://eecs.oregonstate.edu/graduate-programs-applying-for-admission' role='button'>Apply Now</a>
            </div>
          </div>
        </div>
      </div> */}

      <div className='row justify-content-center py-5'>
        <div className='col'>
          <div className='container'>
            <div className='text-center'>
              <h4>Request Information</h4>
              <div className='embed-responsive embed-responsive-16by9'>
                <form action={data.get_info_url} onSubmit={ContactFormSubmit}>
                  <input type="hidden" name="submit" value="submit" />
                  <div className='form-group'>
                    <label htmlFor='inputName'>Full Name</label>
                    <input type='name' name={data.get_info_name} className='form-control' id='inputName' placeholder='Full Name' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputEmail1'>Email Address</label>
                    <input type='email' name={data.get_info_email} className='form-control' id='inputEmail1' placeholder='Enter email' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputComment1'>Comments</label>
                    <input type='text' name={data.get_info_comment} className='form-control' id='inputComment1' placeholder='Comments' />
                  </div>

                  <button type='submit' className='btn btn-dark mt-3' id="requestInfoSubmit">Request Information</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Apply.getInitialProps = () => {
  const props = {
    get_info_url: process.env.get_info_url,
    get_info_name:process.env.get_info_name,
    get_info_email:process.env.get_info_email,
    get_info_comment:process.env.get_info_comment
  }
  return props 
}


export default Apply
