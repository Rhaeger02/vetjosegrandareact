import React from 'react'

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <div 
      className="feature" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard