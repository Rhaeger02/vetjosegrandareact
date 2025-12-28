import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* CONTACT TOP: BANNER */}
      <div className="contact-top">
        <figure>
          <img src="/img/logo.png" alt="Logo José Granda" loading="lazy" />
        </figure>
      </div>

      {/* CONTACT MIDDLE: MAPS */}
      <div className="contact-middle">
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.208039408061!2d-77.07547632483434!3d-12.004975940011919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cef4f3cf2197%3A0x5e875306ecbe1cb1!2sAv.%20Jos%C3%A9%20Granda%203666%2C%20San%20Mart%C3%ADn%20de%20Porres%2015311!5e0!3m2!1ses-419!2spe!4v1700976000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Veterinaria José Granda"
        >
        </iframe>
      </div>

      {/* CONTACT BOTTOM: LINKS */}
      <div className="contact-bottom">
        <h3>Tu mascota merece lo mejor. ¡Acércate o escríbenos!</h3>
        <div className="socialmedia">
          <a href="https://www.facebook.com/grandavet" target="_blank" rel="noopener noreferrer">
            <img src="/img/fb.png" className="icon-facebook" alt="Facebook" />
          </a>
          <a href="https://wa.me/51949139386" target="_blank" rel="noopener noreferrer">
            <img src="/img/wsp.png" className="icon-whatsapp" alt="WhatsApp" />
          </a>
          <a href="https://maps.app.goo.gl/YoUZWE9cfMR1nGdw8" target="_blank" rel="noopener noreferrer">
            <img src="/img/maps.png" className="icon-maps" alt="Google Maps" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact