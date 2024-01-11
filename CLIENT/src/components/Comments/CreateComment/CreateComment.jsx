import { useComments } from '../../../hooks/useComments'
import styles from './CreateComment.module.css'

export const CreateComment = () => {
  const { 
    comment, 
    handleChange, 
    handleSubmit, 
    isEditing,
  } = useComments()

  return (
    <section>
      <h2>Mi comentario</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea onChange={handleChange} name='text' value={isEditing ? '' : comment.text}></textarea>
        <button type='submit' className={styles.buttonAddComment}>Agregar comentario</button>
      </form>
    </section>
  )
}
