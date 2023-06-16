import ContentLoader from 'react-content-loader'

export const SkeletonLoaderMostViewed = () => {

  const skeletons = []
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={350}
          height={120}
          viewBox="0 0 350 120"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="100" />
          <rect x="170" y="10" rx="3" ry="3" width="100" height="9" />
          <rect x="170" y="35" rx="4" ry="4" width="180" height="18" />
          <rect x="170" y="60" rx="4" ry="4" width="180" height="18" />
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
