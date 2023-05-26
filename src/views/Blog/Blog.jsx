import { BlogCategories } from '../../components/BlogCategories/BlogCategories'
import { BlogMostViewed } from '../../components/BlogMostViewed/BlogMostViewed'
import styles from './Blog.module.css'
import { NavLink } from 'react-router-dom'
import { usePublications } from '../../hooks/usePublications'

export const Blog = () => {
  const { publications } = usePublications()

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (
    <section className={styles.containerBlog}>
      <main className={styles.main}>
        {publications && publications.map(el => {
          return (
            <ul key={el.id}>
              <li>
                <NavLink onClick={goTop} className={styles.mainComment} to={`/blog/${el.id}`}><h1 className={styles.titlePub}>{el.title}</h1></NavLink>
                <p className={styles.mainDateAuthor}>{el.date} por {el.author} - #{el.category}</p>
                <img src={el.image} alt={el.title} />
                <p className={styles.mainDescription}>{el.description.slice(0, 200) + '...'}<NavLink onClick={goTop} style={{ textDecoration: 'none' }} to={`/blog/${el.id}`}><span>Leer más</span></NavLink></p>
              </li>
            </ul>
          )
        })}
      </main>

      {/* Menu lateral derecho */}
      <aside className={styles.rightMenu}>
        <BlogMostViewed />
        <BlogCategories />
      </aside>
    </section>
  )
}
