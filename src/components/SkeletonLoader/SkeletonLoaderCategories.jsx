import ContentLoader from 'react-content-loader'

export const SkeletonLoaderCategories = () => {

  const skeletons = []
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={350}
          height={40}
          viewBox="0 0 350 40"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="10" rx="3" ry="3" width="350" height="18" />
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
