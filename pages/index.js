import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import Card from '../components/card'
import Content from '../components/content'
import Menu from 'components/menu'
import {useRouter} from 'next/router'
import { useEffect } from 'react'

export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      // here is where I need to use the event.preventDefault();
      console.log("HASH CHANGE", url)
    };

    router.events.on('hashChangeStart', handleRouteChange);
    return () => {
      router.events.off('hashChangeStart', handleRouteChange);
    };
  }, []);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>GrowUp | A Kate Johnson Blog</title>
        </Head>
        <Text/>
  
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
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

const Text = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus justo, ultricies eget dui ut, ullamcorper vehicula velit. Sed nulla dolor, euismod vitae dictum et, aliquam a massa. Pellentesque leo mi, molestie ac molestie nec, consectetur in nisi. Donec augue dui, egestas eu dui at, semper sagittis urna. Sed viverra vehicula pharetra. Praesent a turpis efficitur, rhoncus magna rhoncus, faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in dolor vel odio ultrices fringilla in egestas massa. Aenean id tempor neque. Cras massa dolor, ullamcorper rutrum elit a, finibus efficitur ipsum. Aliquam erat volutpat. Etiam a placerat quam, eu facilisis eros.

Sed iaculis efficitur nisi id faucibus. Aliquam erat volutpat. Vivamus aliquet nunc ligula, a eleifend nulla tincidunt ac. In hac habitasse platea dictumst. Integer scelerisque sagittis nisl in facilisis. Duis justo velit, sodales et sapien vitae, congue aliquam ligula. Pellentesque eu sem sit amet augue dapibus semper sit amet facilisis velit. Morbi scelerisque dui finibus mi egestas accumsan. Praesent imperdiet volutpat turpis non egestas. Nullam eleifend imperdiet mollis. Pellentesque nec urna non sem vulputate tincidunt. Ut id rutrum ipsum. Nulla vitae ex eu orci tincidunt tempor. Maecenas mi nulla, tincidunt placerat hendrerit vestibulum, congue ut massa. Ut erat ante, varius ut magna sit amet, tempus varius diam.

Pellentesque molestie faucibus est. Donec non libero ante. In hac habitasse platea dictumst. Nunc eu sagittis mi. Etiam vitae massa dolor. Proin id tristique urna. Aliquam vel semper nibh. Donec porttitor dignissim justo, a tempus eros pharetra in. Quisque id ipsum ligula.

Sed a tellus eu mauris sagittis blandit non quis mauris. Fusce non fermentum lectus, vitae suscipit quam. Maecenas in molestie eros. Ut faucibus blandit nunc, auctor aliquet ex sodales nec. Praesent gravida tortor sed rhoncus accumsan. Ut convallis consequat enim eget suscipit. Proin at eros condimentum, porta ipsum sit amet, dignissim mi. Proin a mollis leo, id luctus justo. Proin laoreet, metus id vestibulum sodales, orci odio aliquet magna, vel rhoncus purus lectus finibus orci. Sed vel sagittis odio. Cras maximus finibus arcu. Morbi varius ligula blandit, tincidunt tellus eget, scelerisque elit. Curabitur ac ipsum risus.

Vivamus quis purus non ex ullamcorper imperdiet. Fusce cursus at dui id fermentum. Duis id enim vitae ex varius rhoncus vel nec lacus. Pellentesque augue nisl, molestie nec porta sed, porta non libero. Ut non diam ultrices, dapibus ex sit amet, hendrerit diam. Vestibulum a vestibulum lorem. Proin at ante odio.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus justo, ultricies eget dui ut, ullamcorper vehicula velit. Sed nulla dolor, euismod vitae dictum et, aliquam a massa. Pellentesque leo mi, molestie ac molestie nec, consectetur in nisi. Donec augue dui, egestas eu dui at, semper sagittis urna. Sed viverra vehicula pharetra. Praesent a turpis efficitur, rhoncus magna rhoncus, faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in dolor vel odio ultrices fringilla in egestas massa. Aenean id tempor neque. Cras massa dolor, ullamcorper rutrum elit a, finibus efficitur ipsum. Aliquam erat volutpat. Etiam a placerat quam, eu facilisis eros.

Sed iaculis efficitur nisi id faucibus. Aliquam erat volutpat. Vivamus aliquet nunc ligula, a eleifend nulla tincidunt ac. In hac habitasse platea dictumst. Integer scelerisque sagittis nisl in facilisis. Duis justo velit, sodales et sapien vitae, congue aliquam ligula. Pellentesque eu sem sit amet augue dapibus semper sit amet facilisis velit. Morbi scelerisque dui finibus mi egestas accumsan. Praesent imperdiet volutpat turpis non egestas. Nullam eleifend imperdiet mollis. Pellentesque nec urna non sem vulputate tincidunt. Ut id rutrum ipsum. Nulla vitae ex eu orci tincidunt tempor. Maecenas mi nulla, tincidunt placerat hendrerit vestibulum, congue ut massa. Ut erat ante, varius ut magna sit amet, tempus varius diam.

