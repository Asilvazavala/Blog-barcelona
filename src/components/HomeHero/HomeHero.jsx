import styles from './HomeHero.module.css'
import { NavLink } from 'react-router-dom'
import Avatar from '../../assets/images/home/avatar.jpg'

export const HomeHero = () => {
  return (
    <div>
      <section className={styles.home}>
        <div>
          <div className={styles.homeContent}>
            <h1>¡Culemania!</h1>
            <p>Bienvenido a tu blog donde encontrarás la mejor información en cuánto a noticias, fichajes, jugadores, técnicos, alineaciones y más... sobre el FC Barcelona, saltemos a la cancha! <br></br> “Más que un club”.</p>
            <div className={styles.btnBox}>
              <NavLink to='/blog'>
                <span>Ver noticias</span>
              </NavLink>
            </div>
          </div>

          <footer className={styles.homeSci}>
            <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </footer>
        </div>
        
        <div className={styles.containerAvatar}>
          <img className={styles.avatar} src={Avatar} alt='Avatar' />
        </div>
      </section>
    </div>
  )
}
