import { useState, useEffect } from 'react'

export const useNavBar = () => {
  // Estado para mostrar el menú que despliega la Navbar
  const [showNavbar, setShowNavBar] = useState(false)
  const showNav = () => {
    setShowNavBar(!showNavbar)
  }

  // Estado para mostar NavBar responsive de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    function handleResize () {
      setIsSmallScreen(window.innerWidth < 900)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Cuando la pantalla es de dispositivo movil, cerrar la navbar cuando se hace clic en una pestaña
  const closeNavbar = () => {
    if (isSmallScreen) showNav()
  }
  return { closeNavbar, isSmallScreen, showNavbar, showNav }
}
