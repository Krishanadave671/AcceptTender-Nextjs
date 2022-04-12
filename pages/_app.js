import '../styles/globals.css'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Head  from 'next/head'
import Navbar_prajwal from '../components/Navbar_prajwal'


function MyApp({ Component, pageProps }) {
  
  return <>

  <Navbar_prajwal/>
  <Component {...pageProps} />
  <Footer/>
  
  </>
}

export default MyApp
