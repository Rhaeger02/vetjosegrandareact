import { useState, useEffect, useCallback } from 'react'

export const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth > 768 && isMenuOpen) {
        closeMenu()
      }
    }

    const handleClickOutside = (event) => {
      const navMenu = document.getElementById('nav-links')
      const hamburgerBtn = document.querySelector('.hamburger')
      
      if (isMenuOpen && 
          navMenu && 
          hamburgerBtn && 
          !navMenu.contains(event.target) && 
          !hamburgerBtn.contains(event.target)) {
        closeMenu()
      }
    }

    // Cerrar menú al hacer clic en enlace
    const navLinks = document.querySelectorAll('#nav-links a')
    const handleLinkClick = () => {
      closeMenu()
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick)
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick)
      })
    }
  }, [isMenuOpen, closeMenu])

  return { isMenuOpen, toggleMenu, closeMenu }
}