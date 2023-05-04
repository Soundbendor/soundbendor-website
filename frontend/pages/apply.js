import $ from 'jquery'

function Apply (data){
  const ContactFormSubmit = async (event) => {
    event.preventDefault()
    $('#requestInfoSubmit').prop('disabled', true).addClass('disabled')
    $.ajax({
      url: data.get_info_url,
      data: $(event.target).serialize(),
      xhrFields: {
        withCredentials: true
      },
      crossOrigin: true,
      type: 'POST',
      dataType: 'json'
    }).always((response) => {
      const contents = [
        '<div class="alert alert-success alert-dismissible" role="alert">',
        'Your request has been sent!',
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ]
      $('#form-alert-container').html(contents.join(''))
      $(event.target)[0].reset()
      $('#requestInfoSubmit').prop('disabled', false).removeClass('disabled')
    })
  }

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center text-center py-5'>
          <div className='col-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3'>
            <h4>Request Information</h4>
            <form name='contact-form' action={data.get_info_url} onSubmit={ContactFormSubmit}>
              <div id='form-alert-container' />
              <input type='hidden' name='submit' value='submit' />
              <div className='form-group'>
                <label htmlFor='inputName'>Full Name</label>
                <input type='name' name={data.get_info_name} className='form-control mb-2' id='inputName' placeholder='Name' />
                <label htmlFor='inputEmail1'>Email Address</label>
                <input type='email' name={data.get_info_email} className='form-control mb-2' id='inputEmail1' placeholder='Email' />
                <label htmlFor='inputComment1'>Additional Comments</label>
                <textarea name={data.get_info_comment} className='form-control' id='inputComment1' placeholder='Comments' />
              </div>
              <button type='submit' className='btn btn-dark mt-3' id='requestInfoSubmit'>Request Information</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const props = {
    get_info_url: process.env.get_info_url,
    get_info_name: process.env.get_info_name,
    get_info_email: process.env.get_info_email,
    get_info_comment: process.env.get_info_comment
  }
  return {'props': props}
}

export default Apply
