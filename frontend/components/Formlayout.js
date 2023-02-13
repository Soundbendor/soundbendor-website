import Script from 'next/script'

const FormLayout = ({ children }) => {
  return (
    <>
      <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js' />
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
        crossorigin='anonymous'
      />
      <div id='app-body-content'>
        {children}
      </div>

    </>
  )
}

export default FormLayout
