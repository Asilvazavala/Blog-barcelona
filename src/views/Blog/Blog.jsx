import { BlogCategories } from '../../components/BlogCategories/BlogCategories'
import { BlogMostViewed } from '../../components/BlogMostViewed/BlogMostViewed'
import styles from './Blog.module.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPublications } from '../../redux/actions'

export const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPublications())
  }, [dispatch])

  const publications = useSelector(state => state.publications)

  return (
    <section className={styles.containerBlog}>
      <main className={styles.main}>
        {publications && publications.map(el => {
          return (
            <ul key={el.id}>
              <li>
                <h1>{el.title}</h1>
                <p className={styles.mainDateAuthor}>{el.date} por {el.author} - <NavLink className={styles.mainComment} to='/blog'>Deja tu comentario</NavLink></p>
                <img src={el.image} alt={el.title} />
                <p className={styles.mainDescription}>{el.description}<NavLink style={{ textDecoration: 'none' }} to='/blog'><span>Leer más</span></NavLink></p>
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
