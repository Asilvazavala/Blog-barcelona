import ContentLoader from 'react-content-loader'

export const SkeletonLoaderBlog = () => {

  const skeletons = []
  for (let i = 0; i < 3; i++) {
    skeletons.push(
      <div key={i}>
        <ContentLoader 
          speed={1.2}
          interval={0.25}
          width={650}
          height={670}
          viewBox="0 0 650 670"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="5" rx="4" ry="4" width="650" height="30" />
          <rect x="0" y="60" rx="3" ry="3" width="350" height="15" />
          <rect x="0" y="100" rx="10" ry="10" width="650" height="390" />
          <rect x="0" y="511" rx="3" ry="3" width="650" height="15" />
          <rect x="0" y="536" rx="3" ry="3" width="650" height="15" />
          <rect x="0" y="561" rx="3" ry="3" width="650" height="15" />
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
