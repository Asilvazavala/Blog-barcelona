import styles from './BlogCategories.module.css'
import { usePublications } from '../../hooks/usePublications'
import { useDispatch } from 'react-redux'
import { searchPublicationByCategory } from '../../redux/actions'
import { NavLink } from 'react-router-dom'
export const BlogCategories = () => {
  const { category } = usePublications()
  const dispatch = useDispatch()

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  const handleCategory = (category) => {
    dispatch(searchPublicationByCategory(category))
    goTop()
  }

  return (
    <div className={styles.rightMenu}>
      <h2 className={styles.categories}>Categorías</h2>
        {category && category.map(el => {
          return (
            <ul key={el.id}>
              <li className={styles.rightMenuItem}>
                <div className={styles.rightMenuItemText}>
                  <NavLink to={`/blog?category=${el.category}`} style={{ 'textDecoration': 'none'}}><h3 onClick={() => handleCategory(el.category)}>{el.category}</h3></NavLink>
                </div>
              </li>
            </ul>
          )
        })}
    </div>
  )
}
