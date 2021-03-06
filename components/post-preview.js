import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-3">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3 className="mb-1 text-2xl leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-2 text-xs italic">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-md leading-relaxed">{excerpt}</p>
    </div>
  )
}
