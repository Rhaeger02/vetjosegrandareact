import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-box">
        <h1>Experiencia, dedicación y cariño para tu mascota.</h1>
        <button className="boton" onClick={scrollToContact}>¡CONTÁCTANOS!</button>
      </div>
    </section>
  )
}

export default Hero