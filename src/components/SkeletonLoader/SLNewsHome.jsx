import ContentLoader from 'react-content-loader'
import { useNavBar } from '../../hooks/useNavBar';

export const SLNewsHome = () => {
  const { isSmallScreen } = useNavBar();

  const skeletons = []
  for (let i = 0; i < 6; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={isSmallScreen ? '40vw' : '30vw'}
          height={isSmallScreen ? '30vh' : '60vh'}
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="0" rx="10" ry="10" width={isSmallScreen ? "40vw" : "28vw"} height={isSmallScreen ? "20vh" : "35vh"} />
          <rect x="0" y={isSmallScreen ? "21vh" : '39vh'} rx="4" ry="4" width={isSmallScreen ? "25vw" : "20vw"} height={isSmallScreen ? "3vh" : "5vh"} />
          <rect x="0" y={isSmallScreen ? "25vh" : '47vh'} rx="3" ry="3" width={isSmallScreen ? "35vw" : "28vw"} height={isSmallScreen ? "1vh" : "2vh"} />
          <rect x="0" y={isSmallScreen ? "27vh" : '50vh'} rx="3" ry="3" width={isSmallScreen ? "30vw" : "24vw"} height={isSmallScreen ? "1vh" : "2vh"} />
          <rect x="0" y={isSmallScreen ? "29vh" : '53vh'} rx="3" ry="3" width={isSmallScreen ? "25vw" : "20vw"} height={isSmallScreen ? "1vh" : "2vh"} />
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
