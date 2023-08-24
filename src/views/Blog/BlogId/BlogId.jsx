import { BlogCategories } from '../../../components/BlogCategories/BlogCategories'
import { BlogMostViewed } from '../../../components/BlogMostViewed/BlogMostViewed'
import styles from '../Blog.module.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-scroll';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { usePublications } from '../../../hooks/usePublications'
import { searchPublicationById, loadPublication } from '../../../redux/actions'
import { Comments } from '../../../components/Comments/Comments'
import { SLBlog } from '../../../components/SkeletonLoader/SLBlog';

export const BlogId = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { detailPublication } = usePublications()

  useEffect(() => {
    dispatch(loadPublication());
    dispatch(searchPublicationById(id));
  },[dispatch, id]);

  return (
    <section className={styles.containerBlog}>
      <main className={styles.main}>
        {detailPublication.length > 0 
          ? detailPublication.map(el => {
            return (
              <ul key={el.id}>
                <li>
                  <h1 className={styles.titleDetail}>{el.title}</h1>
                  <p className={styles.mainDateAuthor}>{el.date} por {el.author} - #{el.category} -
                    <Link className={styles.mainComment} activeClass="active" smooth={true}
                      offset={-70} duration={500} spy={true} to={'comments'}>Deja tu comentario
                    </Link> 
                  </p>
                  <img src={el.image} alt={el.title} />
                  <div className={styles.mainDescriptionId}>
                    {el.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}><br></br>{paragraph}</p>
                    ))}
                  </div>
                </li>
              </ul>
            ) 
          })
        : <SLBlog />
        }
        <div id='comments' className={styles.comments}>
          <Comments />
        </div>
      </main>

      {/* Menu lateral derecho */}
      <aside className={styles.rightMenu}>
        <BlogMostViewed />
        <BlogCategories />
      </aside>
    </section>
  )
}
