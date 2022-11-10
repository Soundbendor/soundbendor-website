import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = ({ buildTimestamp }) => {
  return (
    <div className={styles.container}>

      <div class="container" id="logo-container">
			<h1 class=""><img class="w-100" src="/soundbendorlogo.png" /></h1>
		</div>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now()
    }
  }
}

export default Home;