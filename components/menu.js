import {useRouter} from 'next/router'
import Link from 'next/link'

const Menu = ({items}) => {
    return (
        <div className='flex flex-row start w-full xl:w-auto justify-around xl:flex-col xl:mt-8 xl:m-2 xl:rounded-md bg-accent-3 text-accent-1 uppercase shadow-lg xl:shadow-none'>
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
            <a className={`hover:bg-gray-200 ${activeStyle} ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}` } href={item.href}>
                <div className='m-1 sm:my-4 mx-2 text-sm text-center p-1 sm:px-4 sm:py-2 outline-none focus:shadow-outline text-accent-1'>{item.title}</div>
            </a>        
        </Link>
    )
}

{/* <div className='flex justify-center xl:self-center rounded-lg text-sm' role='group'>
<Button className='rounded-l-lg rounded-r-lg xl:rounded-r-none px-4 py-2 mx-0 outline-none focus:shadow-outline'>Download CV</Button>
<Button className='rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline hidden xl:inline-block'>Contact Me</Button>
</div> */}

export default Menu