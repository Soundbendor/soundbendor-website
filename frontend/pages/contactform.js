
const ContactForm = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col'>
        <div className='container'>
          <div className='text-center'>
            <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkdXrKAD7q8Q3ALzzU-kYjI0RogaH5vrX6oz0iLpi7pM00FA/formResponse'>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Full Name</label>
                <input type='name' name='entry.2005620554' className='form-control' id='inputName' placeholder='Full Name' />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email Address</label>
                <input type='email' name='entry.1045781291' className='form-control' id='inputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Comments</label>
                <input type='text' name='entry.839337160' className='form-control' id='inputComment1' aria-describedby='commentHelp' placeholder='Comments' />
              </div>

              <button type='submit' className='btn btn-dark mt-3'>Request Information</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
