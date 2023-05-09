import { BlogCategories } from '../../components/BlogCategories/BlogCategories'
import { BlogMostViewed } from '../../components/BlogMostViewed/BlogMostViewed'
import styles from './Blog.module.css'
import { blogJson } from './blogJson'
import { NavLink } from 'react-router-dom'

export const Blog = () => {
  // const blogs2 = [
  //   {
  //     id: 1,
  //     image: Blog1,
  //     category: 'Saving',
  //     date: 'May 5, 2023',
  //     author: 'Antonio Silva',
  //     name: 'Save Regardless of Your Income',
  //     description: 'Have you ever wondered what the rich do to have money that the poor don´t? The answer is very simple, the rich spend less than they earn while the poor spend more than they have, the rich go into debt to invest in something that will generate more money (ASSETS) while the poor go into debt to being able to spend on things that will not generate anything for them (LIABILITIES). So what you should do to have more money is spend less than you earn, for this you are going to make a budget.'
  //   },
  //   {
  //     id: 2,
  //     image: Blog2,
  //     category: 'Controversy',
  //     date: 'May 6, 2023',
  //     author: 'Antonio Silva',
  //     name: 'Should I give up an inheritance?',
  //     description: 'There are those who have been forced to give up an inheritance due to the impossibility of facing the costs of accepting it and the possible debts of the deceased. What we cannot forget is that we cannot renounce or accept an inheritance until we are officially and legally declared heirs. Come on, let the will be opened and it is verified that we are such heirs.'
  //   },
  //   {
  //     id: 3,
  //     image: Blog3,
  //     category: 'Business',
  //     date: 'May 7, 2023',
  //     author: 'Antonio Silva',
  //     name: '5 mistakes to avoid in your business',
  //     description: 'Have you ever stopped to think why so many people with good business ideas don´t put it together? Do you know how to manage your company´s finances? Well, here we are going to... explain the 5 mistakes you should not make with your business. 75% of the ventures close after the second year of operation. The reasons are varied: the bad choice of the project; mismanagement of collaborators; having too much inventory that doesn´t go out. However, all this translates to: there is no good cash management.'
  //   }
  // ]

  return (
    <section className={styles.containerBlog}>
      <main className={styles.main}>
        {blogJson && blogJson.map(el => {
          return (
            <ul key={el.id}>
              <li>
                <h1>{el.name}</h1>
                <p className={styles.mainDateAuthor}>{el.date} by {el.author} - <NavLink className={styles.mainComment} to='/blog'>Leave a comment</NavLink></p>
                <img src={el.image} alt={el.name} />
                <p className={styles.mainDescription}>{el.description}<NavLink style={{ textDecoration: 'none' }} to='/blog'><span>Read more</span></NavLink></p>
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
