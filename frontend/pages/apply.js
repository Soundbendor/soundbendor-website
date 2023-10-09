import React, { useState } from 'react'

function Apply() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    comments: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('https://soundbendor.org/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })

      if (response.ok) {
        setFormState({ name: '', email: '', comments: '' })
        setFormSubmitted(true)
      } else {
        console.error('Error sending email:', response.statusText)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center py-5">
          <div className="col-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3">
            <form id="applyForm" onSubmit={handleSubmit}>
              <div className="form-group text-center mb-3">
                <h5 htmlFor="name">Name</h5>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group text-center mb-3">
                <h5 htmlFor="email">Email</h5>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group text-center mb-3">
                <h5 htmlFor="comments">Comments</h5>
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  rows="3"
                  value={formState.comments}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-orange">Submit</button>
              </div>
            </form>
            {formSubmitted && (
              <div className='py-4'>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  Information successfully sent!
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setFormSubmitted(false)}
                  ></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Apply