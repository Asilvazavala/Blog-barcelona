import styles from './Footer.module.css'
import LogoAS from '../../assets/images/LogoAS.png'
import { useInputFooter } from '../../hooks/useInputFooter'
import { ToastContainer } from 'react-toastify'

export const Footer = () => {
  const { input, handleChange, handleNotification } = useInputFooter()

  return (
    <footer>
      <div className={styles.main}>
      <ToastContainer />

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
          <form id="form" action='https://formsubmit.co/asilvazavala@gmail.com' method='POST'>
            <input onChange={(e) => handleChange(e)} value={input.email} required type='email' name='email' id='email' placeholder='tu@correo.com'></input>
            <button onClick={handleNotification} type="submit">Suscribirse</button>
            {/* Redirigir al enviar mensaje */}
            <input type="hidden" name="_next" value="https://blog-barcelona.vercel.app/" />
            {/* Autoresponse */}
            <input type="hidden" name="_autoresponse" value="Gracias por tu suscripción, Forca Barca!." />
          </form>
        </div>
      </div>
    </footer>
  )
}