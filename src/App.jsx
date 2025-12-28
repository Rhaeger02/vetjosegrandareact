import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Services />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App