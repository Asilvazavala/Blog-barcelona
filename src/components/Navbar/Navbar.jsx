import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import LogoAS from '../../assets/images/LogoAS.png'
import { NavLink } from 'react-router-dom'

function Navbar () {
  const BASE_URL = 'http://localhost:3002/'
  // const BASE_URL = 'https://gym-as.vercel.app/'

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  // Estado para mostrar el menú que despliega la Navbar
  const [showNavbar, setShowNavBar] = useState(false)
  const showNav = () => {
    setShowNavBar(!showNavbar)
  }

  // Estado para mostar NavBar responsive de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    function handleResize () {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <header id='navBar' className={styles.header}>
        <div id='menuIcon' className={styles.menuIcon}>
          <i onClick={showNav} className={showNavbar === false ? 'bx bx-menu' : 'bx bx-x'} />
        </div>
        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbar}>
          <div className={styles.logoLinks}>
            <img className={styles.logo} src={LogoAS} alt='LogoAS' title='Antonio Silva' />
              <NavLink to='/' onClick={goTop}>
                <a className={window.location.href === BASE_URL ? styles.active : ''}>Inicio</a>
              </NavLink>

              <NavLink to='/blog' onClick={goTop}>
                <a className={window.location.href === BASE_URL + 'blog' ? styles.active : ''}>Blog</a>
              </NavLink>

              <NavLink to='/extras' onClick={goTop}>
                <a className={window.location.href === BASE_URL + 'extras' ? styles.active : ''}>Extras</a>
              </NavLink>

              <NavLink to='/contacto' onClick={goTop}>
                <a className={window.location.href === BASE_URL + 'contacto' ? styles.active : ''}>Contacto</a>
              </NavLink>
            </div>
          
          <div className={styles.login}>
            <NavLink to='/sesion' onClick={goTop}>
              <a className={styles.sigIn}>Iniciar sesión</a>
            </NavLink>

            <div className={styles.containerRegister}>
              <NavLink to='/registro' onClick={goTop}>
                <button className={styles.register}>Registro</button>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Navbar
