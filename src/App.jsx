import Lenis from 'lenis'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router'

const App = () => {

  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App