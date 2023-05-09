import { HomeHero } from '../../components/HomeHero/HomeHero'
import { BlogHome } from '../../components/BlogHome/BlogHome'
import { FAQ } from '../../components/FAQ/FAQ'

export const Home = () => {
  return (
    <div>
      <HomeHero />
      <BlogHome />
      <FAQ />
    </div>
  )
}
