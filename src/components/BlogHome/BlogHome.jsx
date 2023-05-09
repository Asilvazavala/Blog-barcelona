import styles from './BlogHome.module.css'
import Blog1 from '../../assets/images/home/blog1.png'
import Blog2 from '../../assets/images/home/blog2.jpg'
import Blog3 from '../../assets/images/home/blog3.jpg'
import { NavLink } from 'react-router-dom'

export const BlogHome = () => {
  const blogs = [
    {
      id: 1,
      image: Blog1,
      name: 'Save regardless of your income',
      description: 'Have you ever wondered what the rich do to have money? The answer is very simple...'
    },
    {
      id: 2,
      image: Blog2,
      name: 'Should I give up an inheritance?',
      description: 'There are those who have been forced to give up an inheritance due to the impossibility of...'
    },
    {
      id: 3,
      image: Blog3,
      name: '5 mistakes to avoid in your business',
      description: 'Have you ever stopped to think why so many people with good business ideas don´t put it together? Well, here we are going to explain...'
    }
  ]

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (
    <section className={styles.containerBlogHome}>
      <div className={styles.containerTitle}>
        <span>What do you want to learn?</span>
      </div>
      <main>
        {blogs && blogs.map(el => {
          return (
            <ul key={el.id}>
              <li>
                <div>
                  <NavLink onClick={goTop} to='/blog'>
                    <img className={styles.imgBlog} src={el.image} alt={el.name} />
                  </NavLink>
                </div>
                <div className={styles.containerTextBlog}>
                  <NavLink onClick={goTop} style={{ textDecoration: 'none' }} to='/blog'>
                    <h2>{el.name}</h2>
                  </NavLink>
                  <p>{el.description}<NavLink style={{ textDecoration: 'none' }} to='/blog'><span>Read more</span></NavLink></p>
                </div>
              </li>
            </ul>
          )
        })}
      </main>
        <div className={styles.containerButtonShowMore}>
          <NavLink onClick={goTop} to='/blog'>
            <button className={styles.buttonShowMore}>See more</button>
          </NavLink>
        </div>
    </section>
  )
}
