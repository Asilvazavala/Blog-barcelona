import styles from './BlogMostViewed.module.css'
import { usePublications } from '../../hooks/usePublications'
import { NavLink } from 'react-router-dom'
import { useFunction } from '../../hooks/useFunction'
import { SLMostViewed } from '../SkeletonLoader/SLMostViewed'

export const BlogMostViewed = () => {
  const { category } = usePublications()
  const { goTop } = useFunction()

  return (
    <main className={styles.containerBlog}>
      <section className={styles.rightMenu}>
        <h2>Lo más visto</h2>
        {
          category.length > 0
            ? category.slice(3,6).map(el => {
              return (
                <ul key={el.id}>
                  <NavLink style={{ textDecoration: 'none' }} to={`/blog/${el.id}`}>
                    <li className={styles.rightMenuItem}>
                      <img src={el.image} alt={el.title} onClick={goTop} />
                      <div className={styles.rightMenuItemText}>
                        <span>{el.date}</span>
                        <h3 onClick={goTop}>{el.title}</h3>
                      </div>
                    </li>
                  </NavLink>
                </ul>
              )
            })
            : <SLMostViewed />
        }
      </section>
    </main>
  )
}
