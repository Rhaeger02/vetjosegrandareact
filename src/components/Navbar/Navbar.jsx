import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useHamburgerMenu } from '../../hooks/useHamburgerMenu'

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useHamburgerMenu()

  const scrollToSection = (sectionId) => {
    closeMenu()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">
          <img src="/img/pin.png" alt="Veterinaria José Granda Logo" className="logo-img" />
          <div className="logo-text">
            <h1 id="jose">José</h1>
            <h1 id="granda">Granda</h1>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <ul id="nav-links" className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>INICIO</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>SERVICIOS</a></li>
          <li><a href="#aboutus" onClick={(e) => { e.preventDefault(); scrollToSection('aboutus') }}>NOSOTROS</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACTO</a></li>
        </ul>

        {/* HAMBURGER MENU */}
        <div 
          className="hamburger" 
          onClick={toggleMenu}
          role="button"
          aria-label="Menú principal"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </nav>
    </header>
  )
}

export default Navbar