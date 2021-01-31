const Menu = ({items}) => {
    return (
        <div className='flex flex-row w-full xl:flex-col xl:mt-8 xl:mx-4 xl:rounded-md bg-accent-3 text-accent-1 uppercase'>
            {
                items.map(item => <MenuItem key={item.title} item={item} />)
            }
        </div>
    )
}

const MenuItem = ({item}) => {
    return (
        <div className='my-4 mx-2 text-sm text-center'>
            <a href={item.href}>{item.title}</a>
        </div>
    )
}

export default Menu