import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.main}>

      <div className={styles.leftContainer}>
        <h2>Need additional information?</h2>
        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <div className={styles.containerInfo}>
          <div className={styles.infoBottom}>
            <h3>Information</h3>
            <p>+800-123-4567 <br />test@gmail.com</p>
          </div>
          <div className={styles.icons}>
            <h3>Follow Us On</h3>
            <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <form action='https://formsubmit.co/asilvazavala@gmail.com' method='POST'>
          <h3>Leave Us Your Info</h3>
          <input type='text' name='name' id='name' placeholder='Antonio silva...' />
          <input type='email' name='email' id='email' placeholder='your@email.com...' />
          <textarea name='message' id='message' placeholder='Your appreciate comment...' />
          <div>
            <button>SUBMIT NOW</button>
          </div>
          <input type='hidden' name='_next' value='https://gym-as.vercel.app/contact' />
          <input type='hidden' name='_captcha' value='false' />
        </form>
      </div>

    </div>
  )
}
