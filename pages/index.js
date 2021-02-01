import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import Header from 'components/header'
import MoreStories from 'components/more-stories'


export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About | Kate Acharte</title>
        </Head>
        <Header>About Me</Header>
        <p>
          Kate Acharte is a Landscape Designer who graduated from X and lives in Utah.
        </p> 

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