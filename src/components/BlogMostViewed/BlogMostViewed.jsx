import styles from './BlogMostViewed.module.css'
import { usePublications } from '../../hooks/usePublications'
import { NavLink } from 'react-router-dom'
import { useFunction } from '../../hooks/useFunction'
import { SkeletonLoaderMostViewed } from '../SkeletonLoader/SkeletonLoaderMostViewed'

export const BlogMostViewed = () => {
  const { category } = usePublications()
  const { goTop } = useFunction()

  return (
    <div className={styles.containerBlog}>
      <main className={styles.main}>
        <div className={styles.rightMenu}>
          <h2>Lo más visto</h2>
          {
            category.length > 0
              ? category.slice(3,6).map(el => {
                return (
                  <ul key={el.id}>
                    <li className={styles.rightMenuItem}>
                    <img src={el.image} alt={el.title} />
                      <div className={styles.rightMenuItemText}>
                        <span>{el.date}</span>
                        <NavLink style={{ textDecoration: 'none' }} to={`/blog/${el.id}`}><h3 onClick={goTop}>{el.title}</h3></NavLink>
                      </div>
                    </li>
                  </ul>
                )
              })
              : <SkeletonLoaderMostViewed />
          }
        </div>
      </main>
    </div>
  )
}
