import styles from './Hero.module.css'
import { NavLink } from 'react-router-dom'
import { usePublications } from '../../hooks/usePublications'
import { useFunction } from '../../hooks/useFunction'
import { SLHero } from '../SkeletonLoader/SLHero'
import { BlogMostViewed } from '../BlogMostViewed/BlogMostViewed'

export const Hero = () => {
  const { publications } = usePublications()
  const { goTop } = useFunction()

  return (
    <section className={styles.mainContainer}>
      <main className={styles.heroPub}>
        {
        publications.length > 0 
          ? (
              <ul className={styles.mainPublication} key={publications[0].id}>
                <li>
                  <div>
                    <NavLink onClick={goTop} to={`/blog/${publications[0].id}`}>
                      <img 
                        className={styles.imgBlog} 
                        src={publications[0].image} 
                        alt={publications[0].name} />
                    </NavLink>
                  </div>
                  <div className={styles.containerTextBlog}>
                    <NavLink onClick={goTop} style={{ textDecoration: 'none' }} to={`/blog/${publications[0].id}`}>
                      <h2>{publications[0].title}</h2>
                    </NavLink>
                  </div>
                </li>
              </ul>
            )
          : <SLHero />
        }
      </main>

      <section>
        <BlogMostViewed />
      </section>
    </section>
  )
}
