import { useComments } from '../../../hooks/useComments'
import { useFunction } from '../../../hooks/useFunction'
import styles from './LikeDislikeComment.module.css'

export const LikeDislikeComment = ({ el }) => {
  const { notificationError } = useFunction();
  const { 
    handleLike,
    handleDislike,
    user,
    isAuthenticated
  } = useComments()

  return (
    <section className={styles.container}>

      <div className={styles.like}>
        <span
          className={styles.buttonLike}
          onClick={() => isAuthenticated
            ? handleLike(el.id, user.email)
            : notificationError('Inicia sesión primero para dar like')
          } 
          title='Me gusta'
        >
          <i className='bx bx-like'></i>
        </span>
        <span className={styles.counter}>{el.like}</span>
      </div>


      <div className={styles.dislike}>
        <span
          className={styles.buttonDislike}
          onClick={() => isAuthenticated
            ? handleDislike(el.id, user.email)
            : notificationError('Inicia sesión primero para dar dislike')
          } 
          title='No me gusta'
        >
          <i className='bx bx-dislike' ></i>
        </span>
        <span className={styles.counter}>{el.dislike}</span>
      </div>

    </section>
  )
}
