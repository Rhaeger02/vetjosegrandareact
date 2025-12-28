import { useCallback } from 'react'

export const useScrollAnimation = () => {
  const observeElements = useCallback((selector, options) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const index = Array.from(element.parentNode.children).indexOf(element)
          
          setTimeout(() => {
            element.classList.add('visible')
          }, index * 200)
        }
      })
    }, options)

    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
      observer.observe(element)
    })

    return () => {
      elements.forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])

  return { observeElements }
}