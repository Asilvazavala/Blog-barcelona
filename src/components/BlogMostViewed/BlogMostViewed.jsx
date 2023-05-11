import styles from './BlogMostViewed.module.css'
import { blogJson } from '../../views/Blog/blogJson'

export const BlogMostViewed = () => {
  return (
    <div className={styles.containerBlog}>
      <main className={styles.main}>
        <div className={styles.rightMenu}>
          <h2>Lo más visto</h2>
          {blogJson && blogJson.map(el => {
            return (
              <ul key={el.id}>
                <li className={styles.rightMenuItem}>
                  <img src={el.image} alt={el.name} />
                  <div className={styles.rightMenuItemText}>
                    <span>{el.date}</span>
                    <h3>{el.name}</h3>
                  </div>
                </li>
              </ul>
            )
          })}
        </div>
      </main>
    </div>
  )
}
