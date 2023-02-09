import Link from 'next/link'
import { Carousel, CarouselItemPlaceholder } from '../components/Carousel'
import Layout from '../components/Layout'

const LogoFocus = () => {
  return (
    <h1 className='mx-auto indexlogo'>
      <img className='w-100' src='/soundbendorlogo.png' />
    </h1>

  )
}

const CarouselFocus = () => {
  return (
    <>
      <Carousel>
        <CarouselItemPlaceholder
          isActive='1' name='First Slide' bg='#777' color='#000' title='New Publication!'
          description='Soundbendor Labs has published Mood Dynamic Playlist: Interpolating a Musical Path between Emotions using a KNN Algorithm'
        />
        <CarouselItemPlaceholder
          isActive='0' name='Second Slide' bg='#777' color='#000' title='Project Presentation'
          description='Students at Soundbendor Labs showed of their projects'
        />
        <CarouselItemPlaceholder
          isActive='0' name='Third Slide' bg='#777' color='#000' title='Apply Now!'
        />
      </Carousel>
    </>
  )
}

const ProfessorFocus = () => {
  return (
    <>
      <div className='container'>
        <div className='row py-4'>
          <div className='col-4'>
            <img className='w-100' src='http://www.soundbendor.org/assets/images/patrick-donnelly.jpg' />
          </div>
          <div className='col-8'>
            <h2>Patrick Donnelly</h2>
            <h3>Assistant Professor</h3>
            <p>Patrick is an assistant professor in Computer Science at Oregon State University-Cascades in Bend, Oregon. Combining his background in machine learning and musicology, Patrick uses computational approaches to better understand sound and music.</p>
            <p>Patrick mentors students in Corvallis, Bend, and on the Ecampus.</p>
          </div>
        </div>
      </div>
    </>
  )
}

const ApplyFocus = () => {
  return (
    <>
      <div className='text-center'>
        <h2>Are you a Perspective Masters and Ph.D Candidate?</h2>
        <p className='text-center'>Are you interested in joining the SoundBendor Lab?</p>
        <Link className='btn btn-primary' href='/apply'>Apply Today!</Link>
      </div>
    </>
  )
}

const MissionFocus = () => {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-10 col-xl-8'>
            <div className='text-center'>
              <h2>Machine Understanding of Sound and Music</h2>
              <p className='text-center'>Soundbendor Lab is a research group in the School of Electrical Engineering and Computer Science at Oregon State University. Our interdisciplinary research focuses on a computational understanding of sound and music using AI and deep-learning. We engage in a diverse set of projects in the areas of computational musicology, music affect, acoustic analysis, and bioacoustic understanding.</p>
              <Link className='btn btn-primary' href='/about'>Learn More About Soundbendor Labs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Home = () => {
  return (
    <>
      <div className='container-fluid px-0'>
        <div className='row'>
          <div className='col'>
            <LogoFocus />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <CarouselFocus />
          </div>
        </div>

        <div className='row py-5'>
          <div className='col'>
            <MissionFocus />
          </div>
        </div>

        <div className='row bg-light py-5'>
          <div className='col'>
            <ProfessorFocus />
          </div>
        </div>

        <div className='row py-5'>
          <div className='col'>
            <ApplyFocus />
          </div>
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout (page) {
  return (
    <Layout>{page}</Layout>
  )
}
// How to add "dynamic" stuff to page to be set at build time
/*
export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now()
    }
  }
}
*/

export default Home
