import styles from './Footer.module.css'
import LogoAS from '../../assets/images/LogoAS.png'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (
    <footer>
      <div className={styles.main}>

        <div className={styles.leftContainer}>
          <img src={LogoAS} alt='LogoAS' />
          <p>Hard work beats talent when talent doesn´t want to work hard, choose how you want to treat your finances, go to next level.</p>
        </div>

        <div className={styles.centerContainer}>
          <div className={styles.homeSci}>
            <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
          <p>Privacy Policy | © 2023 <br />Design by Antonio Silva  </p>
        </div>

        <div className={styles.rightContainer}>
          <h3>Subscribe to receive latest news.</h3>
          <input type='email' placeholder='your@email.com'></input>
          <button>Suscribe</button>
        </div>
      </div>
    </footer>
  )
}