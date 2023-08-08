import { BlogHome } from '../../components/BlogHome/BlogHome';
import { FAQ } from '../../components/FAQ/FAQ';
import { Hero } from '../../components/Hero/Hero';
import { Slider } from '../../components/Slider/Slider';

export const Home = () => {
  return (
    <main>
      <Slider />
      <Hero />
      <BlogHome />
      <FAQ />
    </main>
  )
}
