import styles from './BlogHome.module.css'
import { NavLink } from 'react-router-dom'
import { usePublications } from '../../hooks/usePublications'
import { useFunction } from '../../hooks/useFunction'
import { SLNewsHome } from '../SkeletonLoader/SLNewsHome'

export const BlogHome = () => {
  const { publications } = usePublications()
  const { goTop } = useFunction()

  return (
    <section className={styles.containerBlogHome}>
      <header className={styles.containerTitle}>
        <span>Noticias</span>
      </header>
      <main>
        {
        publications.length > 0 
          ? publications.map(el => {
            return (
              <ul key={el.id}>
                <li>
                  <div>
                    <NavLink onClick={goTop} to={`/blog/${el.id}`}>
                      <img className={styles.imgBlog} src={el.image} alt={el.name} />
                    </NavLink>
                  </div>
                  <div className={styles.containerTextBlog}>
                    <NavLink onClick={goTop} style={{ textDecoration: 'none' }} to={`/blog/${el.id}`}>
                      <h2>{el.title}</h2>
                    </NavLink>
                    <p>{el.description.slice(0, 100) + '...'}<NavLink onClick={goTop} style={{ textDecoration: 'none' }} to={`/blog/${el.id}`}><span>Leer más</span></NavLink></p>
                  </div>
                </li>
              </ul>
            )
          })
          : <SLNewsHome />
        }
      </main>

        <footer className={styles.containerButtonShowMore}>
          <NavLink onClick={goTop} to='/blog'>
            <button className={styles.buttonShowMore}>Ver más</button>
          </NavLink>
        </footer>
    </section>
  )
}
