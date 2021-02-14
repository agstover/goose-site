const Drawer = ({isOpen}) => {
    return (
        <aside className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul>
                <li>DRAWER CONTENT</li>
                <li>DRAWER CONTENT</li>
                <li>DRAWER CONTENT</li>

            </ul>
        </aside>
    )
}

export default Drawer