import Link from 'next/link'

const withLink = (href, header) => {
  if(!href) return header
  else return (
    <Link href={href}>
      {header}
    </Link>
  )
}

export default function Header({href=false, children}) {
  const element = Link ? 'a' : 'h1'
  const header = (
    <element href={href}>
      {children}
    </element>
  )

  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 border-b">
      {
        withLink(href, header)
      }
    </h2>
  )
}
