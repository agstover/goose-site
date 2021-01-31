import Meta from 'components/meta'
import Menu from 'components/menu'
import Card from 'components/card'
import Content from 'components/content'
import Leaves from './leaves'

const MenuItems = [
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Resume',
    href: '#resume'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
]


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className='flex justify-center h-full w-full bg-accent-5 overflow-scroll'>
      <Leaves/>
        <div className='container flex flex-row flex-wrap xl:flex-nowrap xl:self-center'>
          <Menu items={MenuItems}/>
          <Card name='Kate Acharte' location='Salt Lake City, UT'/>
          <div className='flex-shrink inline-block py-8 mx-4 xl:mx-0 overflow-hidden'>
            <Content>
              {children}
            </Content>      
          </div> 
        </div>
      </div>
    </>
  )
}

export default Layout