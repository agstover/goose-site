import Meta from 'components/meta'
import Menu from 'components/menu'
import Card from 'components/card'
import Background from 'components/background'
import Drawer from 'components/drawer'
import {useState} from 'react'
import Overlay from 'components/overlay'
import { motion } from 'framer-motion'

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
  const [isDrawerOpen, _toggleDrawer] = useState(false);
  const toggleDrawer = () => _toggleDrawer(!isDrawerOpen)
  return (
    <>
      <Meta />
      <Drawer isOpen={isDrawerOpen} />
      <Overlay isOpen={isDrawerOpen} toggle={toggleDrawer}/>
        <Background>
          <div className='relative page'>
            <div className='container h-full'>
              <div className='overflow-hidden flex h-full'>
                <div className='max-w-left-pane flex sm:w-1/2 z-10'>
                  <div className='flex h-full w-full'>
                    <Menu toggleDrawer={toggleDrawer} items={MenuItems}/>
                    <div className='w-full hidden sm:inline-block relative'>
                      <div className='bg-hero h-full bg-cover bg-no-repeat bg-center'></div>
                      <div className='text-white absolute bottom-0 left-0 right-0 text-center mb-24'>
                        <h1 className='text-5xl font-bold'>Kate Acharte</h1>
                        <h1 className='text-lg'>Landscape Designer</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  transition={{type: 'tween', duration:.4 }}
                  initial={{
                    opacity: .9,
                    x: '-100%',
                  }}
                  animate={{
                    opacity: 1,
                    x: '0%'
                  }}
                  exit={{
                    opacity: .9,
                    x: '-100%'
                  }}
                  className='sm:max-w-right-pane w-full sm:w-1/2 relative flex-auto z-0'
                >
                  <div className='flex absolute top-0 right-0 bottom-0 left-0'>
                      <div className='content bg-accent-1 text-gray-200 w-full page-margin overflow-hidden relative pl-8 sm:shadow-left z-0'>
                        <div className='py-12 pr-8 relative h-full max-w-full outline-none overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-accent-4 scrollbar-track-gray-400 scrollbar-thumb-rounded'>
                          <div>
                          {children}
                          </div>
                        </div>
                      </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Background>
    </>
  )
}

export default Layout