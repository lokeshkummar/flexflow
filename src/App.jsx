import Lenis from 'lenis'
import Header from './Components/Header'
import OurPrograms from './Components/OurPrograms'
import WhyChooseUs from './Components/WhyChooseUs'
import Coatches from './Components/Coatches'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import Hero from './Components/Hero'

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
      <Hero />
      <OurPrograms />
      <WhyChooseUs />
      <Coatches />
      <Pricing />
      <Footer />
    </>
  )
}

export default App