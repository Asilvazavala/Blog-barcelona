import styles from './HomeHero.module.css'
import { NavLink } from 'react-router-dom'
import Avatar from '../../assets/images/home/avatar.jpg'

export const HomeHero = () => {
  return (
    <div>
      <section className={styles.home}>
        <div>
          <div className={styles.homeContent}>
            <h1>Hi, I´m a test</h1>
            <h3>PERSONAL FINANCES</h3>
            <p>This is a TEST PAGE, which shows information about personal finances. <br></br>Under no circumstances, these are tips. I disclaim responsibility under the actions carried out by the person who reads this.</p>
            <div className={styles.btnBox}>
              <NavLink to='/blog'>
                <a>Let´s learn</a>
              </NavLink>
              <NavLink to='/tools'>
                <a>Interest calc </a>
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
