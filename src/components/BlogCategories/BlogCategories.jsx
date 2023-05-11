import styles from './BlogCategories.module.css'
import { blogJson } from '../../views/Blog/blogJson'

export const BlogCategories = () => {
  return (
    <div className={styles.rightMenu}>
      <h2 className={styles.categories}>Categorías</h2>
        {blogJson && blogJson.map(el => {
          return (
            <ul key={el.id}>
              <li className={styles.rightMenuItem}>
                <div className={styles.rightMenuItemText}>
                  <h3>{el.category}</h3>
                </div>
              </li>
            </ul>
          )
        })}
    </div>
  )
}
