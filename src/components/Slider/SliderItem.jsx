import styles from './Slider.module.css';

export const SliderItem = ({ firstTeam='Suiza', firstResult=1, secondTeam='España', secondResult=2 }) => {
  return (
    <main>
      <article className={styles.card}>
        <header className={styles.firstTeam}>
          <span>{firstTeam}</span>
          <span>{firstResult}</span>
        </header>

        <footer className={styles.secondTeam}>
          <span>{secondTeam}</span>
          <span>{secondResult}</span>
        </footer>

        <aside className={styles.finalized}>
          <i className='bx bxs-circle'></i>
          <span>FINALIZADO</span>
        </aside>
      </article>
    </main>
  )
}
