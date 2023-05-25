import styles from './BlogHome.module.css'
import Blog1 from '../../assets/images/home/blog1.webp'
import Blog2 from '../../assets/images/home/blog2.webp'
import Blog3 from '../../assets/images/home/blog3.webp'
import { NavLink } from 'react-router-dom'

export const BlogHome = () => {
  const blogs = [
    {
      id: 1,
      image: Blog1,
      name: 'El emotivo adiós de Sergio Busquets',
      description: 'El capitán del Barça anunció su marcha del club azulgrana a final de curso, poniendo fin a una etapa de 15 temporadas llena de éxitos...'
    },
    {
      id: 2,
      image: Blog2,
      name: 'Zubimendi sigue siendo la prioridad',
      description: 'Se mantiene como el que más gusta a Xavi como recambio de Busquets pese a que supondría la inversión más alta a nivel de traspaso por delante de...'
    },
    {
      id: 3,
      image: Blog3,
      name: 'El duelo entre Ancelotti y Guardiola',
      description: 'Carlo Ancelotti y Pep Guardiola protagonizaron una batalla táctica en el duelo jugado en el Bernabéu. El entrenador del Real Madrid tenía claro que su equipo debía...'
    }
  ]

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (
    <section className={styles.containerBlogHome}>
      <div className={styles.containerTitle}>
        <span>Noticias de último momento</span>
      </div>
      <main>
        {blogs && blogs.map(el => {
          return (
            <ul key={el.id}>
              <li>
                <div>
                  <NavLink onClick={goTop} to='/blog'>
                    <img className={styles.imgBlog} src={el.image} alt={el.name} />
                  </NavLink>
                </div>
                <div className={styles.containerTextBlog}>
                  <NavLink onClick={goTop} style={{ textDecoration: 'none' }} to='/blog'>
                    <h2>{el.name}</h2>
                  </NavLink>
                  <p>{el.description}<NavLink onClick={goTop} style={{ textDecoration: 'none' }} to='/blog'><span>Leer más</span></NavLink></p>
                </div>
              </li>
            </ul>
          )
        })}
      </main>
        <div className={styles.containerButtonShowMore}>
          <NavLink onClick={goTop} to='/blog'>
            <button className={styles.buttonShowMore}>Ver más</button>
          </NavLink>
        </div>
    </section>
  )
}
