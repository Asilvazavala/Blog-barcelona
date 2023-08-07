import styles from './Navbar.module.css'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../Auth0/LoginButton/LoginButton'
import { LogoutButton } from '../Auth0/LogoutButton/LogoutButton'
import { useFunction } from '../../hooks/useFunction'
import { useNavBar } from '../../hooks/useNavBar'
import { usePublications } from '../../hooks/usePublications';
import { NavItem } from './NavItem/NavItem'

function Navbar () {
  const { isAuthenticated } = useAuth0()
  const { goTop, NavLink } = useFunction()
  const { isActiveNavMobile, showNavMobile } = useNavBar()
  const { handleCategory, category } = usePublications()

  return (
    <main className={styles.container}>
      <header id='header' className={styles.header}>
        <p>TEMAS</p>
        { category?.map(el => {
          return (
            <ul key={el.id}>
              <NavLink to={`/blog/${el.id}`}><li>{el.theme}</li></NavLink>
            </ul>
          )
        })}
      </header>

      <nav 
        id='nav' 
        className={styles.navbarContainer}
      >
        <ul className={styles.navbar} onClick={goTop}>

          <NavItem link={`/`} clickSpan= '' classSpan={styles.logoCulemania} text= 'CULEMANIA'/>
          <NavItem link={`/blog?category=Jugadores`} clickSpan={() => handleCategory('Jugadores')} 
          classSpan={styles.navLinkMobile} text='JUGADORES'/>
          <NavItem link={`/blog?category=Futbol Mundial`} clickSpan={() => handleCategory('Fútbol Mundial')} 
          classSpan={styles.navLinkMobile} text='FÚTBOL MUNDIAL'/>
          <NavItem link={`/blog?category=Fichajes`} clickSpan={() => handleCategory('Fichajes')} 
          classSpan={styles.navLinkMobile} text='FICHAJES'/>
          <NavItem link={`/contacto`} clickSpan='' classSpan={styles.navLinkMobile} text='CONTACTO'/>
                    
          <li className={styles.containerLogIn}>
            {
              isAuthenticated 
              ? <LogoutButton /> 
              : <LoginButton />
            }
          </li>
        </ul>

        {/* Mobile Navbar */}
        <ul className={styles.navbarMobile} onClick={goTop}>
          <NavItem link={`/`} clickSpan= '' classSpan={styles.logoCulemania} text= 'CULEMANIA'/>
          <i onClick={showNavMobile} className='bx bx-menu' />
        </ul>

        { isActiveNavMobile &&
        <main className={`${styles.sidebar} ${isActiveNavMobile ? styles.active_sidebar : null}`}>
          <aside className={styles.sidebar_content}>
            <span className={styles.close_sidebar}>
              <i onClick={showNavMobile} className='bx bx-x' />
            </span>
            <hr />
            <section onClick={showNavMobile}>
              <NavItem link={`/blog?category=Jugadores`} clickSpan={() => handleCategory('Jugadores')} 
              classSpan={styles.navLinkMobile} text='JUGADORES'/>
              <NavItem link={`/blog?category=Futbol Mundial`} clickSpan={() => handleCategory('Fútbol Mundial')} 
              classSpan={styles.navLinkMobile} text='FÚTBOL MUNDIAL'/>
              <NavItem link={`/blog?category=Fichajes`} clickSpan={() => handleCategory('Fichajes')} 
              classSpan={styles.navLinkMobile} text='FICHAJES'/>
              <NavItem link={`/contacto`} clickSpan='' classSpan={styles.navLinkMobile} text='CONTACTO'/>
              {
                isAuthenticated 
                  ? <LogoutButton /> 
                  : <LoginButton />
              }
            </section>
          </aside>
        </main>
        }
      </nav>
    </main>
  )
}
export default Navbar

