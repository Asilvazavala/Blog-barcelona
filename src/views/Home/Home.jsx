import { BlogHome } from '../../components/BlogHome/BlogHome';
import { FAQ } from '../../components/FAQ/FAQ';
import { Hero } from '../../components/Hero/Hero';

export const Home = () => {
  return (
    <div>
      <Hero />
      <BlogHome />
      <FAQ />
    </div>
  )
}
