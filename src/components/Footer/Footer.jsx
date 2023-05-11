import styles from './Footer.module.css'
import LogoAS from '../../assets/images/LogoAS.png'

export const Footer = () => {

  return (
    <footer>
      <div className={styles.main}>

        <div className={styles.leftContainer}>
          <img src={LogoAS} alt='LogoAS' />
          <p>“Perdonaré a los jugadores que no acierten, pero nunca les perdonaré que no se esfuercen” Pep Guardiola</p>
        </div>

        <div className={styles.centerContainer}>
          <div className={styles.homeSci}>
            <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
          <p>Privacy Policy | © 2023 <br />Creado por Antonio Silva  </p>
        </div>

        <div className={styles.rightContainer}>
          <h3>Subscríbete a las últimas noticias.</h3>
          <input type='email' placeholder='tu@correo.com'></input>
          <button>Suscribirse</button>
        </div>
      </div>
    </footer>
  )
}