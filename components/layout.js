import Meta from 'components/meta'
import Menu from 'components/menu'
import Card from 'components/card'
import Content from 'components/content'
import Leaves from './leaves'

const MenuItems = [
  {
    title: 'About',
    href: '/'
  },
  {
    title: 'Resume',
    href: '/resume'
  },
  {
    title: 'Blog',
    href: '/blog'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className='flex justify-center items-start h-full w-full bg-gradient-to-r overflow-x-hidden xl:overflow-hidden background from-accent-1 to-accent-2 overflow-scroll'>
        <ul className='leaves'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      {/* <Leaves/> */}
        <div className='container flex flex-row items-start flex-wrap xl:flex-nowrap xl:self-center'>
          <Menu items={MenuItems}/>
          <Card name='Kate Acharte' occupation='Landscape Designer' location='Salt Lake City, UT'/>
            <Content>
              {children}
            </Content>      
        </div>
      </div>
    </>
  )
}

export default Layout