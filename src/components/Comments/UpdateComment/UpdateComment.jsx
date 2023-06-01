import { useComments } from '../../../hooks/useComments'
import styles from './UpdateComment.module.css'

export const UpdateComment = ({ el }) => {
  const { 
    textareaRef, 
    comment, 
    handleUpdate,
    handleEdit,
    handleChange,
    user, 
    isAuthenticated,
    isEditing,
    editingItem,
  } = useComments()

  return (
    <section>
      { 
        isEditing && editingItem === el.id
        ? <textarea ref={isEditing && editingItem === el.id ? textareaRef  : null} className={styles.editInput} type="text" onChange={handleChange} name='text' value={comment.text}></textarea>
        : <p className={styles.text}>{el.text}</p>
      }

       <div className={isAuthenticated && el.userID === user.email ? styles.editButton : styles.hide}>
        <span
          className={isEditing && editingItem === el.id ? styles.isEditing : ''}
          onClick={() => handleEdit(el.id, el.text)}
          title='Editar comentario'>
          <i className='bx bx-edit'></i>
        </span>
      </div>

      <div className={isEditing && editingItem === el.id ? styles.updateButton : styles.hide}>
        <button
          onClick={() => handleUpdate(el.id, comment.text)}
          title='Actualizar comentario'>Actualizar
        </button>
      </div>
      
    </section>
  )
}
