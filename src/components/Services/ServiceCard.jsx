import React from 'react'

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="service">
      <img src={imgSrc} alt={title} loading="lazy" />
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default ServiceCard