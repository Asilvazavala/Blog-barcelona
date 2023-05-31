import { useComments } from '../../../hooks/useComments'
import styles from './LikeDislikeComment.module.css'

export const LikeDislikeComment = ({ el }) => {
  const { 
    handleLike,
    handleDislike,
    user, 
  } = useComments()

  return (
    <section>

      <div className={styles.like}>
        <span
          className={styles.buttonLike}
          onClick={() => handleLike(el.id, user.email)} 
          title='Me gusta'
        >
          <i className='bx bx-like'></i>
        </span>
        <span className={styles.counter}>{el.like}</span>
      </div>


      <div className={styles.dislike}>
        <span
          className={styles.buttonDislike}
          onClick={() => handleDislike(el.id, user.email)} 
          title='No me gusta'
        >
          <i className='bx bx-dislike' ></i>
        </span>
        <span className={styles.counter}>{el.dislike}</span>
      </div>

    </section>
  )
}
