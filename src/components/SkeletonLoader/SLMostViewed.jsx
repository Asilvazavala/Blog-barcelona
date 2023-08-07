import ContentLoader from 'react-content-loader';
import { useNavBar } from '../../hooks/useNavBar';

export const SLMostViewed = () => {
  const { isSmallScreen } = useNavBar();

  const skeletons = []
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={isSmallScreen ? '85vw' : '30vw'}
          height={'18vh'}
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="0" rx="10" ry="10" width={isSmallScreen ? '30vw' : '12vw'} height={'15vh'} />
          <rect x={isSmallScreen ? "34vw" :"14vw"} y={'2vh'} rx="3" ry="3" width={isSmallScreen ? '30vw' : '8vw'} height={'2vh'} />
          <rect x={isSmallScreen ? "34vw" :"14vw"} y={'6vh'} rx="4" ry="4" width={isSmallScreen ? '80vw' : '15vw'} height={'3vh'} />
          <rect x={isSmallScreen ? "34vw" :"14vw"} y={'10vh'} rx="4" ry="4" width={isSmallScreen ? '80vw' : '15vw'} height={'3vh'} />
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
