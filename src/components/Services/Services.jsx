import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'

const Services = () => {
  const servicesData = [
    {
      id: 1,
      imgSrc: "/img/queries.jpg",
      title: "CONSULTAS",
      description: "Atención médica integral para evaluar el estado de salud de tu mascota, detectar problemas tempranos y orientar tratamientos adecuados."
    },
    {
      id: 2,
      imgSrc: "/img/rehab.jpg",
      title: "TERAPIAS",
      description: "Aplicamos terapias especializadas para aliviar dolores, mejorar movilidad, acelerar recuperaciones y brindar bienestar a cada paciente."
    },
    {
      id: 3,
      imgSrc: "/img/images.jpg",
      title: "IMÁGENES MÉDICAS",
      description: "Realizamos estudios de diagnóstico como ecografías y radiografías para obtener información precisa y apoyar decisiones veterinarias."
    },
    {
      id: 4,
      imgSrc: "/img/lab.jpg",
      title: "LABORATORIO Y FÁRMACOS",
      description: "Contamos con análisis clínicos rápidos y un surtido completo de medicamentos para asegurar diagnósticos certeros y tratamientos seguros."
    },
    {
      id: 5,
      imgSrc: "/img/vaccination.jpg",
      title: "VACUNACIÓN Y DESPARASITACIÓN",
      description: "Protegemos a tu mascota contra enfermedades y parásitos mediante esquemas preventivos que cuidan su salud en cada etapa de vida."
    },
    {
      id: 6,
      imgSrc: "/img/surgery.jpg",
      title: "CIRUGÍAS",
      description: "Ofrecemos procedimientos quirúrgicos seguros con equipos modernos y monitoreo constante para garantizar una recuperación adecuada."
    },
    {
      id: 7,
      imgSrc: "/img/grooming.jpg",
      title: "GROOMING",
      description: "Brindamos servicios de higiene y estética para mantener el pelaje saludable, reducir molestias y mejorar el bienestar general de tu mascota."
    },
    {
      id: 8,
      imgSrc: "/img/accesories.jpg",
      title: "ACCESORIOS",
      description: "Disponemos de collares, camas, juguetes y artículos de cuidado diseñados para brindar confort, seguridad y estilo a tu compañero."
    }
  ]

  return (
    <section id="services" className="services">
      {servicesData.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  )
}

export default Services