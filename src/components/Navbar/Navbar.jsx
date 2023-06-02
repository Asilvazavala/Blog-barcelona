import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import LogoAS from '../../assets/images/LogoAS.png'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../Auth0/LoginButton/LoginButton'
import { LogoutButton } from '../Auth0/LogoutButton/LogoutButton'
import { useFunction } from '../../hooks/useFunction'

function Navbar () {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const { isAuthenticated } = useAuth0()
  const { goTop } = useFunction()

  // Estado para mostrar el menú que despliega la Navbar
  const [showNavbar, setShowNavBar] = useState(false)
  const showNav = () => {
    setShowNavBar(!showNavbar)
  }

  // Estado para mostar NavBar responsive de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    function handleResize () {
      setIsSmallScreen(window.innerWidth < 760)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Cuando la pantalla es de dispositivo movil, cerrar la navbar cuando se hace clic en una pestaña
  const closeNavbar = () => {
    if (isSmallScreen) showNav()
  }

  return (
    <div>
      <header id='navBar' className={styles.header}>
        <img src={LogoAS} alt='LogoAS' title='Antonio Silva' />
        <div id='menuIcon' className={styles.menuIcon}>
          <i onClick={showNav} className={showNavbar === false ? 'bx bx-menu' : 'bx bx-x'} />
        </div>
        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbar}>
        <NavLink to='/' className={styles.navLink} onClick={goTop}>
            <span onClick={closeNavbar} className={window.location.href === BASE_URL ? `${styles.active} ${styles.navLinkMobile}` : styles.navLinkMobile}>Inicio</span>
          </NavLink>

          <NavLink to='/blog' className={styles.navLink} onClick={goTop}>
            <span onClick={closeNavbar} className={window.location.href === BASE_URL + 'blog' ? `${styles.active} ${styles.navLinkMobile}` : styles.navLinkMobile}>Blog</span>
          </NavLink>

          <NavLink to='/contacto' className={styles.navLink} onClick={goTop}>
            <span onClick={closeNavbar} className={window.location.href === BASE_URL + 'contacto' ? `${styles.active} ${styles.navLinkMobile}` : styles.navLinkMobile}>Contacto</span>
          </NavLink>

          { 
            isAuthenticated 
            ? <LogoutButton /> 
            : <LoginButton />
          }
        </nav>
      </header>
    </div>
  )
}
export default Navbar

