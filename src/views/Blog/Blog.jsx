import { BlogCategories } from '../../components/BlogCategories/BlogCategories'
import { BlogMostViewed } from '../../components/BlogMostViewed/BlogMostViewed'
import styles from './Blog.module.css'
import { usePublications } from '../../hooks/usePublications'
import { useFunction } from '../../hooks/useFunction'
import { Paginado } from '../../components/Paginado/Paginado'
import { SLBlog } from '../../components/SkeletonLoader/SLBlog'

export const Blog = () => {
  const { publications } = usePublications()
  const { totalItems, currentPage, handlePrev, handleNext } = Paginado()
  const { goTop, NavLink } = useFunction()

  return (
    <section className={styles.containerBlog}>
      <main className={styles.main}>
        {window.location.search && <h2><u>Resultados de: #{window.location.search.includes('%') ? 'Fútbol Mundial' : window.location.search.slice(10,20)}</u></h2>}

        {
          publications.length > 0
            ? publications.map(el => {
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
            })
            : <SLBlog />
        }

        { window.location.href === 'http://localhost:3002/blog' || window.location.href === 'https://blog-barcelona.vercel.app/'&&
          <div className={styles.paginado}>
            <h3>Página {currentPage} de {totalItems}</h3>
            <div className={styles.buttonsPaginado}>
              <i onClick={handlePrev} className='bx bxs-left-arrow-circle' title='página anterior'></i>
              <i onClick={handleNext} className='bx bxs-right-arrow-circle' title='página siguiente'></i>
            </div>
          </div>
        }
      </main>

      {/* Menu lateral derecho */}
      <aside className={styles.rightMenu}>
        <BlogMostViewed />
        <BlogCategories />
      </aside>
    </section>
  )
}
