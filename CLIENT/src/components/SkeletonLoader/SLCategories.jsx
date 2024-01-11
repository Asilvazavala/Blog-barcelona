import ContentLoader from 'react-content-loader'
import { useNavBar } from '../../hooks/useNavBar';

export const SLCategories = () => {
  const { isSmallScreen } = useNavBar();

  const skeletons = []
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={isSmallScreen ? '85vw' : '25vw'}
          height={'7vh'}
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y={'1vh'} rx="3" ry="3" width={isSmallScreen ? '85vw' : '25vw'} height={'4vh'} />
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
