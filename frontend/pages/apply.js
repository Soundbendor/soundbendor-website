import $ from 'jquery'
import React, { useState } from 'react'

function Apply() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    comments: ''
  })

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
        const contents = [
          '<div className="alert alert-success alert-dismissible" role="alert">',
          'Your request has been sent!',
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ]
        $('#form-alert-container').html(contents.join(''))
        $('#applyForm')[0].reset()
      } else {
        console.error('Error sending email:', response.statusText)
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <>
      <div class="container">
        <div class="row justify-content-center text-center py-5">
          <div class="col-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3">
            <form id="applyForm" onSubmit={handleSubmit}>
              <div class="form-group text-center mb-3">
                <h5 htmlFor="name">Name</h5>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="form-group text-center mb-3">
                <h5 for="email">Email</h5>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="form-group text-center mb-3">
                <h5 for="comments">Comments</h5>
                <textarea
                  class="form-control"
                  id="comments"
                  name="comments"
                  rows="3"
                  value={formState.comments}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-orange">Submit</button>
              </div>
            </form>
            <div className="my-4" id="form-alert-container"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Apply
