import styles from './Comments.module.css'
import { useComments } from '../../hooks/useComments'

export const Comments = () => {
  const { 
    comment, 
    comments, 
    handleChange, 
    handleSubmit, 
    handleDelete, 
    handleUpdate, 
    id, 
    user, 
    isAuthenticated 
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
              <li className={ isAuthenticated && id === el.publicationId ? '' : styles.hide } key={el.id}>
                <header>
                  <img src={user.picture} alt={user.name} title={user.name} />
                  <span>{user.given_name}</span>
                </header>
                <p>{el.text}</p>
                <div className={styles.fecha}>
                  <span>{el.createdAt.slice(0, 10) + ' ' + el.createdAt.slice(11, 16)}</span>
                </div>
                <div className={styles.buttons}>
                  <span onClick={() => handleDelete(el.id)} title='Eliminar comentario'><i className='bx bx-trash'></i></span>
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
