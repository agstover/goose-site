export default function Background({children}) {
    return (
        <div className='background bg-gradient-to-l from-accent-1 to-black'>
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
            {children}
        </div>
    )
}