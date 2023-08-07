import ContentLoader from 'react-content-loader';
import { useNavBar } from '../../hooks/useNavBar';

export const SLHero = () => {
  const { isSmallScreen } = useNavBar();

  const skeletons = []
  for (let i = 0; i < 1; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader
          width={isSmallScreen ? '85vw' : '52vw'}
          height={'66vh'}
          speed={1.2}
          interval={0.25}
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect width={isSmallScreen ? '85vw' : '52vw'} height={'57vh'} rx="10" ry="10" />
          <rect width={isSmallScreen ? '85vw' : '52vw'} height={'5vh'} rx="5" ry="5" y={'60vh'} />
        </ContentLoader>
      </div>
    )
  }

  return (
    <section>
      <main>
        { 
          skeletons
        }
      </main>
    </section>
  )
}
