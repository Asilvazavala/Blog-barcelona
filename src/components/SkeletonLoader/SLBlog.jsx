import ContentLoader from 'react-content-loader'
import { useNavBar } from '../../hooks/useNavBar';

export const SLBlog = () => {
  const { isSmallScreen } = useNavBar();

  const skeletons = []
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          s3eed={1.3}
          interval={0.25}
          width={isSmallScreen ? '85vw' : '50vw'}
          height={isSmallScreen ? '75vh' : '110vh'}
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y={isSmallScreen ? '2vh': '2vh'} rx="4" ry="4" width={isSmallScreen ? '70vw' : '40vw'} height={isSmallScreen ? "4vh" : "5vh"} />
          <rect x="0" y={isSmallScreen ? '8vh': '10vh'} rx="3" ry="3" width={isSmallScreen ? '55vw' : '30vw'} height={isSmallScreen ? "2vh ": "3vh"} />
          <rect x="0" y={isSmallScreen ? '12vh': '16vh'} rx="10" ry="10" width={isSmallScreen ? '85vw' : '50vw'} height={isSmallScreen ? "40vh ": "64vh"} />
          <rect x="0" y={isSmallScreen ? '54vh': '83vh'} rx="3" ry="3" width={isSmallScreen ? '85vw' : '50vw'} height={isSmallScreen ? "2vh ": "3vh"} />
          <rect x="0" y={isSmallScreen ? '57vh': '88vh'} rx="3" ry="3" width={isSmallScreen ? '70vw' : '40vw'} height={isSmallScreen ? "2vh ": "3vh"} />
          <rect x="0" y={isSmallScreen ? '60vh': '93vh'} rx="3" ry="3" width={isSmallScreen ? '55vw' : '30vw'} height={isSmallScreen ? "2vh ": "3vh"} />
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
