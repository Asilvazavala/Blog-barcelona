import ContentLoader, { Facebook } from 'react-content-loader'

export const SkeletonLoader = () => {

  const skeletons = []
  for (let i = 0; i < 6; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={450}
          height={350}
          viewBox="0 0 450 350"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="0" rx="10" ry="10" width="388" height="217" />
          <rect x="0" y="237" rx="4" ry="4" width="388" height="30" />
          <rect x="0" y="292" rx="3" ry="3" width="388" height="15" />
          <rect x="0" y="312" rx="3" ry="3" width="388" height="15" />
          <rect x="0" y="332" rx="3" ry="3" width="388" height="15" />
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