Pellentesque molestie faucibus est. Donec non libero ante. In hac habitasse platea dictumst. Nunc eu sagittis mi. Etiam vitae massa dolor. Proin id tristique urna. Aliquam vel semper nibh. Donec porttitor dignissim justo, a tempus eros pharetra in. Quisque id ipsum ligula.

Sed a tellus eu mauris sagittis blandit non quis mauris. Fusce non fermentum lectus, vitae suscipit quam. Maecenas in molestie eros. Ut faucibus blandit nunc, auctor aliquet ex sodales nec. Praesent gravida tortor sed rhoncus accumsan. Ut convallis consequat enim eget suscipit. Proin at eros condimentum, porta ipsum sit amet, dignissim mi. Proin a mollis leo, id luctus justo. Proin laoreet, metus id vestibulum sodales, orci odio aliquet magna, vel rhoncus purus lectus finibus orci. Sed vel sagittis odio. Cras maximus finibus arcu. Morbi varius ligula blandit, tincidunt tellus eget, scelerisque elit. Curabitur ac ipsum risus.

Vivamus quis purus non ex ullamcorper imperdiet. Fusce cursus at dui id fermentum. Duis id enim vitae ex varius rhoncus vel nec lacus. Pellentesque augue nisl, molestie nec porta sed, porta non libero. Ut non diam ultrices, dapibus ex sit amet, hendrerit diam. Vestibulum a vestibulum lorem. Proin at ante odio.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus justo, ultricies eget dui ut, ullamcorper vehicula velit. Sed nulla dolor, euismod vitae dictum et, aliquam a massa. Pellentesque leo mi, molestie ac molestie nec, consectetur in nisi. Donec augue dui, egestas eu dui at, semper sagittis urna. Sed viverra vehicula pharetra. Praesent a turpis efficitur, rhoncus magna rhoncus, faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in dolor vel odio ultrices fringilla in egestas massa. Aenean id tempor neque. Cras massa dolor, ullamcorper rutrum elit a, finibus efficitur ipsum. Aliquam erat volutpat. Etiam a placerat quam, eu facilisis eros.

Sed iaculis efficitur nisi id faucibus. Aliquam erat volutpat. Vivamus aliquet nunc ligula, a eleifend nulla tincidunt ac. In hac habitasse platea dictumst. Integer scelerisque sagittis nisl in facilisis. Duis justo velit, sodales et sapien vitae, congue aliquam ligula. Pellentesque eu sem sit amet augue dapibus semper sit amet facilisis velit. Morbi scelerisque dui finibus mi egestas accumsan. Praesent imperdiet volutpat turpis non egestas. Nullam eleifend imperdiet mollis. Pellentesque nec urna non sem vulputate tincidunt. Ut id rutrum ipsum. Nulla vitae ex eu orci tincidunt tempor. Maecenas mi nulla, tincidunt placerat hendrerit vestibulum, congue ut massa. Ut erat ante, varius ut magna sit amet, tempus varius diam.

Pellentesque molestie faucibus est. Donec non libero ante. In hac habitasse platea dictumst. Nunc eu sagittis mi. Etiam vitae massa dolor. Proin id tristique urna. Aliquam vel semper nibh. Donec porttitor dignissim justo, a tempus eros pharetra in. Quisque id ipsum ligula.

Sed a tellus eu mauris sagittis blandit non quis mauris. Fusce non fermentum lectus, vitae suscipit quam. Maecenas in molestie eros. Ut faucibus blandit nunc, auctor aliquet ex sodales nec. Praesent gravida tortor sed rhoncus accumsan. Ut convallis consequat enim eget suscipit. Proin at eros condimentum, porta ipsum sit amet, dignissim mi. Proin a mollis leo, id luctus justo. Proin laoreet, metus id vestibulum sodales, orci odio aliquet magna, vel rhoncus purus lectus finibus orci. Sed vel sagittis odio. Cras maximus finibus arcu. Morbi varius ligula blandit, tincidunt tellus eget, scelerisque elit. Curabitur ac ipsum risus.

Vivamus quis purus non ex ullamcorper imperdiet. Fusce cursus at dui id fermentum. Duis id enim vitae ex varius rhoncus vel nec lacus. Pellentesque augue nisl, molestie nec porta sed, porta non libero. Ut non diam ultrices, dapibus ex sit amet, hendrerit diam. Vestibulum a vestibulum lorem. Proin at ante odio.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus justo, ultricies eget dui ut, ullamcorper vehicula velit. Sed nulla dolor, euismod vitae dictum et, aliquam a massa. Pellentesque leo mi, molestie ac molestie nec, consectetur in nisi. Donec augue dui, egestas eu dui at, semper sagittis urna. Sed viverra vehicula pharetra. Praesent a turpis efficitur, rhoncus magna rhoncus, faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in dolor vel odio ultrices fringilla in egestas massa. Aenean id tempor neque. Cras massa dolor, ullamcorper rutrum elit a, finibus efficitur ipsum. Aliquam erat volutpat. Etiam a placerat quam, eu facilisis eros.

