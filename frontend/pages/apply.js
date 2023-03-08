const Apply = (data) => {
  const ContactFormSubmit = async (event) => {
    event.preventDefault()
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-undef */
    jQuery('#requestInfoSubmit').prop('disabled', true).addClass('disabled')
    const jqxhr = jQuery.ajax({
      url: data.get_info_url,
      data: jQuery(event.target).serialize(),
      xhrFields: {
        withCredentials: true
      },
      crossOrigin: true,
      type: 'POST',
      dataType: 'json'
    }).always((response) => {
      jQuery('#requestInfoSubmit').prop('disabled', false).removeClass('disabled')
      /* eslint-disable no-undef */
      /* eslint-disable no-unused-vars */
    })
  }

  return (
    <>
      <div className='row justify-content-center py-5'>
        <div className='col-lg-6'>
          <div className='container'>
            <div className='text-center'>
              <h4>Request Information</h4>
              <div className='embed-responsive embed-responsive-16by9'>
                <form name='contact-form' action={data.get_info_url} onSubmit={ContactFormSubmit}>
                  <input type='hidden' name='submit' value='submit' />
                  <div className='form-group'>
                    <div className='row-mb3'>

                      <label htmlFor='inputName'>Full Name</label>
                      <div className='col'>
                        <input type='name' name={data.get_info_name} className='form-control' id='inputName' placeholder='Full Name' />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputEmail1'>Email Address</label>
                    <input type='email' name={data.get_info_email} className='form-control' id='inputEmail1' placeholder='Enter email' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputComment1'>Comments</label>
                    <textarea name={data.get_info_comment} className='form-control' id='inputComment1' placeholder='Comments' />
                  </div>

                  <button type='submit' className='btn btn-dark mt-3' id='requestInfoSubmit'>Request Information</button>
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
    get_info_name: process.env.get_info_name,
    get_info_email: process.env.get_info_email,
    get_info_comment: process.env.get_info_comment
  }
  return props
}
export default Apply
