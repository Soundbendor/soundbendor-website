import Head from 'next/head'
const Header = () => {
  return (
    <Head>
      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js' />
      <meta name='viewport' contents='width=device-width, initial-scale=1' />
      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3' crossorigin='anonymous' />
      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p' crossorigin='anonymous' />
    </Head>
  )
}

export default Header
