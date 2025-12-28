import React, { useEffect } from 'react'
import './AboutUs.css'
import FeatureCard from './FeatureCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const AboutUs = () => {
  const { observeElements } = useScrollAnimation()

  const featuresData = [
    {
      id: 1,
      icon: "⏳",
      title: "Más de 30 Años de Experiencia",
      description: "Tres décadas dedicadas al cuidado y bienestar animal con amor y ciencia"
    },
    {
      id: 2,
      icon: "👨‍⚕️",
      title: "Personal en Constante Capacitación",
      description: "Nuestro equipo se actualiza regularmente con las últimas técnicas veterinarias"
    },
    {
      id: 3,
      icon: "❤️",
      title: "Atención Personalizada",
      description: "Estamos disponibles para emergencias y seguimiento continuo de cada paciente"
    },
    {
      id: 4,
      icon: "🏥",
      title: "Tecnología de Vanguardia",
      description: "Contamos con equipos modernos para diagnósticos precisos y tratamientos efectivos"
    },
    {
      id: 5,
      icon: "💲",
      title: "Precios Accesibles y Transparentes",
      description: "Ofrecemos calidad profesional con tarifas justas que se adaptan a tu economía"
    }
  ]

  useEffect(() => {
    observeElements('.feature', {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    })

    // Observar el título
    const titleObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const title = entry.target
          title.style.animation = 'titleFadeIn 1s ease forwards'
        }
      })
    }, { threshold: 0.3 })

    const sectionTitle = document.querySelector('#aboutus h2')
    if (sectionTitle) {
      titleObserver.observe(sectionTitle)
    }

    return () => {
      titleObserver.disconnect()
    }
  }, [observeElements])

  return (
    <section id="aboutus" className="about-us">
      <h2>¿Por qué elegirnos?</h2>
      <div className="features">
        {featuresData.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default AboutUs