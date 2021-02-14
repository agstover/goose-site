import {useRouter} from 'next/router'
import Link from 'next/link'
import MenuIcon from 'icons/menu'

const Menu = ({items, className, toggleDrawer}) => {
    return (
        <div className={`relative w-16 page-margin flex flex-col my-10 justify-between bg-accent-1 text-gray-200 ${className} sm:shadow-right`}>
            <Hamburger className='sm:shadow-right' toggle={toggleDrawer}/>
            <MenuBox items={items} />
            <Download className='sm:shadow-right' />
            {/* <div className='absolute w-full h-full top-0 left-0 right-box'/> */}
        </div>
    )
}

const Hamburger = ({className, toggle}) => {
    return (
        <button className={`text-center py-2 w-full bg-accent-4 ${className}`} aria-label="Open Menu" onClick={toggle}>
            <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-8 h-8 mx-auto text-black"
            >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    )
}

const Download = ({className}) => {
    return (
        <button className={`bg-accent-1 text-accent-4 p-4 w-full ${className}`}>CV</button>
    )
}

const MenuBox = ({className, items}) => {
    return (
        <div className={`${className}`}>
            {
                items.map((item, index) => {
                    return (<MenuItem key={item.title} item={item} isFirst={index === 0} isLast={index === items.length - 1}/>)
                })
            }
        </div>
    )
}

const MenuItem = ({item, isFirst, isLast}) => {
    const router = useRouter()
    const activeStyle = item.href === router.pathname ? 'bg-gray-300' : ''
    return (
        <Link href={item.href}>
            <a className={`${activeStyle} ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}` } href={item.href}>
                <div className='text-sm text-center p-1'>{item.title}</div>
            </a>       
        </Link>
    )
}

{/* <div className='flex justify-center xl:self-center rounded-lg text-sm' role='group'>
<Button className='rounded-l-lg rounded-r-lg xl:rounded-r-none px-4 py-2 mx-0 outline-none focus:shadow-outline'>Download CV</Button>
<Button className='rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline hidden xl:inline-block'>Contact Me</Button>
</div> */}

export default Menu