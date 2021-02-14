import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import HeroPost from 'components/hero-post'
import MoreStories from 'components/more-stories'

export default function Blog({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Kate Acharte</title>
        </Head>
        <h1 className='tracking-tighter text-5xl font-bold mb-8'>My Blog</h1>
        {heroPost && (
        <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
        />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}