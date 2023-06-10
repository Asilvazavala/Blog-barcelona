import styles from './Navbar.module.css'
import LogoAS from '../../assets/images/LogoAS.png'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../Auth0/LoginButton/LoginButton'
import { LogoutButton } from '../Auth0/LogoutButton/LogoutButton'
import { useFunction } from '../../hooks/useFunction'
import { useNavBar } from '../../hooks/useNavBar'

function Navbar () {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const { isAuthenticated } = useAuth0()
  const { goTop } = useFunction()
  const { closeNavbar, isSmallScreen, showNavbar, showNav } = useNavBar()

  return (
    <div>
      <header id='navBar' className={styles.header}>
        <img src={LogoAS} alt='LogoAS' title='Antonio Silva' />
        <div id='menuIcon' className={styles.menuIcon}>
          <i onClick={showNav} className={showNavbar === false ? 'bx bx-menu' : 'bx bx-x'} />
        </div>
        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbar}>
          <ul>
            <li onClick={goTop}>
              <a 
                onClick={closeNavbar} 
                className={window.location.href === BASE_URL 
                  ? `${styles.active} ${styles.navLinkMobile}` 
                  : styles.navLinkMobile} 
                href="/">Inicio
              </a>
            </li>
            <li onClick={goTop}>
              <a 
                onClick={closeNavbar} 
                className={window.location.href === BASE_URL + 'blog' 
                  ? `${styles.active} ${styles.navLinkMobile}` 
                  : styles.navLinkMobile} 
                href="/blog">Blog
              </a>
            </li>
            <li onClick={goTop}>
              <a 
                onClick={closeNavbar} 
                className={window.location.href === BASE_URL + 'contacto' 
                  ? `${styles.active} ${styles.navLinkMobile}` 
                  : styles.navLinkMobile} 
                href="/contacto">Contacto
              </a>
            </li>
          </ul>
        </nav>

        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbarSession}>
          <ul>
            <li>
              {
                isAuthenticated 
                ? <LogoutButton /> 
                : <LoginButton />
              }
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Navbar

