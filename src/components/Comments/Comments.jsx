import styles from './Comments.module.css'
import { useComments } from '../../hooks/useComments'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'
export const Comments = () => {
  const [modal, setModal] = useState(false)

  const { 
    comment, 
    comments, 
    handleChange, 
    handleSubmit, 
    handleDelete, 
    id, 
    user, 
    isAuthenticated,
    handleLike,
    handleUnlike,
  } = useComments()

  return (
    <section className={styles.comments}>
      <h2>Mi comentario</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea onChange={handleChange} name='text' value={comment.text}></textarea>
        <button type='submit' className={styles.buttonAddComment}>Agregar comentario</button>
      </form>

      <main className={styles.usersComments}>
        <h2>Comentarios</h2>
        <ul>
        {
          isAuthenticated && comments.length > 0 && comments.map(el => {
            return (
              <li className={isAuthenticated && id === el.publicationId ? '' : styles.hide} key={el.id}>
                <header>
                  <img src={el.image} alt={el.username} title={el.username} />
                  <span>{el.username}</span>
                </header>
                <p>{el.text}</p>

                <div className={styles.like}>
                  <span
                    className={styles.buttonLike}
                    onClick={() => handleLike(el.id, el.like)} 
                    title='Me gusta'>
                    <i className='bx bx-like'></i>
                  </span>
                  <span className={styles.counter}>{el.like}</span>
                </div>

                <div className={styles.unlike}>
                  <span
                    className={styles.buttonUnlike}
                    onClick={() => handleUnlike(el.id, el.unlike)} 
                    title='No me gusta'>
                   <i className='bx bx-dislike' ></i>
                  </span>
                  <span className={styles.counter}>{el.unlike}</span>
                </div>

                <div className={styles.fecha}>
                  <span>{el.createdAt.slice(0, 10) + ' ' + el.createdAt.slice(11, 16)}</span>
                </div>

                <div className={styles.deleteButton}>
                <Modal modal={modal} setModal={setModal} titulo='¿Estás seguro?' handleDelete={handleDelete} el={el}>
                  <p>Esta acción <strong>eliminará</strong> tu comentario</p>
                </Modal>
                  <span 
                    className={isAuthenticated && el.userID === user.email ? '' : styles.hide} 
                    data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop"
                    onClick={() => setModal(!modal)}
                    title='Eliminar comentario'>
                    <i className='bx bx-trash'></i>
                  </span>
                </div>
              </li>
            )
          })
        }
        </ul>
      </main>
    </section>
  )
}
