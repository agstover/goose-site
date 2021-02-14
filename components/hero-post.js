import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-4">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="mb-10 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 md:mb-14">
        <div>
          <h3 className="mb-4 text-2xl leading-tight lg:text-3xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </section>
  )
}
