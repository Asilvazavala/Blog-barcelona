import { useComments } from '../../../hooks/useComments'
import styles from './DeleteComment.module.css'
import { useState } from 'react'
import { Modal } from '../../Modal/Modal'

export const DeleteComment = ({ el }) => {
  const [modal, setModal] = useState(false)

  const { 
    handleDelete, 
    user, 
    isAuthenticated,
  } = useComments()

  return (
    <section>
      <div className={styles.deleteButton}>
      { 
        modal && 
        <Modal 
          setModal={setModal} 
          titulo='¿Estás seguro?' 
          mensaje={'Esta acción ELIMINARÁ tu comentario'} 
          textButton1={'Eliminar'} 
          textButton2={'Cancelar'} 
          handleFunction={handleDelete} 
          el={el}
        />
      }

        <span 
          className={isAuthenticated && el.userID === user.email ? '' : styles.hide} 
          data-bs-toggle="modal" 
          data-bs-target="#staticBackdrop"
          onClick={() => setModal(true)}
          title='Eliminar comentario'>
          <i className='bx bx-trash'></i>
        </span>
      </div>
    </section>
  )
}
