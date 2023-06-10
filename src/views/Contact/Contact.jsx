import styles from './Contact.module.css'
import { useInputContact } from '../../hooks/useInputContact'
import { ToastContainer } from 'react-toastify'

export const Contact = () => {
  const { input, handleChange, handleNotification } = useInputContact()

  return (
    <div className={styles.main}>
    <ToastContainer />

      <div className={styles.leftContainer}>
        <h2>¿Tienes alguna sugerencia?</h2>
        <p>Tu opinión es muy importante, por lo que si tienes alguna propuesta no dudes en enviarnos un mensaje para poder entenderte y mejorar tu blog Culemanía.</p>
        <div className={styles.containerInfo}>
          <div className={styles.infoBottom}>
            <h3>Información:</h3>
            <p>+800-123-4567 <br />asilvazavala@gmail.com</p>
          </div>
          <div className={styles.icons}>
            <h3>Síguenos en:</h3>
            <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <form id="form" action='https://formsubmit.co/asilvazavala@gmail.com' method='POST'>
          <h3>¡Te escuchamos!</h3>
          <input onChange={(e) => handleChange(e)} value={input.name} required type='text' name='name' id='name' placeholder='Tu nombre...' />
          <input onChange={(e) => handleChange(e)} value={input.email} required type='email' name='email' id='email' placeholder='tu@correo.com...' />
          <textarea onChange={(e) => handleChange(e)} value={input.message} required name='message' id='message' placeholder='Tu comentario...' />
          <div>
            <button onClick={handleNotification} type="submit">ENVIAR</button>
          </div>
          {/* Redirigir al enviar mensaje */}
          <input type="hidden" name="_next" value="https://blog-barcelona.vercel.app/contacto" />
          {/* Autoresponse */}
          <input type="hidden" name="_autoresponse" value="Gracias por tu mensaje, Forca Barca!." />
        </form>
      </div>

    </div>
  )
}
