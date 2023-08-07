import styles from './Comments.module.css'
import { useComments } from '../../hooks/useComments'
import { useFunction } from '../../hooks/useFunction'
import { CreateComment } from './CreateComment/CreateComment'
import { LikeDislikeComment } from './LikeDislikeComment/LikeDislikeComment'
import { DeleteComment } from './DeleteComment/DeleteComment'
import { UpdateComment } from './UpdateComment/UpdateComment'

export const Comments = () => {
  const { ToastContainer } = useFunction()

  const { 
    comments, 
    id, 
    isAuthenticated,
  } = useComments()

  return (
    <section className={styles.comments}>
      <CreateComment />
      <main className={styles.usersComments}>
        <h2>Comentarios</h2>
        <ul>
        {
          comments.length > 0 && comments?.map(el => {
            return (
              <li className={isAuthenticated && id === el.publicationId ? '' : styles.hide} key={el.id}>
                <header>
                  <img src={el.image} alt={el.username} title={el.username} />
                  <span>{el.username}</span>
                </header>

                <div className={styles.fecha}>
                  <span>{el.createdAt.slice(0, 10) + ' — ' + el.createdAt.slice(11, 16)}</span>
                </div>

                <LikeDislikeComment el={el}/>
                <DeleteComment el={el} />
                <UpdateComment el={el} />
              </li>
            )
          })
        }
        </ul>
        <ToastContainer />
      </main>
    </section>
  )
}
