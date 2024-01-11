import styles from './Modal.module.css'

export const Modal = ({ setModal, titulo='titulo', mensaje='mensaje', textButton1='aceptar', textButton2='cancelar', handleFunction, el='' }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseButton}>
          <i onClick={() => setModal(false)} className='bx bx-window-close'></i> 
        </div>

        <div className={styles.title}>
          <h3>{titulo}</h3>
        </div>

        <div className={styles.body}>
          <p>{mensaje}</p>
        </div>

        <div onClick={() => setModal(false)} className={styles.footer}>
          <button className={styles.fisrtButton} onClick={() => handleFunction(el.id)}>{textButton1}</button>
          <button className={styles.cancelButton} onClick={() => setModal(false)}>{textButton2}</button>
        </div>

      </div>
    </div>
  )
}