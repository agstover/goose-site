import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import Header from 'components/header'
import MoreStories from 'components/more-stories'
import { Mountain as MountainIcon} from 'icons'


export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About | Kate Acharte</title>
        </Head>
        
          <h1 className='font-bold text-2xl mb-4'>I am a <span className='text-accent-4'>landscape designer</span> living in Salt Lake City, Utah.</h1>
          <div className='flex flex-row'>
            <img className='w-12 h-12 self-center align-middle mx-auto' src='/mountain.svg'></img>
            <p className='ml-4'>I love spaces that marry the majesty of nature with the comfort of human design and it's my mission to make these spaces available to all.</p>
          </div>
          <div className='my-8'>
            <h1 className='text-xl font-bold mb-2'>Skill 1</h1>
            <p>A bit about skill 1. It's a great skill. Bigly useful. You won't believe what this skill can do.</p>
          </div>
          <div className='my-8'>
            <h1 className='text-xl font-bold mb-2'>Skill 2</h1>
            <p>Have I told you about skill two? Wowee what a skill. I tell you. Doesn't get much better than this.</p>
          </div>
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