import styles from './HomeHero.module.css'
import { NavLink } from 'react-router-dom'

export const HomeHero = () => {
  return (
    <div>
      <section className={styles.home}>
        <div className={styles.homeContent}>
          <h1>Hi, I´m Antonio Silva</h1>
          <h3>FINANCIAL ADVISER</h3>
          <p>Do you want to improve your finances and don´t know how?<br></br>I teach you simple keys to put into practice to improve your economy and have a better quality of life, let´s start!</p>
          <div className={styles.btnBox}>
            <NavLink to='/classes'>
              <a href='/classes'>Let´s talk</a>
            </NavLink>
          </div>
        </div>

        <div className={styles.homeSci}>
          <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
        </div>
      </section>
    </div>
  )
}
