import styles from './BlogCategories.module.css'
import { usePublications } from '../../hooks/usePublications'
import { NavLink } from 'react-router-dom'
import { SLCategories } from '../SkeletonLoader/SLCategories'

export const BlogCategories = () => {
  const { category, handleCategory } = usePublications()

  return (
    <div className={styles.rightMenu}>
      <h2 className={styles.categories}>Categorías</h2>
        {
          category.length > 0
            ? category.slice(0,3).map(el => {
              return (
                <ul key={el.id}>
                  <li className={styles.rightMenuItem}>
                    <div className={styles.rightMenuItemText}>
                      <NavLink to={`/blog?category=${el.category}`} style={{ 'textDecoration': 'none'}}><h3 onClick={() => handleCategory(el.category)}>{el.category}</h3></NavLink>
                    </div>
                  </li>
                </ul>
              )
            })
            : <SLCategories />
        }
    </div>
  )
}