Sed iaculis efficitur nisi id faucibus. Aliquam erat volutpat. Vivamus aliquet nunc ligula, a eleifend nulla tincidunt ac. In hac habitasse platea dictumst. Integer scelerisque sagittis nisl in facilisis. Duis justo velit, sodales et sapien vitae, congue aliquam ligula. Pellentesque eu sem sit amet augue dapibus semper sit amet facilisis velit. Morbi scelerisque dui finibus mi egestas accumsan. Praesent imperdiet volutpat turpis non egestas. Nullam eleifend imperdiet mollis. Pellentesque nec urna non sem vulputate tincidunt. Ut id rutrum ipsum. Nulla vitae ex eu orci tincidunt tempor. Maecenas mi nulla, tincidunt placerat hendrerit vestibulum, congue ut massa. Ut erat ante, varius ut magna sit amet, tempus varius diam.

Pellentesque molestie faucibus est. Donec non libero ante. In hac habitasse platea dictumst. Nunc eu sagittis mi. Etiam vitae massa dolor. Proin id tristique urna. Aliquam vel semper nibh. Donec porttitor dignissim justo, a tempus eros pharetra in. Quisque id ipsum ligula.

Sed a tellus eu mauris sagittis blandit non quis mauris. Fusce non fermentum lectus, vitae suscipit quam. Maecenas in molestie eros. Ut faucibus blandit nunc, auctor aliquet ex sodales nec. Praesent gravida tortor sed rhoncus accumsan. Ut convallis consequat enim eget suscipit. Proin at eros condimentum, porta ipsum sit amet, dignissim mi. Proin a mollis leo, id luctus justo. Proin laoreet, metus id vestibulum sodales, orci odio aliquet magna, vel rhoncus purus lectus finibus orci. Sed vel sagittis odio. Cras maximus finibus arcu. Morbi varius ligula blandit, tincidunt tellus eget, scelerisque elit. Curabitur ac ipsum risus.

Vivamus quis purus non ex ullamcorper imperdiet. Fusce cursus at dui id fermentum. Duis id enim vitae ex varius rhoncus vel nec lacus. Pellentesque augue nisl, molestie nec porta sed, porta non libero. Ut non diam ultrices, dapibus ex sit amet, hendrerit diam. Vestibulum a vestibulum lorem. Proin at ante odio.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus justo, ultricies eget dui ut, ullamcorper vehicula velit. Sed nulla dolor, euismod vitae dictum et, aliquam a massa. Pellentesque leo mi, molestie ac molestie nec, consectetur in nisi. Donec augue dui, egestas eu dui at, semper sagittis urna. Sed viverra vehicula pharetra. Praesent a turpis efficitur, rhoncus magna rhoncus, faucibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in dolor vel odio ultrices fringilla in egestas massa. Aenean id tempor neque. Cras massa dolor, ullamcorper rutrum elit a, finibus efficitur ipsum. Aliquam erat volutpat. Etiam a placerat quam, eu facilisis eros.

Sed iaculis efficitur nisi id faucibus. Aliquam erat volutpat. Vivamus aliquet nunc ligula, a eleifend nulla tincidunt ac. In hac habitasse platea dictumst. Integer scelerisque sagittis nisl in facilisis. Duis justo velit, sodales et sapien vitae, congue aliquam ligula. Pellentesque eu sem sit amet augue dapibus semper sit amet facilisis velit. Morbi scelerisque dui finibus mi egestas accumsan. Praesent imperdiet volutpat turpis non egestas. Nullam eleifend imperdiet mollis. Pellentesque nec urna non sem vulputate tincidunt. Ut id rutrum ipsum. Nulla vitae ex eu orci tincidunt tempor. Maecenas mi nulla, tincidunt placerat hendrerit vestibulum, congue ut massa. Ut erat ante, varius ut magna sit amet, tempus varius diam.

Pellentesque molestie faucibus est. Donec non libero ante. In hac habitasse platea dictumst. Nunc eu sagittis mi. Etiam vitae massa dolor. Proin id tristique urna. Aliquam vel semper nibh. Donec porttitor dignissim justo, a tempus eros pharetra in. Quisque id ipsum ligula.

Sed a tellus eu mauris sagittis blandit non quis mauris. Fusce non fermentum lectus, vitae suscipit quam. Maecenas in molestie eros. Ut faucibus blandit nunc, auctor aliquet ex sodales nec. Praesent gravida tortor sed rhoncus accumsan. Ut convallis consequat enim eget suscipit. Proin at eros condimentum, porta ipsum sit amet, dignissim mi. Proin a mollis leo, id luctus justo. Proin laoreet, metus id vestibulum sodales, orci odio aliquet magna, vel rhoncus purus lectus finibus orci. Sed vel sagittis odio. Cras maximus finibus arcu. Morbi varius ligula blandit, tincidunt tellus eget, scelerisque elit. Curabitur ac ipsum risus.

Vivamus quis purus non ex ullamcorper imperdiet. Fusce cursus at dui id fermentum. Duis id enim vitae ex varius rhoncus vel nec lacus. Pellentesque augue nisl, molestie nec porta sed, porta non libero. Ut non diam ultrices, dapibus ex sit amet, hendrerit diam. Vestibulum a vestibulum lorem. Proin at ante odio.
  </p>
)