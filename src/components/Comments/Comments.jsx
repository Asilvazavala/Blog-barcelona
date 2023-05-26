import styles from './Comments.module.css'

export const Comments = () => {
  return (
    <section className={styles.comments}>

      <h2>Comentarios</h2>
      <main className={styles.myComment}>
        <textarea name="" id=""></textarea>
        <button className={styles.buttonAddComment}>Agregar comentario</button>
      </main>

      <div className={styles.usersComments}>

      </div>
    </section>
  )
}
