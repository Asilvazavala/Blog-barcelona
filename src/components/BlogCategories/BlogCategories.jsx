import styles from './BlogCategories.module.css'
import { usePublications } from '../../hooks/usePublications'
import { useDispatch } from 'react-redux'
import { searchPublicationByCategory } from '../../redux/actions'
import { NavLink } from 'react-router-dom'
import { useFunction } from '../../hooks/useFunction'
import { SkeletonLoaderCategories } from '../SkeletonLoader/SkeletonLoaderCategories'

export const BlogCategories = () => {
  const { category } = usePublications()
  const dispatch = useDispatch()
  const { goTop } = useFunction()

  const handleCategory = (category) => {
    dispatch(searchPublicationByCategory(category))
    goTop()
  }

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
            : <SkeletonLoaderCategories />
        }
    </div>
  )
}
